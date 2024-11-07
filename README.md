This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# DeadLock Calculator Project Summary

## Project Overview
The DeadLock Calculator is a Next.js application built with TypeScript and React. It's designed to calculate and display character stats for the DeadLock game, allowing users to equip items and see how they affect character attributes.

## File Structure
```
DelockBuilder/
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
│   │   ├── characters/
│   │   └── items/
│   ├── builder/
│   │   └── [characterName]/
│   ├── components/
│   │   ├── CharacterBuilder.tsx
│   │   ├── CharacterGrid.tsx
│   │   ├── ItemGrid.tsx
│   │   ├── ItemsDisplay.tsx
│   │   └── ItemSidebar.tsx
│   ├── data/
│   │   ├── characters.json
│   │   ├── items.json
│   │   └── Characters/
│   ├── fonts/
│   │   └── Deadlock-Black.otf
│   ├── hooks/
│   │   └── useCharacterStats.ts
│   ├── items/
│   │   └── page.tsx
│   ├── lib/
│   │   ├── dataUtils.ts
│   │   └── gameInterfaces.ts
│   └── ui/
│       └── Navbar.tsx
└── public/
    ├── CharacterAssets/
    ├── characterPNG/
    ├── images/
    │   └── Souls_iconColored.png
    └── itemPNG/
        ├── Spirit/
        ├── Vitality/
        └── Weapon/
```

## Key Components and Their Relationships

1. **CharacterBuilder (app/components/CharacterBuilder.tsx)**
   - Main component for building and displaying character stats
   - Uses ItemGrid and ItemSidebar components
   - Depends on gameInterfaces.ts for type definitions

2. **CharacterStats (app/components/CharacterStats.tsx)**
   - Displays character stats and handles item equipping/unequipping
   - Uses the useCharacterStats hook
   - Depends on gameInterfaces.ts for type definitions

3. **ItemGrid (app/components/ItemGrid.tsx)**
   - Displays a grid of equipped items
   - Used by CharacterBuilder

4. **ItemSidebar (app/components/ItemSidebar.tsx)**
   - Displays available items for equipping
   - Used by CharacterBuilder

5. **useCharacterStats (app/hooks/useCharacterStats.ts)**
   - Custom hook for managing character stats and item effects
   - Used by CharacterStats component

6. **gameInterfaces.ts (app/lib/gameInterfaces.ts)**
   - Contains TypeScript interfaces for Character, Item, and related types
   - Used throughout the application for type checking

7. **dataUtils.ts (app/lib/dataUtils.ts)**
   - Utility functions for loading character and item data
   - Used by components that need to fetch game data

## Data Flow
1. Character and item data is loaded from JSON files in the `app/data/` directory.
2. The CharacterBuilder component allows users to select a character and equip items.
3. When items are equipped or unequipped, the useCharacterStats hook calculates the updated stats.
4. The CharacterStats component displays the current character stats and equipped items.

## Key Types and Interfaces
Future development should adhere to the types defined in `gameInterfaces.ts`, including:
- `Character`
- `Item`
- `CharacterStats`
- `ItemEffect`

Ensure that any new features or components maintain consistency with these interfaces.

## Dependencies
The project uses the following key dependencies:
- Next.js (v14.2.13)
- React (v18)
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)

## Development Conventions
1. Use TypeScript for all new files and components.
2. Follow the existing component structure, separating logic and presentation.
3. Use the `useCharacterStats` hook for managing character stats in relevant components.
4. Implement responsive design using Tailwind CSS classes.
5. Place new components in the `app/components/` directory.
6. Update `gameInterfaces.ts` when introducing new game-related types or modifying existing ones.

## Future Development Notes
1. When adding new features, consider their impact on existing components and data flow.
2. Update the `CharacterBuilder` and `CharacterStats` components when introducing new stat types or item effects.
3. If adding new data sources, update `dataUtils.ts` and ensure proper error handling.
4. Consider implementing server-side rendering (SSR) for initial data loading to improve performance.
5. When modifying the character or item data structure, update both the JSON files and the corresponding TypeScript interfaces.
