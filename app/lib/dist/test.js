import fs from 'fs/promises';
import path from 'path';
const charactersPath = path.join(process.cwd(), 'app', 'data', 'CharactersV2', 'CharactersV3.json');
const data = await fs.readFile(charactersPath, 'utf8');
const characters = JSON.parse(data, (key, value) => {
    return value.m_bDisabled === false && value.m_bInDevelopment === false ? value : undefined;
});
//console.log(Object.keys(characters));
