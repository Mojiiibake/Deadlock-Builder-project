'use client';
import Link from 'next/link';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from "next/image";
import ItemGrid from './ItemGrid';
import StatsSidebar from './StatsSidebar';
import { ItemsDisplay, getCategory } from './ItemsDisplay';
import { AWithKey, SkillsData, skillProperties, skillDisplayGroups, skillUpgrades, skillScaleData } from '../lib/abilityInterface';
import { upgradesWithName } from '../lib/itemInterfaces';
import { heroesWithName } from '../lib/herointerfaces';
import { allStats } from '../lib/dataUtils';
import Navbar from '../ui/Navbar';
import { calculateAllStats } from '../lib/clientUtils';

interface CharacterBuilderProps {
    characterNameFromMap: string
    character: heroesWithName;
    items: upgradesWithName[];
    initialStats: allStats;
    abilities: AWithKey[];
}

const CharacterBuilder: React.FC<CharacterBuilderProps> = ({ characterNameFromMap, character, items, initialStats, abilities }) => {
    const heroName = useMemo(() =>
        character.name.replace(/^hero_/, '').replace(/^\w/, c => c.toUpperCase()),
        [character.name]
    );
    const actualname = characterNameFromMap;

    // Memoize skills data initialization
    const {
        heroSkills,
        skillProps,
        skillDG,
        skillIcons,
        skillUpgradeInfo,
        skillScaling
    } = useMemo(() => {
        let heroSkills = [] as SkillsData[];
        let skillProps = [{}, {}, {}, {}] as skillProperties[];
        let skillDG = [[], [], [], []] as skillDisplayGroups[][];
        let skillIcons: Array<string> = [];
        let skillUpgradeInfo = [[], [], [], []] as skillUpgrades[][];
        let skillScaling = [{}, {}, {}, {}] as skillScaleData[];

        // Find matching ability data
        const abilityData = abilities.find(ability => ability.heroname === character.name);
        if (abilityData) {
            heroSkills = [
                JSON.parse(JSON.stringify(abilityData.adata.ESlot_Signature_1)),
                JSON.parse(JSON.stringify(abilityData.adata.ESlot_Signature_2)),
                JSON.parse(JSON.stringify(abilityData.adata.ESlot_Signature_3)),
                JSON.parse(JSON.stringify(abilityData.adata.ESlot_Signature_4))
            ];

            // Process skill properties and icons
            heroSkills.forEach((element, index) => {
                for (const [skey, value] of Object.entries(element.m_mapAbilityProperties)) {
                    if (parseFloat(value.m_strValue) !== 0) {
                        skillProps[index][skey] = parseFloat(value.m_strValue);
                        if (value.m_subclassScaleFunction && value.m_subclassScaleFunction.subclass.m_bFunctionDisabled !== true) {
                            skillScaling[index][skey] = value.m_subclassScaleFunction.subclass;
                        }
                    }
                }

                skillUpgradeInfo[index] = element.m_vecAbilityUpgrades;
                skillIcons[index] = element.m_strAbilityImage.replace(/^panorama:"/, '').replace(/"$/, '').replace('.psd', '_psd.png');
            });

            // Generate skill display groups
            for (let i = 0; i < skillProps.length; i++) {
                const sProp = skillProps[i];
                for (const skey in sProp) {
                    let slabel = skey.includes("Ability")
                        ? skey.replace("Ability", '').replace(/([A-Z])/g, ' $1').trim()
                        : skey.replace(/([A-Z])/g, ' $1').trim();

                    skillDG[i].push({
                        key: skey,
                        name: slabel,
                        skillName: heroSkills[i]._class
                    });
                }
            }
        }

        return {
            heroSkills,
            skillProps,
            skillDG,
            skillIcons,
            skillUpgradeInfo,
            skillScaling
        };
    }, [character.name, abilities]);

    const [searchTerm, setSearchTerm] = useState('');
    const [weaponItems, setWeaponItems] = useState<(upgradesWithName | null)[]>(Array(4).fill(null));
    const [vitalityItems, setVitalityItems] = useState<(upgradesWithName | null)[]>(Array(4).fill(null));
    const [spiritItems, setSpiritItems] = useState<(upgradesWithName | null)[]>(Array(4).fill(null));
    const [utilityItems, setUtilityItems] = useState<(upgradesWithName | null)[]>(Array(4).fill(null));
    const [currentStats, setCurrentStats] = useState<allStats>(initialStats);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [skillUpgrades, setskillUpgrades] = useState<skillUpgrades[][]>(
        skillUpgradeInfo.map(() => [])
    );
    const [skillStats, setSkillStats] = useState<skillProperties[]>(skillProps);
    const [characterLevel, setCharacterLevel] = useState(1);
    const [budget, setBudget] = useState(0);
    const maxLevel = useMemo(() =>
        Object.keys(character.data.m_mapLevelInfo).length,
        [character.data.m_mapLevelInfo]
    );

    const [leveledStats, setLeveledStats] = useState<allStats>(initialStats);
    const [abilityPoints, setAbilityPoints] = useState<number>(0);

    // Memoize all equipped items
    const allEquippedItems = useMemo(() =>
        [...weaponItems, ...vitalityItems, ...spiritItems, ...utilityItems].filter(
            (item): item is upgradesWithName => item !== null
        ),
        [weaponItems, vitalityItems, spiritItems, utilityItems]
    );

    // Calculate total cost with useMemo
    const totalCost = useMemo(() => {
        const tierCost = {
            "EModTier_1": 500,
            "EModTier_2": 1250,
            "EModTier_3": 3000,
            "EModTier_4": 6200
        };

        return allEquippedItems.reduce((sum, item) =>
            sum + (tierCost[item.desc.m_iItemTier as keyof typeof tierCost] || 0),
            0
        );
    }, [allEquippedItems]);

    // Memoize filtered items
    const filteredItems = useMemo(() =>
        items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [items, searchTerm]
    );

    // Memoize level calculations
    useEffect(() => {
        let newLeveledStats = { ...initialStats };
        let newAbilityPoints = 0;
        let totalStandardUpgrades = 0;

        for (let level = 1; level <= characterLevel; level++) {
            const levelInfo = (character.data as any).m_mapLevelInfo[level.toString()];

            if (levelInfo) {
                if (level === characterLevel) {
                    setBudget(levelInfo.m_unRequiredGold);
                }

                if (levelInfo.m_mapBonusCurrencies && 'EAbilityPoints' in levelInfo.m_mapBonusCurrencies) {
                    newAbilityPoints += levelInfo.m_mapBonusCurrencies.EAbilityPoints;
                }

                if (levelInfo.m_bUseStandardUpgrade) {
                    totalStandardUpgrades++;
                }
            }
        }

        if (totalStandardUpgrades > 0) {
            const levelUpgrades = (character.data as any).m_mapStandardLevelUpUpgrades;
            const meleeDamageIncrease = (levelUpgrades.MODIFIER_VALUE_BASE_MELEE_DAMAGE_FROM_LEVEL || 0) * totalStandardUpgrades;

            newLeveledStats.EBulletDamage += (levelUpgrades.MODIFIER_VALUE_BASE_BULLET_DAMAGE_FROM_LEVEL || 0) * totalStandardUpgrades;
            newLeveledStats.ELightMeleeDamage += meleeDamageIncrease;
            newLeveledStats.EHeavyMeleeDamage += meleeDamageIncrease * (initialStats.EHeavyMeleeDamage / initialStats.ELightMeleeDamage);
            newLeveledStats.EMaxHealth += (levelUpgrades.MODIFIER_VALUE_BASE_HEALTH_FROM_LEVEL || 0) * totalStandardUpgrades;
        }

        setLeveledStats(newLeveledStats);
        setAbilityPoints(newAbilityPoints);
    }, [characterLevel, character.data, initialStats]);

    // Memoize stat calculations
    useEffect(() => {
        try {
            const { characterStats, skillStats } = calculateAllStats(
                character,
                weaponItems,
                vitalityItems,
                spiritItems,
                utilityItems,
                leveledStats,
                heroSkills,
                skillProps,
                skillUpgrades,
                skillScaling,
                abilities
            );

            setCurrentStats(characterStats);
            setSkillStats(skillStats);
        } catch (error) {
            console.error('Error calculating stats:', error);
            setErrorMessage(error instanceof Error ? error.message : 'Error calculating stats');
        }
    }, [
        character,
        weaponItems,
        vitalityItems,
        spiritItems,
        utilityItems,
        skillUpgrades,
        leveledStats,
        heroSkills,
        skillProps,
        skillScaling,
        abilities
    ]);

    // Memoize handlers
    const handleLevelChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterLevel(parseInt(event.target.value, 10));
    }, []);

    const handleBudgetChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newBudget = parseInt(event.target.value, 10);
        const minBudget = character.data.m_mapLevelInfo[characterLevel.toString() as keyof typeof character.data.m_mapLevelInfo]['m_unRequiredGold'];
        setBudget(Math.max(newBudget, minBudget));
    }, [character.data.m_mapLevelInfo, characterLevel]);

    const handleSkillUpgrade = useCallback((skillIndex: number) => {
        setskillUpgrades(prevUpgrades => {
            const newUpgrades = [...prevUpgrades];
            const currentUpgradeLevel = newUpgrades[skillIndex].length;

            if (currentUpgradeLevel < skillUpgradeInfo[skillIndex].length) {
                newUpgrades[skillIndex] = skillUpgradeInfo[skillIndex].slice(0, currentUpgradeLevel + 1);
            } else {
                newUpgrades[skillIndex] = [];
            }
            return newUpgrades;
        });
    }, [skillUpgradeInfo]);

    const handleItemToggle = useCallback((item: upgradesWithName) => {
        const category = getCategory(item.desc.m_eItemSlotType as string || '');
        const tierCost = {
            "EModTier_1": 500,
            "EModTier_2": 1250,
            "EModTier_3": 3000,
            "EModTier_4": 6200
        };

        const existingIndex = [...weaponItems, ...vitalityItems, ...spiritItems, ...utilityItems]
            .findIndex(equippedItem => equippedItem?.name === item.name);

        if (existingIndex !== -1) {
            // Unequip logic
            const gridToUpdate = existingIndex < 4 ? setWeaponItems :
                existingIndex < 8 ? setVitalityItems :
                    existingIndex < 12 ? setSpiritItems :
                        setUtilityItems;

            gridToUpdate(prev => {
                const newGrid = [...prev];
                newGrid[existingIndex % 4] = null;
                return newGrid;
            });
        } else {
            // Equip logic
            const itemCost = tierCost[item.desc.m_iItemTier as keyof typeof tierCost] || 0;

            if (totalCost + itemCost > budget) {
                setErrorMessage('Not enough budget to equip this item!');
                setTimeout(() => setErrorMessage(null), 3000);
                return;
            }

            const updateGrid = (setPrimaryGrid: React.Dispatch<React.SetStateAction<(upgradesWithName | null)[]>>, primaryGrid: (upgradesWithName | null)[]) => {
                const emptyIndex = primaryGrid.findIndex(slot => slot === null);
                if (emptyIndex !== -1) {
                    setPrimaryGrid(prev => {
                        const newGrid = [...prev];
                        newGrid[emptyIndex] = item;
                        return newGrid;
                    });
                    return true;
                }
                return false;
            };

            let equipped = false;
            switch (category) {
                case 'Weapon':
                    equipped = updateGrid(setWeaponItems, weaponItems);
                    break;
                case 'Vitality':
                    equipped = updateGrid(setVitalityItems, vitalityItems);
                    break;
                case 'Spirit':
                    equipped = updateGrid(setSpiritItems, spiritItems);
                    break;
                default:
                    equipped = updateGrid(setUtilityItems, utilityItems);
                    break;
            }

            if (!equipped && category !== 'Utility') {
                equipped = updateGrid(setUtilityItems, utilityItems);
            }

            if (!equipped) {
                setErrorMessage('No empty slots available!');
                setTimeout(() => setErrorMessage(null), 3000);
            }
        }
    }, [weaponItems, vitalityItems, spiritItems, utilityItems, totalCost, budget]);
    const getEquippedItemsbyCategory = useCallback(() => {
        return [weaponItems, vitalityItems, spiritItems, utilityItems];
    }, [weaponItems, vitalityItems, spiritItems, utilityItems]);
    return (
        <div className="flex-1 flex flex-col bg-gray-900">
            <Navbar />

            {/* Main layout container */}
            <div className="flex-1 flex relative">
                {/* Main content area that will shrink with sidebar */}
                <div className="flex-1 p-4  mr-[350px]">
                    {/* Content wrapper */}
                    <div className="flex flex-col xl:flex-row gap-8 max-w-[2000px] mx-auto">
                        {/* Left column - Character info and equipment grids */}
                        <div className="flex flex-row min-w-fit 2xl:flex-col flex-wrap">
                            {/* Character info section */}

                            <div className="mb-2  flex flex-col items-center float-left select-none">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4 text-white">{actualname}</h2>
                                </div>
                                <Link href="/" className="text-custom-beige hover:text-gray-300 block">
                                    {/* Character image */}
                                    {character.data.m_strIconHeroCard && (
                                        <Image
                                            src={character.data.m_strIconHeroCard as string}
                                            alt={actualname}
                                            width={120}
                                            height={120}
                                            className="rounded-full mb-2 object-none select-none pointer-events-none"
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto"
                                            }}
                                        />
                                    )}
                                </Link>


                                {/* Level slider */}
                                <div className="w-full mb-4">
                                    <label htmlFor="level-slider" className="block text-m font-medium text-amber-500">
                                        Character Level: <span className="text-[#70F8C1]">{characterLevel}</span>
                                    </label>
                                    <input
                                        type="range"
                                        id="level-slider"
                                        min="1"
                                        max={maxLevel}
                                        value={characterLevel}
                                        onChange={handleLevelChange}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:bg-amber-500"
                                    />
                                </div>

                                {/* Budget input */}
                                <div className="w-full mb-4">
                                    <label htmlFor="budget-input" className="block text-sm font-medium text-amber-500">
                                        Budget:
                                    </label>
                                    <input
                                        type="number"
                                        id="budget-input"
                                        value={budget}
                                        onChange={handleBudgetChange}
                                        min={character.data.m_mapLevelInfo[characterLevel.toString() as keyof typeof character.data.m_mapLevelInfo]['m_unRequiredGold']}
                                        className="bg-amber-500 border border-amber-500 text-gray-900 text-sm rounded-lg focus:ring-amber-600 focus:border-amber-500 block w-full p-2 dark:bg-custom-bg dark:border-amber-500 dark:placeholder-[#70F8C1] dark:text-[#70F8C1] dark:focus:ring-amber-600 dark:focus:border-amber-500 text-center"
                                    />
                                </div>

                                {/* Cost display */}
                                <p className="text-amber-500 mb-3">
                                    Total Cost: <span className="text-[#70F8C1]">{totalCost}</span>
                                    <span className="text-lg font-bold"> / </span>
                                    <span className="text-[#70F8C1]">{budget}</span>
                                </p>

                                {/* Skill icons */}
                                <div className="flex space-x-2 p-4">
                                    {skillIcons.map((skillIcon, index) => (
                                        <div key={index} className="relative border-2 border-[#dbb2f7] rounded-full p-1">
                                            <Image
                                                src={skillIcon}
                                                alt={`Skill ${index + 1}`}
                                                width={50}
                                                height={50}
                                                className="rounded-full cursor-pointer"
                                                onClick={() => handleSkillUpgrade(index)}
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "auto"
                                                }}
                                            />
                                            <div className="absolute bottom-0 right-0 bg-[#8A55B3] rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                                                {skillUpgrades[index].length}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Equipment grids */}
                            <div className="justify-items-center grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-x-8 gap-y-2 2xl:gap-4 mb-4 select-none">
                                <ItemGrid
                                    title="Weapon"
                                    items={weaponItems}
                                    onItemToggle={(item) => handleItemToggle(item)}
                                />
                                <ItemGrid
                                    title="Vitality"
                                    items={vitalityItems}
                                    onItemToggle={(item) => handleItemToggle(item)}
                                />
                                <ItemGrid
                                    title="Spirit"
                                    items={spiritItems}
                                    onItemToggle={(item) => handleItemToggle(item)}
                                />
                                <ItemGrid
                                    title="Flex"
                                    items={utilityItems}
                                    onItemToggle={(item) => handleItemToggle(item)}
                                />
                            </div>
                        </div>

                        {/* Right column - Items section */}
                        <div className="flex-1">
                            {errorMessage && (
                                <div className="bg-red-500 text-white p-2 mb-4 rounded">
                                    {errorMessage}
                                </div>
                            )}

                            <input
                                type="text"
                                placeholder="Search upgrade items..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
                            />

                            <div>
                                <h3 className="text-xl font-bold mb-4 text-white">Available Items</h3>
                                <ItemsDisplay
                                    items={filteredItems}
                                    onItemSelect={handleItemToggle}
                                    equippedItems={allEquippedItems}
                                    equipediItemsByCategory={getEquippedItemsbyCategory()}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats sidebar - Fixed width */}
                <div className="absolute top-0 right-0 bottom-0 lg:w-[350px] md:w-[270px] sm:w-[220px] border-l border-gray-700">
                    <div className="h-full overflow-y-auto">
                        <StatsSidebar
                            characterStats={currentStats}
                            characterName={heroName}
                            characterClass={character.data._class as string}
                            characterSkillsData={skillStats}
                            skillLabels={skillDG}
                            skillImages={skillIcons}
                            skillUpgrades={skillUpgradeInfo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CharacterBuilder);