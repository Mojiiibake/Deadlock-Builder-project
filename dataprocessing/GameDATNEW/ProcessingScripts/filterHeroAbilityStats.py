import json
import os

os.chdir(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'VdataFiles'))

a = open('abilities.json')
h = open('heroes.json')

raw_abilities = json.load(a)
raw_heroes = json.load(h)

heroes = [x for x in raw_heroes if x.startswith("hero_") and raw_heroes[x]["m_bDisabled"] is False and raw_heroes[x]["m_bInDevelopment"] is False and raw_heroes[x]["m_bPlayerSelectable"] is True]

hero_abilities = dict()
hero_ability_stats = dict()


for i in heroes:
    hero_abilities[i] = raw_heroes[i]['m_mapBoundAbilities']
    AbilitySlots = hero_abilities[i].keys()
    temp_ability_stats = dict()
    for key in AbilitySlots:
        ability_name = hero_abilities[i][key]
        temp_ability_stats[key] = raw_abilities[ability_name]
    hero_ability_stats[i] = temp_ability_stats

with open("HeroAbilityStats.json", "w") as outfile:
    json.dump(hero_ability_stats, outfile)