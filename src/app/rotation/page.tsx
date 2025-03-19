"use client";

import { useEffect, useState } from "react";

export default function RotationPage() {
  const [rotationData, setRotationData] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRotation() {
      try {
        const res = await fetch("/api/rotation");
        if (!res.ok) throw new Error("데이터를 불러오는 중 오류 발생");
        const data = await res.json();
        setRotationData(data.freeChampionIds);
      } catch {
        setError("데이터를 불러오는 중 오류 발생");
      }
    }

    fetchRotation();
  }, []);

  return (
    <div>
      <h1 className="header-container">챔피언 로테이션</h1>
      <p className="text-xl">(이번 주 무료로 플레이할 수 있어요!)</p>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {rotationData?.map((id) => (
          <li key={id} className="p-2 border">{id}</li>
        ))}
      </ul>
    </div>
  );
}
