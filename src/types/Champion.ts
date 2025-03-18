// src/types/Champion.ts

export interface Champion {
  id: string;
  image: {
    full: string
  };
  name: string;
  title: string;
}

export interface ChampionDetail extends Champion {
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}
