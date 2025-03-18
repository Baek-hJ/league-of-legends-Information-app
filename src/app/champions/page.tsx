// src/app/champions/page.tsx
"use client";

import { ChampionCard } from "@/components/ChampionCard";
import { useDataQuery } from "../../../query/useDataQuery";


const ChampionsPage = () => {
  const { data: champions } = useDataQuery();

  if (!champions) return <div>로딩 중...</div>;

  return (
    <div>
      <h1 className="header-container">챔피언 목록</h1>
      <div className="card-container">
          {champions.map((champion) => (
            <ChampionCard key={champion.id} {...champion} />
          ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
