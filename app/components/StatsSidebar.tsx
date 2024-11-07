import React, { useState, useEffect, useRef } from 'react';
import { allStats } from '../lib/dataUtils';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { skillDisplayGroups, skillProperties, skillUpgrades } from '../lib/abilityInterface';

interface StatsSidebarProps {
    characterStats: allStats;
    characterName: string;
    characterClass: string;
    characterSkillsData: skillProperties[];
    skillLabels: skillDisplayGroups[][];
    skillImages: Array<string>;
    skillUpgrades: skillUpgrades[][];
}

const StatsSidebar: React.FC<StatsSidebarProps> = ({ characterStats, characterName, characterClass, characterSkillsData, skillLabels, skillImages }) => {
    console.log(skillLabels)
    const [activeTab, setActiveTab] = useState<'all' | 'custom'>('all');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [changedStats, setChangedStats] = useState<string[]>([]);
    const [changedSkills, setChangedSkills] = useState<string[]>([]);
    const previousStatsRef = useRef<allStats | null>(null);
    const previousSkillsRef = useRef<skillProperties[] | null>(null);
    const baseStatsRef = useRef<allStats | null>(null);
    const baseSkillsRef = useRef<skillProperties[] | null>(null);

    useEffect(() => {
        if (!baseStatsRef.current) {
            baseStatsRef.current = { ...characterStats };
        }
        if (!baseSkillsRef.current) {
            baseSkillsRef.current = characterSkillsData.map(skill => ({ ...skill }));
        }

        if (previousStatsRef.current) {
            const newChangedStats = Object.keys(characterStats).filter(
                key => characterStats[key as keyof allStats] !== previousStatsRef.current![key as keyof allStats]
            );
            setChangedStats(newChangedStats);
        }

        if (previousSkillsRef.current) {
            const newChangedSkills = characterSkillsData.flatMap((skill, index) =>
                Object.keys(skill).filter(key =>
                    skill[key as keyof skillProperties] !== previousSkillsRef.current![index][key as keyof skillProperties]
                ).map(key => `${index}-${key}`)
            );
            setChangedSkills(newChangedSkills);
        }

        return () => {
            previousStatsRef.current = characterStats;
            previousSkillsRef.current = characterSkillsData.map(skill => ({ ...skill }));
        };
    }, [characterStats, characterSkillsData]);
    const formatStat = (value: number): string => {
        if (value === undefined || value === null) return 'N/A';
        return Number.isInteger(value) ? value.toString() : Number(value).toFixed(3);
    };

    const calculatePercentChange = (current: number, previous: number): string => {
        if (previous === 0) return current > 0 ? '+∞%' : '0%';
        const percentChange = ((current - previous) / Math.abs(previous)) * 100;
        return `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
    };

    const statGroups = [
        {
            title: "Weapon",
            color: "text-red-400",
            bgColor: "bg-red-500",
            stats: [
                { name: "Bullet Damage", key: "EBulletDamage" },
                { name: "Weapon Damage", key: "EBaseWeaponDamageIncrease" },
                { name: "Bullets per sec", key: "ERoundsPerSecond" },
                { name: "Fire Rate", key: "EFireRate" },
                { name: "Ammo", key: "EClipSize" },
                { name: "Clip Size Increase", key: "EClipSizeIncrease" },
                { name: "Reload Time", key: "EReloadTime" },
                { name: "Reload Reduction", key: "EReloadSpeed" },
                { name: "Bullet Velocity", key: "EBulletSpeed" },
                { name: "Bullet Velocity Increase", key: "EBulletSpeedIncrease" },
                { name: "Bullet Lifesteal", key: "EBulletLifesteal" },
            ]
        },
        {
            title: "Combat",
            color: "text-orange-400",
            bgColor: "bg-orange-500",
            stats: [
                { name: "Light Melee Damage", key: "ELightMeleeDamage" },
                { name: "Heavy Melee Damage", key: "EHeavyMeleeDamage" },
            ]
        },
        {
            title: "Vitality",
            color: "text-green-400",
            bgColor: "bg-green-500",
            stats: [
                { name: "Max Health", key: "EMaxHealth" },
                { name: "Health Regen", key: "EBaseHealthRegen" },
                { name: "Bullet Resist", key: "EBulletArmorDamageReduction" },
                { name: "Spirit Resist", key: "ETechArmorDamageReduction" },
                { name: "Bullet Shield", key: "EBulletShieldHealth" },
                { name: "Spirit Shield", key: "ETechShieldHealth" },
                { name: "Heal Amp", key: "EHealingOutput" },
                { name: "Debuff Resist", key: "EDebuffResist" },
                { name: "Crit Reduction", key: "ECritDamageReceivedScale" },
            ]
        },
        {
            title: "Movement",
            color: "text-blue-400",
            bgColor: "bg-blue-500",
            stats: [
                { name: "Move Speed", key: "EMaxMoveSpeed" },
                { name: "Sprint Speed", key: "ESprintSpeed" },
                { name: "Stamina Cooldown", key: "EStaminaCooldown" },
                { name: "Stamina Recovery", key: "EStaminaRegenIncrease" },
                { name: "Stamina", key: "EStamina" },
            ]
        },
        {
            title: "Tech",
            color: "text-purple-400",
            bgColor: "bg-purple-500",
            stats: [
                { name: "Spirit Power", key: "ETechPower" },
                { name: "Ability Cooldown", key: "ETechCooldown" },
                { name: "Ability Duration", key: "ETechDuration" },
                { name: "Ability Range", key: "ETechRange" },
                { name: "Spirit Lifesteal", key: "ETechLifesteal" },
                { name: "Max Charges Increase", key: "EMaxChargesIncrease" },
                { name: "Charge Cooldown", key: "ETechCooldownBetweenChargeUses" },
            ]
        },
        {
            title: "Skill 1",
            color: "text-rose-400",
            bgColor: "bg-rose-500",
            realskillName: skillLabels[0][0].skillName,
            stats: skillLabels[0],
        },
        {
            title: "Skill 2",
            color: "text-rose-400",
            bgColor: "bg-rose-500",
            realskillName: skillLabels[1][0].skillName,
            stats: skillLabels[1],
        },
        {
            title: "Skill 3",
            color: "text-rose-400",
            bgColor: "bg-rose-500",
            realskillName: skillLabels[2][0].skillName,
            stats: skillLabels[2],
        },
        {
            title: "Skill 4",
            color: "text-rose-400",
            bgColor: "bg-rose-500",
            realskillName: skillLabels[3][0].skillName,
            stats: skillLabels[3],
        }
    ];

    const percentageStats = [
        "Weapon Damage", "Fire Rate", "Clip Size Increase", "Reload Reduction",
        "Bullet Velocity Increase", "Bullet Lifesteal", "Bullet Resist", "Spirit Resist",
        "Heal Amp", "Debuff Resist", "Crit Reduction", "Stamina Recovery",
        "Ability Cooldown", "Ability Duration", "Ability Range", "Spirit Lifesteal",
        "Charge Cooldown"
    ];

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const renderStatValue = (statKey: string, statName: string) => {
        const currentValue = characterStats[statKey as keyof allStats];
        const previousValue = previousStatsRef.current?.[statKey as keyof allStats];
        const baseValue = baseStatsRef.current?.[statKey as keyof allStats];
        const isPercentageStat = percentageStats.includes(statName);
        const isChanged = changedStats.includes(statKey);
        const isEnhanced = baseValue !== undefined && currentValue !== baseValue;

        if (currentValue === undefined) return 'N/A';

        return (
            <div className="flex items-center justify-end text-sm font-medium">
                <span className={isEnhanced ? 'text-yellow-500' : 'text-white'}>
                    {formatStat(currentValue)}{isPercentageStat ? "%" : ""}
                </span>
            </div>
        );
    };

    const renderSkillStats = (statKey: string, statName: string, skillNum: string) => {
        const sNum = parseFloat(skillNum) - 1;
        const currentValue = characterSkillsData[sNum][statKey as keyof skillProperties];
        const isPercentageStat = percentageStats.includes(statName);
        const isChanged = changedSkills.includes(`${sNum}-${statKey}`);
        const baseValue = baseSkillsRef.current?.[sNum][statKey as keyof skillProperties];
        const isEnhanced = baseValue !== undefined && currentValue !== baseValue;

        if (currentValue === undefined) return 'N/A';

        return (
            <div className="flex items-center justify-end text-sm font-medium">
                <span className={`${isEnhanced ? 'text-yellow-500' : 'text-white'} ${isChanged ? 'font-bold' : ''}`}>
                    {formatStat(currentValue)}{isPercentageStat ? "%" : ""}
                </span>
                {isChanged && <ArrowRightIcon className="h-3 w-3 text-green-500 ml-1" />}
            </div>
        );
    };

    return (
        <div className="h-full bg-gray-900/80 backdrop-blur-md overflow-y-auto">
            {/* Compact header */}
            <div className="sticky top-0 p-2 bg-gray-800/70 backdrop-blur-md z-10 border-b border-gray-700/30 shadow-lg">
                <div className="flex gap-1 mb-2">
                    <button
                        className={`px-2 py-1 text-xs font-medium rounded-l-lg transition-colors ${activeTab === 'all'
                            ? 'bg-blue-500/80 text-white'
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                            }`}
                        onClick={() => setActiveTab('all')}
                    >
                        All Stats
                    </button>
                    <button
                        className={`px-2 py-1 text-xs font-medium rounded-r-lg transition-colors ${activeTab === 'custom'
                            ? 'bg-blue-500/80 text-white'
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                            }`}
                        onClick={() => setActiveTab('custom')}
                    >
                        Custom
                    </button>
                </div>

                {activeTab === 'custom' && (
                    <div className="flex flex-wrap gap-1">
                        {statGroups.map((group, index) => (
                            <button
                                key={index}
                                onClick={() => toggleCategory(group.title)}
                                className={`px-2 py-0.5 text-xs font-medium rounded transition-colors ${selectedCategories.includes(group.title)
                                    ? `${group.bgColor}/80 text-white`
                                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                                    }`}
                            >
                                {group.title.includes("Skill") ? group.realskillName : group.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Main content */}
            <div className="p-2">
                {/* Regular stats section */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 lg:grid-cols-2">
                    {statGroups.filter(group => !group.title.includes("Skill")).map((group, groupIndex) => {
                        if (activeTab === 'custom' && !selectedCategories.includes(group.title)) {
                            return null;
                        }

                        return (
                            <div key={groupIndex} className="p-2 backdrop-blur-sm bg-gray-800/30 rounded-lg border border-gray-700/30">
                                <h4 className={`text-xs font-semibold ${group.color} uppercase tracking-wider mb-1`}>
                                    {group.title} Stats
                                </h4>
                                <div className="space-y-0.5">
                                    {group.stats.map((stat) => (
                                        <div key={stat.key} className="flex justify-between items-center text-xs py-0.5 px-1.5 rounded hover:bg-gray-700/20">
                                            <span className="text-gray-300 capitalize">{stat.name}:</span>
                                            {renderStatValue(stat.key, stat.name)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Compact separator */}
                <div className="w-full h-px my-2 bg-gray-700/30"></div>

                {/* Skills section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {statGroups.filter(group => group.title.includes("Skill")).map((group, groupIndex) => {
                        if (activeTab === 'custom' && !selectedCategories.includes(group.title)) {
                            return null;
                        }

                        return (
                            <div key={groupIndex} className="p-2 backdrop-blur-sm bg-gray-800/30 rounded-lg border border-gray-700/30">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="relative flex-shrink-0">
                                        <div className="absolute -bottom-1 right-0 bg-gray-900/90 text-xs font-semibold text-white px-1 rounded shadow-sm">
                                            {group.title.replace("Skill ", '')}
                                        </div>
                                        <img
                                            src={skillImages[parseFloat(group.title.replace("Skill", "")) - 1]}
                                            className="w-8 h-8 rounded-full object-cover ring-1 ring-purple-500/30"
                                            alt={`Skill ${group.title.replace("Skill", "")}`}
                                        />
                                    </div>
                                    <h5 className="text-xs font-semibold text-white truncate">
                                        {group.realskillName}
                                    </h5>
                                </div>
                                <div className="space-y-0.5">
                                    {group.stats.map((stat) => (
                                        <div key={stat.key} className="flex justify-between items-center text-xs py-0.5 px-1.5 rounded hover:bg-gray-700/20">
                                            <span className="text-gray-300 capitalize">{stat.name}:</span>
                                            {renderSkillStats(stat.key, stat.name, group.title.replace("Skill ", ""))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StatsSidebar;    