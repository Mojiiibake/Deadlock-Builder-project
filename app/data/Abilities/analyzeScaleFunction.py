import json
from collections import defaultdict
from pathlib import Path


def extract_scale_functions(data):
    scale_functions = defaultdict(list)

    for hero, hero_data in data.items():
        for slot, slot_data in hero_data.items():
            if not slot.startswith('ESlot_Signature_'):
                continue

            if not isinstance(slot_data, dict):
                print(f"Warning: Unexpected data type for {
                      hero} {slot}: {type(slot_data)}")
                continue

            ability_properties = slot_data.get('m_mapAbilityProperties', {})
            if not isinstance(ability_properties, dict):
                print(f"Warning: Unexpected type for m_mapAbilityProperties in {
                      hero} {slot}: {type(ability_properties)}")
                continue

            for prop, prop_data in ability_properties.items():
                if not isinstance(prop_data, dict):
                    print(f"Warning: Unexpected type for property {
                          prop} in {hero} {slot}: {type(prop_data)}")
                    continue

                scale_func = prop_data.get('m_subclassScaleFunction', {})
                if not isinstance(scale_func, dict):
                    print(f"Warning: Unexpected type for m_subclassScaleFunction in {
                          hero} {slot} {prop}: {type(scale_func)}")
                    continue

                subclass = scale_func.get('subclass', {})
                if not isinstance(subclass, dict):
                    print(f"Warning: Unexpected type for subclass in {
                          hero} {slot} {prop}: {type(subclass)}")
                    continue

                scale_func_type = subclass.get('_class')
                if scale_func_type:
                    scale_functions[scale_func_type].append({
                        'hero': hero,
                        'slot': slot,
                        'property': prop,
                        'scale_function': subclass
                    })

    return scale_functions


# Get the directory of the current script
script_directory = Path(__file__).parent

# Load the JSON data from the same directory as the script
json_file = script_directory / 'HeroAbilityStats.json'

with open(json_file, 'r') as f:
    data = json.load(f)

# Extract scale functions
scale_functions = extract_scale_functions(data)

# Save the results to a new JSON file in the same directory
output_file = script_directory / 'ability_scale_functions.json'
with open(output_file, 'w') as f:
    json.dump(scale_functions, f, indent=2)

print(f"Scale functions have been extracted and saved to '{output_file}'")
