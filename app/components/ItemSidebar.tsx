import React from 'react';
import Image from "next/image";
import { Item, isTechItem, isArmorItem, isWeaponItem, isAbilityItem, isUpgradeItem } from '../lib/gameInterfaces';

interface ItemSidebarProps {
    items: Item[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    onItemSelect: (item: Item) => void;
}

const getCategoryColor = (item: Item): string => {
    if (isWeaponItem(item)) return 'bg-[#FCAC4D]';
    if (isArmorItem(item)) return 'bg-[#86c921]';
    if (isTechItem(item)) return 'bg-[#de9cff]';
    if (isAbilityItem(item)) return 'bg-[#4d9bfc]';
    if (isUpgradeItem(item)) return 'bg-[#fc4d4d]';
    return 'bg-gray-400';
};

const ItemCard: React.FC<{ item: Item; onSelect: () => void }> = ({ item, onSelect }) => {
    const categoryColor = getCategoryColor(item);

    return (
        <div className="w-24 m-1 cursor-pointer" onClick={onSelect}>
            <table className="w-full">
                <tbody>
                    <tr>
                        <th className="bg-gray-800 text-xs">
                            <span className="text-[#98ffde] text-shadow">
                                <Image
                                    src="/images/Souls_iconColored.png"
                                    alt="Souls"
                                    width={13}
                                    height={23}
                                    className="inline mr-1"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                                <b>{item.cost ?? 'N/A'}</b>
                            </span>
                        </th>
                    </tr>
                    <tr className={`${categoryColor} h-16`}>
                        <td className="text-center">
                            {item.image && (
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                    className="inline-block filter brightness-0 saturate-100 hover:scale-110 transition-transform duration-100 ease-in-out"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            )}
                        </td>
                    </tr>
                    <tr className="bg-[#FFF0D7] h-12">
                        <th className="text-[#151912] text-xs">
                            <span className="hover:underline">{item.name}</span>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const ItemSidebar: React.FC<ItemSidebarProps> = ({ items, searchTerm, setSearchTerm, onItemSelect }) => {
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {} as Record<string, Item[]>);

    return (
        <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto h-screen">
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            />
            {Object.entries(groupedItems).map(([type, typeItems]) => (
                <div key={type} className="mb-4">
                    <h3 className="text-xl font-bold mb-2 capitalize">{type}</h3>
                    <div className="flex flex-wrap">
                        {typeItems.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                onSelect={() => onItemSelect(item)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemSidebar;