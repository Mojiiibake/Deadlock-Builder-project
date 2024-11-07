'use client';

import React, { useState } from 'react';
import ItemsDisplay from './ItemsDisplay';
import { upgradesWithName } from '../lib/itemInterfaces';

interface ClientItemsWrapperProps {
    initialItems: upgradesWithName[];
}

const ClientItemsWrapper: React.FC<ClientItemsWrapperProps> = ({ initialItems }) => {
    const [equippedItems, setEquippedItems] = useState<upgradesWithName[]>([]);

    const handleItemSelect = (item: upgradesWithName) => {
        console.log('Item selected:', item.name);
        setEquippedItems(prev => {
            const isEquipped = prev.some(equippedItem => equippedItem.name === item.name);
            if (isEquipped) {
                return prev.filter(equippedItem => equippedItem.name !== item.name);
            } else {
                return [...prev, item];
            }
        });
    };

    return (
        <ItemsDisplay
            items={initialItems}
            onItemSelect={handleItemSelect}
            equippedItems={equippedItems}
        />
    );
};

export default ClientItemsWrapper;