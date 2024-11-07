import React from 'react';
import Image from "next/image";

interface Character {
    name: string;
    image: string;
}

interface CharacterGridProps {
    characters: Character[];
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
    if (!characters || characters.length === 0) {
        return <p>No characters found.</p>;
    }

    return (
        <div className="grid bg-gray-800 p-4 rounded grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {characters.map((character) => (
                <div key={character.name} className="flex flex-col items-center">
                    <Image
                        src={character.image}
                        alt={character.name}
                        width={50}
                        height={50}
                        className="object-scale-down rounded-full"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    <p className="mt-1 text-center text-xs">{character.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CharacterGrid;