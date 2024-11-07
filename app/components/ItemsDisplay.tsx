'use client';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { upgradesWithName } from '../lib/itemInterfaces';
import Image from "next/image";
import BuilderTab from './builderTab';
import { skip } from 'node:test';
import ItemTooltip from './ItemTooltip';

interface ItemsDisplayProps {
    equipediItemsByCategory?: (upgradesWithName | null)[][];
    items: upgradesWithName[];
    onItemSelect: (item: upgradesWithName) => void;
    equippedItems: upgradesWithName[];
}

interface BuilderBoxProps {
    id: string;
    title: string;
    description: string;
    items: upgradesWithName[];
}

const getCategoryColor = (category: string): string => {
    switch (category) {
        case 'Weapon':
            return 'bg-[#d17a23]';
        case 'Vitality':
            return 'bg-[#5ca404]';
        case 'Spirit':
            return 'bg-[#c374fa]';
        case 'Utility':
            return '';
        case 'Builder':
            return 'bg-[#4d9bfc]';
        default:
            return 'bg-gray-400';
    }
};

const getCategoryActiveColor = (category: string): string => {
    switch (category) {
        case 'Weapon':
            return 'bg-[#fcba6a]';
        case 'Vitality':
            return 'bg-[#b1f571]';
        case 'Spirit':
            return 'bg-[#dbb2f7]';
        case 'Builder':
            return 'bg-[#4d9bfc]';
        default:
            return 'bg-gray-400';
    }
};

const getCategoryBackground = (category: string): string[] => {
    switch (category) {
        case 'Weapon':
            return ['bg-custom-wbg1', 'bg-custom-wbg2'];
        case 'Vitality':
            return ['bg-custom-vbg1', 'bg-custom-vbg2'];
        case 'Spirit':
            return ['bg-custom-sbg1', 'bg-custom-sbg2'];
        case 'Utility':
        case 'Builder':
            return ['bg-gray-800', 'bg-gray-700'];
        default:
            return ['bg-gray-400'];
    }
}

export function getCategory(itemCat: string): string {
    if (itemCat.includes('_WeaponMod')) return 'Weapon';
    if (itemCat.includes('_Armor')) return 'Vitality';
    if (itemCat.includes('_Tech')) return 'Spirit';
    if (itemCat.includes('mods_utility')) return 'Utility';
    return 'Other';
};

const findTier = (tier: string): number => {
    switch (tier) {
        case "EModTier_1": return 1;
        case "EModTier_2": return 2;
        case "EModTier_3": return 3;
        case "EModTier_4": return 4;
        default: return 1;
    }
}

const tierCost = ["500", "1,250", "3,000", "6,200"];

