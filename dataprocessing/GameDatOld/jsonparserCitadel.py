import json
import re
from pathlib import Path

# Get the directory where the script is located
script_dir = Path(__file__).parent

# Load the JSON file from the same directory as the script
items_file = script_dir / 'RAWitems.json'

with open(items_file, 'r') as file:
    data = json.load(file)

# Define the regular expression to match 'name' that starts with 'citadel'
regex = re.compile(r'"name":\s*"citadel[a-zA-Z0-9_]*"')

# Filter out classes where the 'name' property matches the regular expression


def filter_and_extract_classes(json_data, regex):
    extracted = []

    if isinstance(json_data, list):
        remaining = []
        for item in json_data:
            # Check if the item's 'name' property matches the regex
            if 'name' in item and regex.match(f'"name": "{item["name"]}"'):
                # Copy the matched class to be extracted
                extracted.append(item)
            else:
                # Keep classes that don't match the regex
                remaining.append(item)
        return remaining, extracted

    elif isinstance(json_data, dict):
        for key, value in json_data.items():
            if isinstance(value, list) or isinstance(value, dict):
                json_data[key], extracted_items = filter_and_extract_classes(
                    value, regex)
                extracted.extend(extracted_items)

    return json_data, extracted


# Apply the filtering and extraction to the data
filtered_data, extracted_classes = filter_and_extract_classes(data, regex)

# Save the extracted classes to 'citadel.json' in the same directory
citadel_file = script_dir / 'citadel.json'

with open(citadel_file, 'w') as citadel_file_handle:
    json.dump(extracted_classes, citadel_file_handle, indent=4)

# Save the modified original JSON back to 'RAWitems.json' in the same directory
with open(items_file, 'w') as original_file_handle:
    json.dump(filtered_data, original_file_handle, indent=4)

print(f"Extracted classes have been copied to 'citadel.json' and removed from 'RAWitems.json'.")
