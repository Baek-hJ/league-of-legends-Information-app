interface Champion {
  name: string;
  title: string;
}

interface ChampionDetail extends Champion {
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}

export type { Champion, ChampionDetail };
