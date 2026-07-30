export type PokemonSpeciesItem = {
  name: string;
  url: string;
};

export type PokemonSpeciesPage = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSpeciesItem[];
};
