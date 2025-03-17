// src/utils/serverApi.ts

import { Champion, ChampionDetail  } from "@/types/Champion"

const API_URL = "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
const IMAGE_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/"

// 챔피언 목록 가져오기
export const fetchChampionList = async (): Promise<Champion[]> => {
    const res = await fetch(API_URL);
    const data = await res.json();

    const championsData: Record<string, Champion> = data.data;

    return Object.values(championsData).map((champion) => ({
        id: champion.id,
        name: champion.name,
        title: champion.title,
        image: `${IMAGE_BASE_URL}${champion.image}`,
}));
};

// 챔피언 상세 정보 가져오기
export const fetchChampionDetail = async (id: string): Promise<ChampionDetail | null> => {
    const res = await fetch(API_URL);
    const data = await res.json();

    const championsData:Record<string, ChampionDetail> = data.data;

    if(!championsData[id]) return null;
    const champion = championsData[id];


    return {
        id: champion.id,
        name: champion.name,
        title: champion.title,
        image: `${IMAGE_BASE_URL}${champion.image}`,
        blurb: champion.blurb,
        info: champion.info,
    };
};
