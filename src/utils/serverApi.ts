// src/utils/serverApi.ts
"use server";

import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

const API_VERSION_URL = "https://ddragon.leagueoflegends.com/api/versions.json";
const IMAGE_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

/** 🔹 최신 버전 가져오기 */
const getLatestVersion = async (): Promise<string> => {
  const res = await fetch(API_VERSION_URL);
  const versions: string[] = await res.json();
  return versions[0]; 
};

/** 🔹 챔피언 목록 가져오기 (ISR) */
export const fetchChampionList = async (): Promise<Champion[]> => {
  const version = await getLatestVersion();
  const API_URL = `${IMAGE_BASE_URL}/${version}/data/ko_KR/champion.json`;

  const res = await fetch(API_URL, { next: { revalidate: 86400 } });
  const data = await res.json();

  const championsData: Record<string, Champion> = data.data;

  return Object.values(championsData).map((champion: Champion) => ({
    id: champion.id,
    name: champion.name,
    title: champion.title,
    image: {
      full: `${IMAGE_BASE_URL}/${version}/img/champion/${champion.image.full}`,
    },
  }));
};


/** 🔹 챔피언 상세 정보 가져오기 (SSR) */
export const fetchChampionDetail = async (id: string) => {
  const version = await getLatestVersion();
  const API_URL = `${IMAGE_BASE_URL}/${version}/data/ko_KR/champion/${id}.json`;

  const res = await fetch(API_URL, { cache: "no-store" }); 
  const data = await res.json();

  if (!data.data[id]) return null;

  const champion = data.data[id];

  return {
    id: champion.id,
    name: champion.name,
    title: champion.title,
    image: {
      full: `${IMAGE_BASE_URL}/${version}/img/champion/${champion.image.full}`,
    },
    blurb: champion.blurb,
    info: champion.info,
  };
};

/** * 아이템 목록 가져오기 (SSG) */
export const fetchItemList = async (): Promise<Item[]> => {
  const version = await getLatestVersion();
  const API_URL = `${IMAGE_BASE_URL}/${version}/data/ko_KR/item.json`;

  const res = await fetch(API_URL);
  const data = await res.json();

  const itemsData: Record<string, Item> = data.data; 

  return Object.values(itemsData).map((item) => ({
    name: item.name,
    plaintext: item.plaintext,
    image: {
      full: `${IMAGE_BASE_URL}/${version}/img/item/${item.image.full}`,
    },
  }));
};

