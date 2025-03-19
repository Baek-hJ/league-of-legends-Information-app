"use client";

import { useEffect, useState } from "react";
import { getChampionRotation } from "@/utils/riotApi";

const RotationPage = () => {
  const [rotationIds, setRotationIds] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRotation = async () => {
      const data = await getChampionRotation();
      if (data) {
        setRotationIds(data);
      } else {
        setError("데이터를 불러오는 데 실패했습니다.");
      }
      setLoading(false);
    };

    fetchRotation();
  }, []);

  return (
    <div>
      <h1 className="header-container">챔피언 로테이션</h1>
      <p className="text-xl">(이번 주 무료로 플레이할 수 있어요!)</p>

      {loading && <p>로딩 중...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {rotationIds && (
        <ul className="grid grid-cols-4 gap-4">
          {rotationIds.map((id) => (
            <li key={id} className="p-4 border rounded-lg text-center">
              챔피언 ID: {id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RotationPage;
