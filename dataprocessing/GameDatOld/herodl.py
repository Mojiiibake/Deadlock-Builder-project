import json
import os
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from tqdm import tqdm
from urllib.parse import urlparse

# Function to download an image


def download_image(url, save_path):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        save_path.parent.mkdir(parents=True, exist_ok=True)
        with open(save_path, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
        return True, f"Downloaded: {url} -> {save_path}"
    except Exception as e:
        return False, f"Failed to download {url}: {str(e)}"

# Function to process a single hero


def process_hero(hero_data, base_dir):
    tasks = []

    images = hero_data.get('images', {})
    for image_type, url in images.items():
        if url.startswith('http'):
            parsed_url = urlparse(url)
            relative_path = Path(parsed_url.path.lstrip('/'))
            save_path = base_dir / relative_path
            tasks.append((url, save_path))

    return tasks

# Main function


def main():
    # Set up directories
    script_dir = Path(__file__).parent
    json_file = script_dir / 'RAWHeroes.json'
    assets_dir = script_dir / 'downloaded_assets'
    assets_dir.mkdir(exist_ok=True)

    # Load JSON data
    with open(json_file, 'r') as file:
        heroes_data = json.load(file)

    # Process heroes and collect download tasks
    all_tasks = []
    for hero_data in heroes_data:
        all_tasks.extend(process_hero(hero_data, assets_dir))

    # Download images using multithreading
    with ThreadPoolExecutor(max_workers=10) as executor:
        future_to_url = {executor.submit(
            download_image, url, save_path): url for url, save_path in all_tasks}

        with tqdm(total=len(all_tasks), desc="Downloading Hero Assets") as pbar:
            for future in as_completed(future_to_url):
                url = future_to_url[future]
                success, message = future.result()
                pbar.write(message)
                pbar.update(1)

    print("\nHero asset download completed!")


if __name__ == '__main__':
    main()
