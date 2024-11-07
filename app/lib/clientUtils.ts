// lib/clientUtils.ts
import { heroesWithName } from './herointerfaces';
import { upgradesWithName, upgrades } from './itemInterfaces';
import {
    skillProperties,
    skillScaleData,
    SkillsData,
    skillUpgrades,
    AWithKey,
    AData
} from './abilityInterface';
import statMap from './statmap.json';

export interface allStats {
    [key: string]: number;
}

export interface ItemModifiers {
    [key: string]: number;
}

export interface ModifierValues {
    [key: string]: number;
}

interface AP2 {
    m_eProvidedPropertyType?: string;
    m_strValue?: string;
    m_UsageFlags?: string;
    m_eApplyFilter?: string;
    m_subclassScaleFunction?: {
        subclass: {
            m_bFunctionDisabled?: boolean;
            _class?: string;
            m_eSpecificStatScaleType?: string;
            m_flStatScale?: number;
            m_vecScalingStats?: string[];
        };
    };
    [key: string]: any;
}

interface mMAP {
    [key: string]: AP2;
}

interface ScaleFunction {
    _class?: string;
    m_eSpecificStatScaleType?: string;
    m_flStatScale?: number;
    m_vecScalingStats?: string[];
    [key: string]: any;
}

interface PropertyValue {
    m_eProvidedPropertyType: string;
    m_strValue: string;
    m_UsageFlags?: string;
    m_eApplyFilter?: string;
    m_subclassScaleFunction?: {
        subclass: {
            m_bFunctionDisabled?: boolean;
            _class?: string;
            m_eSpecificStatScaleType?: string;
            m_flStatScale?: number;
            m_vecScalingStats?: string[];
        };
    };
}

interface AbilityProperties {
    [key: string]: PropertyValue;
}

function extractItemModifiersClient(item: upgrades): ItemModifiers {
    const modifiers: ItemModifiers = {};
    if (!item.m_mapAbilityProperties) return modifiers;

    const properties = item.m_mapAbilityProperties as unknown as mMAP;

    for (const [key, value] of Object.entries(properties)) {
        if (value &&
            typeof value === 'object' &&
            'm_eProvidedPropertyType' in value &&
            'm_strValue' in value &&
            value.m_strValue &&
            parseFloat(value.m_strValue) !== 0) {

            const propertyType = value.m_eProvidedPropertyType;
            if (propertyType && propertyType in statMap) {
                const statInfo = statMap[propertyType as keyof typeof statMap];
                const numericValue = parseFloat(value.m_strValue);

                if (isNaN(numericValue)) continue;


                if (propertyType === "MODIFIER_VALUE_TECH_LIFESTEAL" ||
                    propertyType === "MODIFIER_VALUE_BULLET_LIFESTEAL") {
                    const statKey = propertyType === "MODIFIER_VALUE_TECH_LIFESTEAL" ?
                        "ETechLifesteal" : "EBulletLifesteal";
                    modifiers[statKey] = numericValue;
                    continue;
                }

                const isBasicModifier = statInfo.mod_type !== 'skip'
                    && statInfo.mod_type !== 'percent'
                    && value.m_UsageFlags !== "APUsageFlag_ModifierConditional"
                    && value.m_eApplyFilter !== "EApplyFilter_OnlyIfImbued"
                    && !(key.includes("When") || key.includes("With") ||
                        key.includes("Charged") || key.includes("Active"));

                if (isBasicModifier && item.itemkey !== "Divine Barrier" &&
                    item.itemkey !== "Crippling Headshot") {
                    modifiers[statInfo.stat] = numericValue;
                } else if (statInfo.mod_type !== 'skip' &&
                    statInfo.mod_type === 'percent') {
                    modifiers[statInfo.stat + '_percent'] = numericValue;
                } else if (isBasicModifier && item.itemkey === "Divine Barrier" &&
                    key !== "BonusMoveSpeed") {
                    modifiers[statInfo.stat] = numericValue;
                } else if (isBasicModifier && item.itemkey === "Crippling Headshot" &&
                    !key.includes("ResistReduction")) {
                    modifiers[statInfo.stat] = numericValue;
                }
            }
        }
    }
    return modifiers;
}

