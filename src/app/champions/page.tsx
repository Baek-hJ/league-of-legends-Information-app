// src/app/champions/page.tsx
import { ChampionCard } from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";


export default async function ChampionsPage() {
  const champions: Champion[] = await fetchChampionList();
  return (
  <div>
    <h1>챔피언 목록</h1>
    <div>
      {champions.map((champion) => (
        <ChampionCard key={champion.id} {...champion} />
  ))}
    </div>
    </div>);
};

