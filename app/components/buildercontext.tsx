import React, { createContext, useState, useContext, ReactNode } from 'react';
import { upgradesWithName } from '../lib/itemInterfaces';

interface BuilderBoxProps {
    id: string;
    title: string;
    description: string;
    items: upgradesWithName[];
}

interface BuilderContextType {
    builderItems: upgradesWithName[];
    setBuilderItems: React.Dispatch<React.SetStateAction<upgradesWithName[]>>;
    builderBoxes: BuilderBoxProps[];
    setBuilderBoxes: React.Dispatch<React.SetStateAction<BuilderBoxProps[]>>;
    addItemToBuilder: (item: upgradesWithName) => void;
    removeItemFromBuilder: (item: upgradesWithName) => void;
    addNewBox: (title: string, description: string) => void;
    removeBox: (boxId: string) => void;
    moveItemBetweenBoxes: (itemId: string, sourceBoxId: string, destinationBoxId: string) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [builderItems, setBuilderItems] = useState<upgradesWithName[]>([]);
    const [builderBoxes, setBuilderBoxes] = useState<BuilderBoxProps[]>([]);

    const addItemToBuilder = (item: upgradesWithName) => {
        if (!builderItems.some(i => i.name === item.name)) {
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

    const addNewBox = (title: string, description: string) => {
        setBuilderBoxes(prevBoxes => [
            ...prevBoxes,
            {
                id: `box-${prevBoxes.length + 1}`,
                title,
                description,
                items: [],
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
        <BuilderContext.Provider value={{
            builderItems,
            setBuilderItems,
            builderBoxes,
            setBuilderBoxes,
            addItemToBuilder,
            removeItemFromBuilder,
            addNewBox,
            removeBox,
            moveItemBetweenBoxes
        }}>
            {children}
        </BuilderContext.Provider>
    );
};

export const useBuilder = () => {
    const context = useContext(BuilderContext);
    if (context === undefined) {
        throw new Error('useBuilder must be used within a BuilderProvider');
    }
    return context;
};