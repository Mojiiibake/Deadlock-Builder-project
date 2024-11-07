import json
import re
from pathlib import Path

# Get the directory where the script is located (optional safety)
script_dir = Path(__file__).parent

# Load the JSON file
items_file = script_dir / 'RAWitems.json'
with open(items_file, 'r') as file:
    data = json.load(file)

# Define your regular expression to match 'class_name' that starts with 'upgrade'
regex = re.compile(r'^upgrade[a-zA-Z0-9_]*')

# Filter out classes where the 'class_name' property matches the regular expression


def filter_and_extract_upgrades(json_data, regex):
    extracted = []

    if isinstance(json_data, list):
        remaining = []
        for item in json_data:
            # Check if the item's 'class_name' property matches the regex
            # Use search instead of match
            if 'class_name' in item and regex.search(item['class_name']):
                # Copy the matched class to be extracted
                extracted.append(item)
            else:
                # Keep classes that don't match the regex
                remaining.append(item)
        return remaining, extracted

    elif isinstance(json_data, dict):
        # Go through each key-value pair in the dictionary
        for key, value in json_data.items():
            if isinstance(value, list) or isinstance(value, dict):
                json_data[key], extracted_items = filter_and_extract_upgrades(
                    value, regex)
                extracted.extend(extracted_items)

    return json_data, extracted


# Apply the filtering and extraction to the data
filtered_data, extracted_upgrades = filter_and_extract_upgrades(data, regex)

# Save the extracted upgrades to 'upgrades.json'
upgrades_file = script_dir / 'upgrades.json'
with open(upgrades_file, 'w') as upgrades_file_handle:
    json.dump(extracted_upgrades, upgrades_file_handle, indent=4)

# Save the modified original JSON back to 'RAWitems.json'
with open(items_file, 'w') as original_file_handle:
    json.dump(filtered_data, original_file_handle, indent=4)

print(f"Extracted upgrades have been copied to 'upgrades.json' and removed from 'RAWitems.json'.")
