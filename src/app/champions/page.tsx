// src/app/champions/page.tsx
"use client";

import { ChampionCard } from "@/components/ChampionCard";
// import { Champion } from "@/types/Champion";
import { useDataQuery } from "../../../query/useDataQuery";

const ChampionsPage = () => {
  const { data: champions } = useDataQuery();

  if (!champions) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>챔피언 목록</h1>
      <div>
        <li>
          {champions.map((champion) => (
            <ChampionCard key={champion.id} {...champion} />
          ))}
        </li>
      </div>
    </div>
  );
};

export default ChampionsPage;
