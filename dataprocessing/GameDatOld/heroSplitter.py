import json
import os
from pathlib import Path


def split_hero_json(input_file, output_dir):
    # Ensure the output directory exists
    output_dir.mkdir(parents=True, exist_ok=True)

    # Read the input JSON file
    with open(input_file, 'r') as f:
        heroes_data = json.load(f)

    # Iterate through each hero object
    for hero in heroes_data:
        # Use the hero's name (or id if name is not available) for the filename
        hero_name = hero.get('name', hero.get('id', 'unknown'))
        # Clean the filename to ensure it's valid
        hero_filename = ''.join(
            c for c in hero_name if c.isalnum() or c in (' ', '-', '_')).rstrip()
        hero_filename = hero_filename.lower().replace(' ', '_')

        # Create the output file path
        output_file = output_dir / f"{hero_filename}.json"

        # Write the individual hero data to a new JSON file
        with open(output_file, 'w') as f:
            json.dump(hero, f, indent=2)

        print(f"Created: {output_file}")


def main():
    # Set up file paths
    script_dir = Path(__file__).parent
    input_file = script_dir / 'RAWHeroes.json'
    output_dir = script_dir / 'characterjson'

    # Run the splitting function
    split_hero_json(input_file, output_dir)

    print("\nHero JSON splitting completed!")


if __name__ == '__main__':
    main()
