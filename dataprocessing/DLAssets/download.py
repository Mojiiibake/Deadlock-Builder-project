from tqdm import tqdm
import requests
import os
import json
import sys
import subprocess
import time
from pathlib import Path
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed

# Function to check and install dependencies


def check_and_install_dependencies():
    required_packages = ['requests', 'tqdm']
    installed_packages = []

    for package in required_packages:
        try:
            __import__(package)
            installed_packages.append(package)
        except ImportError:
            print(f"{package} is not installed. Attempting to install...")
            try:
                subprocess.check_call(
                    [sys.executable, "-m", "pip", "install", package])
                print(f"Successfully installed {package}")
                installed_packages.append(package)
            except subprocess.CalledProcessError:
                print(f"Failed to install {
                      package}. Please install it manually.")
                sys.exit(1)

    return installed_packages


# Check and install dependencies
installed_packages = check_and_install_dependencies()

# Now we can safely import these modules

# Directory where the JSON files are located (same as the script)
json_dir = Path(__file__).parent

# Create a directory for storing the downloaded images
download_dir = json_dir / 'downloaded_images'
download_dir.mkdir(exist_ok=True)

# Function to download an image and save it locally


def download_image(image_url, base_dir, max_retries=3):
    parsed_url = urlparse(image_url)
    path = parsed_url.path.lstrip('/')  # Remove leading slash
    local_dir = base_dir / Path(path).parent
    local_dir.mkdir(parents=True, exist_ok=True)
    local_file_path = base_dir / path

    # Check if file already exists
    if local_file_path.exists():
        return True, None, f"Skipped: {image_url} (already exists)"

    for attempt in range(max_retries):
        try:
            response = requests.get(image_url, stream=True)
            response.raise_for_status()

            total_size = int(response.headers.get('content-length', 0))
            block_size = 1024  # 1 KB

            with open(local_file_path, 'wb') as file:
                for data in response.iter_content(block_size):
                    file.write(data)

            return True, None, f"Downloaded: {image_url} -> {local_file_path}"
        except Exception as e:
            if attempt < max_retries - 1:
                time.sleep(1)
            else:
                return False, str(e), f"Failed to download {image_url}: {str(e)}"

    return False, "Max retries reached", f"Failed to download {image_url}: Max retries reached"

# Function to process a JSON file


def process_json_file(json_file, download_dir):
    with open(json_file, 'r') as file:
        data = json.load(file)

    # Variables to keep track of progress
    images_to_download = []

    # Recursive function to look for 'image' properties in the JSON data
    def find_images(json_data):
        if isinstance(json_data, list):
            for item in json_data:
                find_images(item)
        elif isinstance(json_data, dict):
            if 'image' in json_data:
                images_to_download.append(json_data['image'])
            for value in json_data.values():
                if isinstance(value, (list, dict)):
                    find_images(value)

    # Start processing the JSON data
    find_images(data)

    # Download images with multithreading
    images_downloaded = 0
    errors = []

    with ThreadPoolExecutor(max_workers=10) as executor:
        future_to_url = {executor.submit(
            download_image, image_url, download_dir): image_url for image_url in images_to_download}

        with tqdm(total=len(images_to_download), desc="Total Progress") as pbar:
            for future in as_completed(future_to_url):
                image_url = future_to_url[future]
                success, error_message, status = future.result()
                if success:
                    images_downloaded += 1
                    pbar.write(status)
                else:
                    pbar.write(status)
                    user_choice = input(f"Failed to download {
                                        image_url}. Retry (r) or Skip (s)? ")
                    if user_choice.lower() == 'r':
                        success, error_message, status = download_image(
                            image_url, download_dir)
                        if success:
                            images_downloaded += 1
                            pbar.write(status)
                        else:
                            errors.append(status)
                            pbar.write(status)
                    else:
                        errors.append(f"Skipped {image_url}")
                pbar.update(1)

    return images_downloaded, errors

# Main function to process all JSON files in the directory


def main():
    json_files = list(json_dir.glob('*.json'))
    total_images_downloaded = 0
    total_errors = []

    print(f"Found {len(json_files)} JSON files to process.")

    for i, json_file in enumerate(json_files, 1):
        print(f"\nProcessing {json_file.name} ({i}/{len(json_files)})...")
        images_downloaded, errors = process_json_file(json_file, download_dir)
        total_images_downloaded += images_downloaded
        total_errors.extend(errors)

    # Summary
    print("\nDownload Summary:")
    print(f"Total images downloaded: {total_images_downloaded}")
    print(f"Total errors: {len(total_errors)}")
    if total_errors:
        print("\nErrors encountered:")
        for error in total_errors:
            print(f" - {error}")


if __name__ == '__main__':
    main()
