// src/app/champions/page.tsx
"use client";

import { Card } from "@/components/Card";
import { useChampionDataQuery } from "../../../query/useChampionDataQuery";


const ChampionsPage = () => {
  const { data: champions } = useChampionDataQuery();

  if (!champions) return <div>로딩 중...</div>;

  return (
    <div>
      <h1 className="header-container">챔피언 목록</h1>
      <div className="card-container">
          {champions.map((champion) => (
            <Card key={champion.id} {...champion} />
          ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
