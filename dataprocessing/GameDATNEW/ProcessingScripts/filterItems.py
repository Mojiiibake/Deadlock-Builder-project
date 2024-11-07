import json
import os

os.chdir(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'VdataFiles'))

with open("abilities.json", "r") as f:
    abilities = json.load(f)


filteredItems = dict()

#print(abilities["ability_incendiary_projectile"]["m_mapAbilityProperties"].keys())

for ability in abilities.keys():
        
        if type(abilities[ability]) is dict:
            try:
                if abilities[ability]['m_eAbilityType'] == "EAbilityType_Item" and ('m_bDisabled' not in abilities[ability] or abilities[ability]['m_bDisabled'] == False or abilities[ability]['m_bDisabled'] == "false") and ('_multibase' in abilities[ability] and ('base' not in abilities[ability]['_multibase'][0] and abilities[ability]['_multibase'][0] != "common_properties")) :
                     filteredItems[ability] = abilities[ability]
            except:
                pass

#["Damage"]["m_subclassScaleFunction"]["subclass"]["m_flStatScale"]

with open("FilteredItem.json", "w") as f:
    json.dump(filteredItems, f, indent=4)