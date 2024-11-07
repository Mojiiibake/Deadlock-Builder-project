//page.tsx
import { getCharacter, getItems, getAbilitiesbyHero, getHeroStartingStats, getCharacterNameMap } from '../../lib/dataUtils';
import CharacterBuilder from '../../components/CharacterBuilder';

export default async function BuilderPage({ params }: { params: { characterName: string } }) {
    const character = await getCharacter(params.characterName);
    const items = await getItems();
    const abilities = await getAbilitiesbyHero();
    const initialStats = await getHeroStartingStats(params.characterName);
    const characterNameMap = await getCharacterNameMap();

    if (!character) {
        return <div>Character not found</div>;
    }

    return <CharacterBuilder
        characterNameFromMap={characterNameMap["hero_" + params.characterName]}
        character={character}
        items={items}
        initialStats={initialStats}
        abilities={abilities}
    />;
}