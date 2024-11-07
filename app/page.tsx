import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCharacters, getCharacterNameMap } from '@/app/lib/dataUtils';
import { heroesWithName } from './lib/herointerfaces';
import Navbar from './ui/Navbar';
import KofiWidget from './components/kofi';
import AdDisplay from './components/AdDisplay';

function getHeroName(heroKey: string): string {
  return heroKey.replace(/^hero_/, '').replace(/^\w/, c => c.toUpperCase());
}

function hasSelectionImage(hero: any): hero is { m_strIconHeroCard: string } {
  return 'm_strIconHeroCard' in hero && typeof hero.m_strIconHeroCard === 'string';
}

export default async function Home() {
  const characters: heroesWithName[] = await getCharacters();
  const charnamemap = await getCharacterNameMap();
  characters.sort((a, b) =>
    getHeroName(a.name).localeCompare(getHeroName(b.name), undefined, {
      numeric: true,
      sensitivity: 'base'
    })
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 w-full">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 xl:px-[300px]">
          <div className="py-6 md:py-8">
            <h1 className="text-4xl text-center font-bold">Character Selection</h1>
          </div>

          <div className="py-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4">
              {characters.map(({ data: character, name }) => {
                const heroName = getHeroName(name);
                const mappedname = charnamemap[name];
                return (
                  <Link
                    href={`/builder/${heroName.toLowerCase().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`}
                    key={character.m_HeroID as string}
                    className="block"
                  >
                    <div className="bg-gray-800/30 backdrop-blur-sm p-3 md:p-4 rounded-xl hover:bg-gray-700/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl h-full border border-gray-700/30">
                      {hasSelectionImage(character) && (
                        <Image
                          src={character.m_strIconHeroCard}
                          alt={mappedname}
                          width={100}
                          height={100}
                          className="object-contain h-16 w-16 md:h-24 md:w-24 mx-auto mb-2 rounded-full shadow-md"
                          style={{
                            maxWidth: "100%",
                            height: "auto"
                          }}
                        />
                      )}
                      <p className="text-center text-sm md:text-base font-medium">{mappedname}</p>
                    </div>
                  </Link>
                );
              })}


            </div>
          </div>

          {/* Bottom section with Ko-fi and Ad */}
          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <div className="max-w-2xl mx-auto">
              <KofiWidget />
            </div>
            <div className="max-w-[728px] mx-auto">
              <AdDisplay format="responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}