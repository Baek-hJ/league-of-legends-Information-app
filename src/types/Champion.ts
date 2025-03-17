interface Champion {
  name: string;
  title: string;
}

interface ChampionInfo extends Champion {
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}
