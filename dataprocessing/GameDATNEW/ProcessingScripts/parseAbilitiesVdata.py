import json
from kv3parser import kv3_to_json
import os

os.chdir(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'VdataFiles'))

# Path to your .vdata file
vdata_file_path = 'abilities.vdata'

# Read the content of the .vdata file
with open(vdata_file_path, 'r', encoding='utf-8') as file:
    vdata_content = file.read()

try:
    # Parse the KV3 content
    json_output = kv3_to_json(vdata_content)

    # Print or save the JSON output
    print(json_output)

    # Optionally, save to a file
    with open('abilities.json', 'w', encoding='utf-8') as json_file:
        json_file.write(json_output)

except Exception as e:
    print(f"Error parsing KV3: {e}")