export function calculateClientStats(
    character: heroesWithName,
    equippedItems: upgradesWithName[],
    characterStatInput: allStats,
    heroSkills: SkillsData[],
    skillProps: skillProperties[],
    skillUpgrades: skillUpgrades[][],
    skillScaling: skillScaleData[],
    abilities: AWithKey[]
): { characterStats: allStats, skillStats: skillProperties[] } {
    let newStats: allStats = Object.assign({}, characterStatInput);

    const weaponStats = abilities.find((element) =>
        element.heroname === character.name
    )?.adata.ESlot_Weapon_Primary?.m_WeaponInfo;

    let modifierValues = {} as ModifierValues;

    // Process equipped items
    equippedItems.forEach(item => {
        const icat = (item.desc.m_eItemSlotType as string).includes('_Weapon') ? "Weapon" :
            ((item.desc.m_eItemSlotType as string).includes('_Armor') ? "Vitality" : "Spirit");
        const itier = (item.desc.m_iItemTier as string).includes("Tier_1") ? 1 :
            ((item.desc.m_iItemTier as string).includes("Tier_2") ? 2 :
                ((item.desc.m_iItemTier as string).includes("Tier_3") ? 3 : 4));

        // Apply base tier stats
        switch (icat) {
            case "Weapon": {
                const damageIncrease = itier === 1 ? 6 : (itier === 2 ? 10 : (itier === 3 ? 14 : 18));
                modifierValues['EBaseWeaponDamageIncrease'] =
                    (modifierValues['EBaseWeaponDamageIncrease'] || 0) + damageIncrease;
                break;
            }
            case "Vitality": {
                const healthPercent = itier === 1 ? 11 : (itier === 2 ? 14 : (itier === 3 ? 17 : 20));
                modifierValues["EBaseHealth_percent"] =
                    (modifierValues["EBaseHealth_percent"] || 0) + healthPercent;
                break;
            }
            case "Spirit": {
                const techPower = itier === 1 ? 4 : (itier === 2 ? 8 : (itier === 3 ? 12 : 16));
                modifierValues["ETechPower"] =
                    (modifierValues["ETechPower"] || 0) + techPower;
                break;
            }
        }

        // Process item modifiers
        const itemModifiers = extractItemModifiersClient(item.desc);
        Object.entries(itemModifiers).forEach(([stat, value]) => {
            if (stat.includes('_percent')) {
                modifierValues[stat] = (modifierValues[stat] || 0) + value;
            } else if (
                stat === "EBulletArmorDamageReduction" ||
                stat === "ETechArmorDamageReduction"
            ) {
                modifierValues[stat] = modifierValues[stat] === undefined ?
                    (1 - value / 100) :
                    modifierValues[stat] * (1 - value / 100);
            } else if (
                stat === "ETechLifesteal" ||
                stat === "EBulletLifesteal"
            ) {
                modifierValues[stat] = modifierValues[stat] === undefined ?
                    value :
                    modifierValues[stat] + value * (1 - modifierValues[stat] / 100);
            } else if (stat === "ETechCooldown") {
                modifierValues[stat] = modifierValues[stat] === undefined ?
                    (1 - value / 100) :
                    modifierValues[stat] * (1 - value / 100);
            } else {
                modifierValues[stat] = (modifierValues[stat] || 0) + value;
            }
        });
    });

    // Sort modifiers for correct application order
    let mkey = Object.keys(modifierValues);
    mkey.sort((a, b) => {
        const priorityStats = [
            "EMaxHealth_percent",
            "EBaseWeaponDamageIncrease",
            "EBulletArmorReduction",
            "ETechLifesteal",
            "EBulletLifesteal"
        ];
        return (priorityStats.includes(a)) ? 1 :
            (priorityStats.includes(b)) ? -1 :
                a.localeCompare(b);
    });

    // Apply modifiers
    for (const key of mkey) {
        const value = modifierValues[key];

        switch (key) {
            case "EBaseWeaponDamageIncrease": {
                newStats[key] += value;
                newStats['EBulletDamage'] *= (1 + value / 100);
                newStats['ELightMeleeDamage'] += (characterStatInput['ELightMeleeDamage'] * value / 200);
                newStats['EHeavyMeleeDamage'] += (characterStatInput['EHeavyMeleeDamage'] * value / 200);
                break;
            }
            case "ETechLifesteal":
            case "EBulletLifesteal": {
                newStats[key] = value;
                break;
            }
            case "EFireRate": {
                if (weaponStats) {
                    newStats[key] += value;
                    const heroName = character.name.replace('hero_', '');

                    if (["lash", "chrono", "gigawatt"].includes(heroName)) {
                        const intraBurstCycleTime = (weaponStats as any).m_flIntraBurstCycleTime || 0;
                        newStats['ERoundsPerSecond'] = weaponStats.m_iBurstShotCount /
                            ((weaponStats.m_flCycleTime / (1 + value / 100)) +
                                (intraBurstCycleTime * weaponStats.m_iBurstShotCount));
                    } else if (heroName === "forge" && (weaponStats as any).m_flMaxSpinCycleTime) {
                        newStats['ERoundsPerSecond'] = 1 / ((weaponStats as any).m_flMaxSpinCycleTime / (1 + value / 100));
                    } else {
                        newStats['ERoundsPerSecond'] = 1 / (weaponStats.m_flCycleTime / (1 + value / 100));
                    }
                }
                break;
            }
            case "EClipSizeIncrease": {
                newStats[key] += value;
                newStats["EClipSize"] *= (1 + value / 100);
                break;
            }
            case "EBulletSpeedIncrease": {
                newStats[key] += value;
                newStats["EBulletSpeed"] *= (1 + value / 100);
                break;
            }
            case "EMaxHealth": {
                if (modifierValues["EBaseHealth_percent"] !== undefined) {
                    newStats[key] *= (1 + modifierValues.EBaseHealth_percent / 100);
                    newStats[key] += value;
                } else {
                    newStats[key] += value;
                }
                break;
            }
            case "EMaxHealth_percent": {
                newStats["EMaxHealth"] *= (1 + value / 100);
                break;
            }
            case "EBulletArmorDamageReduction":
            case "ETechArmorDamageReduction": {
                newStats[key] = newStats[key] !== 0 ?
                    (1 - ((1 - newStats[key] / 100) * value)) * 100 :
                    (1 - value) * 100;
                break;
            }
            case "EStaminaRegenIncrease": {
                newStats['EStaminaCooldown'] = 1 / (characterStatInput['EStaminaRegenPerSecond'] * (1 + value / 100));
                newStats[key] += value;
                break;
            }
            case "ELightMeleeDamage": {
                newStats[key] *= 1 + value / 100;
                newStats["EHeavyMeleeDamage"] *= 1 + value / 100;
                break;
            }
            case "EHealingOutput": {
                newStats[key] += Math.max(0, value);
                break;
            }
            case "ETechCooldown": {
                newStats[key] = Math.round((1 - value) * 100);
                break;
            }
            case "EBulletArmorReduction": {
                newStats["EBulletArmorDamageReduction"] += value;
                break;
            }
            case "ETechPower": {
                newStats[key] = value !== undefined ? value : newStats[key] + value;
                break;
            }
            default: {
                if (key !== "EBulletDamage") {
                    newStats[key] += value;
                }
            }
        }
    }

    // Round values
    newStats["ELightMeleeDamage"] = Math.ceil(newStats["ELightMeleeDamage"]);
    newStats["EHeavyMeleeDamage"] = Math.ceil(newStats["EHeavyMeleeDamage"]);
    newStats["EClipSize"] = Math.ceil(newStats["EClipSize"]);

    // Handle character specific scaling stats
    if (Object.keys(character.data.m_mapScalingStats).length > 0 &&
        newStats["ETechPower"] !== undefined &&
        newStats["ETechPower"] !== 0) {
        Object.entries(character.data.m_mapScalingStats).forEach(([key, value]) => {
            if (key !== "ERoundsPerSecond" && 'eScalingStat' in value && 'flScale' in value) {
                newStats[key] += newStats[value.eScalingStat] * (value.flScale as number);
            }
        });
    }

    // Calculate skill stats with scaling
    const skillCalcProps = JSON.parse(JSON.stringify(skillProps)) as skillProperties[];

    // Process skill upgrades and apply scaling
    skillProps.forEach((element, index) => {
        const scaleData: skillScaleData = skillScaling[index];

        // Apply skill upgrades
        skillUpgrades[index].forEach((upgrade) => {
            if (upgrade.m_vecPropertyUpgrades) {
                upgrade.m_vecPropertyUpgrades.forEach((bonus) => {
                    if (bonus.m_eUpgradeType === "EAddToScale" && scaleData[bonus.m_strPropertyName]) {
                        if (typeof scaleData[bonus.m_strPropertyName].m_flStatScale === 'number') {
                            if (typeof scaleData[bonus.m_strPropertyName].m_flStatScale === 'number') {
                                (scaleData[bonus.m_strPropertyName].m_flStatScale as number) += parseFloat(bonus.m_strBonus);
                            }
                        }
                    } else {
                        skillCalcProps[index][bonus.m_strPropertyName] =
                            (skillCalcProps[index][bonus.m_strPropertyName] || 0) + parseFloat(bonus.m_strBonus);
                    }
                });
            }
        });

        // Apply scaling to skill properties
        for (const spkey in element) {
            if (scaleData[spkey]) {
                const scale = scaleData[spkey];

                if (typeof scale === 'object' && '_class' in scale) {
                    switch (scale._class) {
                        case "scale_function_single_stat": {
                            const statType = scale.m_eSpecificStatScaleType;
                            if (typeof statType === 'string' && statType in newStats) {
                                if (["ETechRange", "ETechDuration"].includes(statType)) {
                                    skillCalcProps[index][spkey] *= (1 + newStats[statType] / 100);
                                } else if (statType !== "EChannelDuration") {
                                    skillCalcProps[index][spkey] *= (1 - newStats[statType] / 100);
                                }
                            }
                            break;
                        }
                        case "scale_function_multi_stats": {
                            if ('m_vecScalingStats' in scale && Array.isArray(scale.m_vecScalingStats)) {
                                scale.m_vecScalingStats.forEach(statType => {
                                    if (typeof statType === 'string' && statType in newStats) {
                                        if (statType === "ETechPower") {
                                            const statScale = typeof scale.m_flStatScale === 'number' ? scale.m_flStatScale : 0;
                                            skillCalcProps[index][spkey] += statScale * newStats[statType];
                                        } else if (["ETechRange", "ETechDuration"].includes(statType) && statType !== "EChannelTime") {
                                            skillCalcProps[index][spkey] *= (1 + newStats[statType] / 100);
                                        } else if (statType !== "EChannelTime") {
                                            skillCalcProps[index][spkey] *= (1 - newStats[statType] / 100);
                                        }
                                    }
                                });
                            }
                            break;
                        }
                        case "scale_function_tech_damage": {
                            if ('m_flStatScale' in scale && typeof scale.m_flStatScale === 'number') {
                                skillCalcProps[index][spkey] += scale.m_flStatScale * newStats["ETechPower"];
                            }
                            break;
                        }
                        case "scale_function_kinetic_carbine_damage": {
                            const statType = scale.m_eSpecificStatScaleType;
                            if (typeof statType === 'string' && statType in newStats) {
                                skillCalcProps[index][spkey] *= newStats[statType];
                            }
                            break;
                        }
                    }
                }
            }
        }
    });

    // Final RoundsPerSecond calculation based on hero type
    if (weaponStats) {
        const heroName = character.name.replace('hero_', '');
        const fireRateBonus = 1 + (newStats["EFireRate"] || 0) / 100;

        if (["lash", "chrono", "gigawatt"].includes(heroName)) {
            const intraBurstCycleTime = (weaponStats as any).m_flIntraBurstCycleTime || 0;
            newStats['ERoundsPerSecond'] = weaponStats.m_iBurstShotCount /
                ((weaponStats.m_flCycleTime / fireRateBonus) +
                    (intraBurstCycleTime * weaponStats.m_iBurstShotCount));
        } else if (heroName === "forge" && (weaponStats as any).m_flMaxSpinCycleTime) {
            newStats['ERoundsPerSecond'] = 1 / ((weaponStats as any).m_flMaxSpinCycleTime / fireRateBonus);
        } else {
            newStats['ERoundsPerSecond'] = 1 / (weaponStats.m_flCycleTime / fireRateBonus);
        }
    }

    return { characterStats: newStats, skillStats: skillCalcProps };
}

export function calculateAllStats(
    character: heroesWithName,
    weaponItems: (upgradesWithName | null)[],
    vitalityItems: (upgradesWithName | null)[],
    spiritItems: (upgradesWithName | null)[],
    utilityItems: (upgradesWithName | null)[],
    leveledStats: allStats,
    heroSkills: SkillsData[],
    skillProps: skillProperties[],
    skillUpgrades: skillUpgrades[][],
    skillScaling: skillScaleData[],
    abilities: AWithKey[]
) {
    try {
        const allEquippedItems = [...weaponItems, ...vitalityItems, ...spiritItems, ...utilityItems].filter(
            (item): item is upgradesWithName => item !== null
        );

        return calculateClientStats(
            character,
            allEquippedItems,
            leveledStats,
            heroSkills,
            skillProps,
            skillUpgrades,
            skillScaling,
            abilities
        );
    } catch (error) {
        console.error('Error calculating stats:', error);
        throw error;
    }
}