export const ItemsDisplay: React.FC<ItemsDisplayProps> = ({
    items,
    onItemSelect,
    equippedItems,
    equipediItemsByCategory
}) => {
    const buildname = useRef<HTMLInputElement>(null);
    const buildAuthor = useRef<HTMLInputElement>(null);
    const [activeCategory, setActiveCategory] = useState('Weapon');
    const categories = ['Weapon', 'Vitality', 'Spirit', 'Builder'];
    const [isDraggingToBuilder, setIsDraggingToBuilder] = useState(false);
    const [builderItems, setBuilderItems] = useState<upgradesWithName[]>([]);
    const [builderBoxes, setBuilderBoxes] = useState<BuilderBoxProps[]>([]);
    const [hoveredItem, setHoveredItem] = useState<upgradesWithName | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }, []);

    const calculateTierBonus = useCallback((item: upgradesWithName) => {
        const category = getCategory(item.desc.m_eItemSlotType as string || '');
        const tier = findTier(item.desc.m_iItemTier as string);
        let bonus = 0;

        switch (category) {
            case 'Weapon':
                bonus = tier === 1 ? 6 : (tier === 2 ? 10 : (tier === 3 ? 14 : 18));
                return { EBaseWeaponDamageIncrease: bonus };
            case 'Vitality':
                bonus = tier === 1 ? 11 : (tier === 2 ? 14 : (tier === 3 ? 17 : 20));
                return { EBaseHealth_percent: bonus };
            case 'Spirit':
                bonus = tier === 1 ? 4 : (tier === 2 ? 8 : (tier === 3 ? 12 : 16));
                return { ETechPower: bonus };
            default:
                return {};
        }
    }, []);

    const ItemCard = useCallback(({ name, desc, onSelect, isEquipped, isInBuilder }: upgradesWithName & { onSelect: () => void; isEquipped: boolean; isInBuilder: boolean }) => {
        const category = getCategory(desc.m_eItemSlotType as string || '');
        const categoryColor = getCategoryColor(category);
        const actColor = getCategoryActiveColor(category);

        return (
            <div
                className={`w-20 h-24 select-none  m-2 cursor-pointer overflow-hidden ${isEquipped ? 'opacity-50' : ''} ${isInBuilder ? 'border-2 border-double rounded-md border-blue-600' : ''}`}
                onClick={onSelect}
                draggable
                onDragStart={(e) => {
                    e.dataTransfer.setData('text/plain', JSON.stringify({ name, desc }));
                }}
                onMouseEnter={() => setHoveredItem({ name, desc } as upgradesWithName)}
                onMouseLeave={() => setHoveredItem(null)}
                onMouseMove={handleMouseMove}
            >
                <div className="w-full h-full flex flex-col relative justify-center">
                    <div className={`${desc.isActive === true ? actColor : categoryColor} flex-grow flex items-center justify-center rounded-t-md`}>
                        {desc.m_strAbilityImage && (
                            <Image
                                src={desc.m_strAbilityImage as string}
                                alt={name}
                                width={40}
                                height={40}
                                className="inline-block pointer-events-none filter brightness-0 saturate-100 hover:scale-110 transition-transform duration-100 ease-in-out"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        )}
                    </div>
                    <div className="flex h-12 bg-[#FFF0D7] items-center text-center p-1 rounded-b-md">
                        <p className="text-[#151912] text-xs font-Deadlock-shop leading-tight text-center w-full break-words hyphens-auto">{name}</p>
                    </div>
                    <div className={`absolute left-1/2 -translate-x-1/2 ${desc.isActive !== undefined && desc.isActive === true ? '' : 'hidden'} bg-black rounded-md`}>
                        <p className="text-[#FFF0D7] text-xs text-center mx-2">ACTIVE</p>
                    </div>
                </div>
            </div>
        );
    }, [handleMouseMove]);

    const categorizedItems = useMemo(() => {
        return items.reduce((acc, item) => {
            const category = getCategory(item.desc.m_eItemSlotType as string || '');
            if (!acc[category]) {
                acc[category] = { 1: [], 2: [], 3: [], 4: [] };
            }
            const tier = findTier(item.desc.m_iItemTier as string) || 1;
            acc[category][tier].push(item);
            return acc;
        }, {} as Record<string, Record<number, upgradesWithName[]>>);
    }, [items]);

    const isItemEquipped = useCallback((item: upgradesWithName) => {
        return equippedItems.some(equippedItem => equippedItem.name === item.name);
    }, [equippedItems]);

    const isItemInBuilder = useCallback((item: upgradesWithName) => {
        return builderItems.some(builderItem => builderItem.name === item.name) ||
            builderBoxes.some(box => box.items.some(boxItem => boxItem.name === item.name));
    }, [builderItems, builderBoxes]);



    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggingToBuilder(true);
    };

    const handleDragLeave = () => {
        setIsDraggingToBuilder(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggingToBuilder(false);
        const itemData = e.dataTransfer.getData('text/plain');
        if (itemData) {
            const item = JSON.parse(itemData) as upgradesWithName;
            addItemToBuilder(item);
        }
    };

    const addItemToBuilder = (item: upgradesWithName) => {
        if (!isItemInBuilder(item)) {
            setBuilderItems(prev => [...prev, item]);
        }
    };

    const removeItemFromBuilder = (item: upgradesWithName) => {
        setBuilderItems(prev => prev.filter(i => i.name !== item.name));
        setBuilderBoxes(prev => prev.map(box => ({
            ...box,
            items: box.items.filter(i => i.name !== item.name)
        })));
    };

    const addNewBox = (title: string, description: string, itemsinbox?: []) => {
        setBuilderBoxes(prevBoxes => [
            ...prevBoxes,
            {
                id: `box-${prevBoxes.length + 1}`,
                title,
                description,
                items: itemsinbox ? itemsinbox : [],
            },
        ]);
    };

    const removeBox = (boxId: string) => {
        setBuilderBoxes(prevBoxes => {
            const boxToRemove = prevBoxes.find(box => box.id === boxId);
            if (boxToRemove) {
                setBuilderItems(prev => [...prev, ...boxToRemove.items]);
            }
            return prevBoxes.filter(box => box.id !== boxId);
        });
    };

    const moveItemBetweenBoxes = (itemId: string, sourceBoxId: string, destinationBoxId: string) => {
        setBuilderBoxes(prevBoxes => {
            const newBoxes = [...prevBoxes];
            let movedItem: upgradesWithName | undefined;

            if (sourceBoxId === 'unassigned') {
                movedItem = builderItems.find(item => item.name === itemId);
                setBuilderItems(prev => prev.filter(item => item.name !== itemId));
            } else {
                const sourceBox = newBoxes.find(box => box.id === sourceBoxId);
                if (sourceBox) {
                    const itemIndex = sourceBox.items.findIndex(item => item.name === itemId);
                    if (itemIndex !== -1) {
                        movedItem = sourceBox.items[itemIndex];
                        sourceBox.items.splice(itemIndex, 1);
                    }
                }
            }

            if (movedItem) {
                if (destinationBoxId === 'unassigned') {
                    if (!builderItems.some(item => item.name === movedItem!.name)) {
                        setBuilderItems(prev => [...prev, movedItem!]);
                    }
                } else {
                    const destBox = newBoxes.find(box => box.id === destinationBoxId);
                    if (destBox && !destBox.items.some(item => item.name === movedItem!.name)) {
                        destBox.items.push(movedItem);
                    }
                }
            }

            return newBoxes;
        });
    };

    return (
        <div className="relative" onMouseMove={handleMouseMove}>
            <div className="flex">
                {categories.map(category => (
                    category === 'Save' ? <div key={'null'}></div> :
                        (<button
                            key={category}
                            className={`px-2 md:px-5 py-2 text-sm font-medium rounded-t-lg ${activeCategory === category
                                ? `${getCategoryColor(category)} text-white`
                                : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>)
                ))}

            </div>
            <div className="flex flex-col w-full">
                {activeCategory === 'Save' ? (<div className='p-4 bg-gray-900 rounded-lg'>
                    <input
                        key={'buildname'}
                        type="text"
                        ref={buildname}
                        placeholder='Enter Build Name'
                        className='w-full p-2 mb-2 bg-gray-700 text-white rounded'
                    >
                    </input>
                    <input
                        key={'author'}
                        type='text'
                        ref={buildAuthor}
                        placeholder='Enter Author Name'
                        className='w-full p-2 mb-2 bg-gray-700 text-white rounded'
                    >
                    </input>
                    <button
                        className="hover:bg-blue-400 active:bg-[#b1f571] bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => {

                        }}
                    >
                        Submit
                    </button>


                </div>
                ) : activeCategory === 'Builder' ? (
                    <BuilderTab
                        allItems={items}
                        items={builderItems}
                        boxes={builderBoxes}
                        onAddItem={addItemToBuilder}
                        onRemoveItem={removeItemFromBuilder}
                        onAddBox={addNewBox}
                        onRemoveBox={removeBox}
                        onMoveItem={moveItemBetweenBoxes}
                        setBuilderItems={setBuilderItems}
                        setBuilderBoxes={setBuilderBoxes}
                    />
                ) : (
                    <div className="flex">
                        <div className="flex-grow">
                            {[1, 2, 3, 4].map(tier => (
                                <div key={tier}
                                    className={`${tier % 2 === 0 ? getCategoryBackground(activeCategory)[1] : getCategoryBackground(activeCategory)[0]} ${tier === 1 ? 'rounded-tr-lg' : ''} ${tier === 4 ? 'rounded-b-lg' : ''} p-1`}>
                                    <span className="text-[#70F8C1] text-shadow">
                                        <Image
                                            src="/images/icon_soul.svg"
                                            alt="Souls"
                                            width={13}
                                            height={23}
                                            className="inline mr-1"
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto"
                                            }} />
                                        <b>{tierCost[tier - 1]}</b>
                                    </span>
                                    <div className="flex flex-wrap">
                                        {(categorizedItems[activeCategory]?.[tier] || []).map(item => (
                                            <ItemCard
                                                key={item.name}
                                                {...item}
                                                onSelect={() => onItemSelect(item)}
                                                isEquipped={isItemEquipped(item)}// || isItemInBuilder(item)
                                                isInBuilder={isItemInBuilder(item)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className={`w-16 border-2 border-dashed rounded-lg flex items-center justify-center transition-all duration-300 ${isDraggingToBuilder ? 'border-green-500 bg-green-100 text-green-700' : 'border-blue-300 bg-blue-50 text-blue-500'
                                } ${isDraggingToBuilder ? 'opacity-80' : 'opacity-50'}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <p className="text-center text-xs font-medium rotate-90 whitespace-nowrap">
                                {isDraggingToBuilder ? 'Drop to add' : 'Drag items here'}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            {hoveredItem && (
                <div
                    className="fixed z-50 pointer-events-none"
                    style={{
                        left: `${mousePosition.x + 10}px`,
                        top: `${mousePosition.y + 10}px`
                    }}
                >
                    <ItemTooltip item={hoveredItem} tierBonus={calculateTierBonus(hoveredItem)} />
                </div>
            )}
        </div>
    );
};

export default React.memo(ItemsDisplay);