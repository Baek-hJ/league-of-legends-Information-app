"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchChampionList } from "@/utils/serverApi";

export default function RotationPage() {
  const [rotationData, setRotationData] = useState<number[]>([]);
  const [champions, setChampions] = useState<{ id: number; name: string; title: string; image: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchRotation() {
      try {
        const res = await fetch("/api/rotation");
        if (!res.ok) throw new Error("데이터를 불러오는 중 오류 발생");
        const data = await res.json();
        setRotationData(data.freeChampionIds ?? []);
      } catch {
        setError("데이터를 불러오는 중 오류 발생");
      }
    }

    fetchRotation();
  }, []);


  useEffect(() => {
    if (rotationData.length === 0) return;
  
    async function fetchChampions() {
      try {
        const championList = await fetchChampionList();
  
        const filteredChampions = championList
          .filter((champ) => rotationData.includes(Number(champ.id)))
          .map((champ) => ({
            id: Number(champ.id),
            name: champ.name,
            title: champ.title,
            image: champ.image.full,
          }));
  
        console.log("필터링된 로테이션 챔피언:", filteredChampions); 
        setChampions(filteredChampions);
      } catch {
        setError("챔피언 정보를 불러오는 중 오류 발생");
      } finally {
        setLoading(false);
      }
    }
  
    fetchChampions();
  }, [rotationData]);
  

  return (
    <div className="rotation-container">
      <h1 className="header-container">챔피언 로테이션</h1>
      <p className="text-xl">(이번 주 무료로 플레이할 수 있어요!)</p>
      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <p className="text-center text-gray-400">로딩 중...</p>
      ) : (
        <div className="card-container">
          {champions.map((champion) => (
            <div key={champion.id} className="champion-card">
              <Image src={champion.image} alt={champion.name} width={120} height={120} className="champion-image" />
              <div className="champion-info">
                <h2 className="champion-name">{champion.name}</h2>
                <p className="champion-title">{champion.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
