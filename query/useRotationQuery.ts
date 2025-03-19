import { useQuery } from "@tanstack/react-query";

const fetchChampionRotation = async () => {
  const response = await fetch("/api/rotation");
  if (!response.ok)
    throw new Error("로테이션 데이터를 가져오는 데 실패했습니다.");
  return response.json();
};

export const useRotationQuery = () => {
  return useQuery({
    queryKey: ["championRotation"],
    queryFn: fetchChampionRotation,
    staleTime: 60 * 60 * 1000,
  });
};
