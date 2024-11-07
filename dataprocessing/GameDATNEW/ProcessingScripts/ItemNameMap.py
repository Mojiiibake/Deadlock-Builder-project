from pathlib import Path
import json
import os
file = open(Path(__file__).parent / '../In_Game_Items.txt')

rawData = file.readlines()


IGname = []
CodeName = []
for i, x in enumerate(rawData):
    NameSplit = x.replace("\n", "").split(":")
    IGname.append(NameSplit[0])
    CodeName.append(NameSplit[1].replace(" ", ""))


NamePairs = dict()
for i, x in enumerate(IGname):
    NamePairs[CodeName[i]] = x

outDir = os.path.join(os.getcwd(), "app/data/Items/ItemNameDict.json")
with open(outDir, "w") as outfile:
    json.dump(NamePairs, outfile)