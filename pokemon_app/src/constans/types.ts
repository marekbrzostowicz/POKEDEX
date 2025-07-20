//Pokemon main information from details page
export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonPropsHeader {
  id: number;
  name: string;
  url: string;
  types: PokemonType[];
}

//Pokemon Stats from details page
export interface PokemonStatsProps {
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

//Pokemon card
export interface PokemonCardProps {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}

//Pokemon photos
export interface PokemonPhotosProps {
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
  };
}

//Abilites
export interface PokemonAbilitiesProps {
  name: string;
  abilities: Array<{
    is_hidden: boolean;
    ability: {
      name: string;
      url: string;
    };
  }>;
}

//Abilities details
export interface PokemonAbilitiesDetails {
  effect_entries: Array<{
    effect: string;
    language: {
      name: string;
    };
  }>;
}
