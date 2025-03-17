export interface Champion {
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

