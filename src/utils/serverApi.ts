// src/utils/serverApi.ts

import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

const API_URL =
  "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json";
const IMAGE_BASE_URL =
  "http://ddragon.leagueoflegends.com/cdn/15.5.1/img";

const ITEM_API_URL = "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"

// 챔피언 목록 가져오기
export const fetchChampionList = async (): Promise<Champion[]> => {
  const res = await fetch(API_URL);
  const data = await res.json();

  const championsData: Record<string, Champion> = data.data;

  return Object.values(championsData).map((champion) => ({
    id: champion.id,
    name: champion.name,
    title: champion.title,
    image: {
      full: `${IMAGE_BASE_URL}/champion/${champion.image.full}`,
    },
  }));
};

// 챔피언 상세 정보 가져오기
export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail | null> => {
  const res = await fetch(API_URL);
  const data = await res.json();

  const championsData: Record<string, ChampionDetail> = data.data;

  if (!championsData[id]) return null;
  const champion = championsData[id];

  return {
    id: champion.id,
    name: champion.name,
    title: champion.title,
    image: {
      full: `${IMAGE_BASE_URL}/champion/${champion.image.full}`,
    },
    blurb: champion.blurb,
    info: champion.info,
  };
};


// 아이템 목록 가져오기
export const fetchItemList = async (): Promise<Item[]> => {
  const res = await fetch(ITEM_API_URL);
  const data = await res.json();

  const itemsData: Record<string, Item> = data.data;

  return Object.values(itemsData).map((item) => ({
    name: item.name,
    plaintext: item.plaintext,
    image: {
      full: `${IMAGE_BASE_URL}/item/${item.image.full}`,
    },
  }));
}