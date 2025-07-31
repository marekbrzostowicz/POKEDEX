#Pokedex
Interactive Pokemon encyclopedia that fetches data from Pokemon API. Browse through Pokemon, view detailed stats, abilities, and photos with a clean, responsive interface.

## Installation
```bash
git clone https://github.com/marekbrzostowicz/POKEDEX.git
cd POKEDEX
npm install
npm run dev
```
### URL 
https://agreeable-ocean-0ee09c310.1.azurestaticapps.net/

## Project Structure
src/
├── components/          
│   ├── elements/       
│   │   ├── Header.tsx
│   │   ├── Loading.tsx
│   │   ├── PokemonCard.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ReturnToList.tsx
│   │   └── Search.tsx
│   └── pokemon-details/ # Pokemon detail components
│       ├── Abilities.tsx
│       ├── BasisInfo.tsx
│       ├── Photos.tsx
│       ├── PokemonHeader.tsx
│       └── Stats.tsx
├── constants/           
├── pages/            
│   ├── PokemonDetails.tsx
│   └── PokemonList.tsx
├── assets/           
├── App.tsx            
└── index.css          

### Technologies
 - React + TypeScript
 - Tailwind CSS
 - POKE API


