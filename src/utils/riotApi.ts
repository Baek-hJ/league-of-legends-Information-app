export const getChampionRotation = async () => {
  try {
    const response = await fetch("/api/rotation");
    if (!response.ok) throw new Error("데이터를 불러오지 못했습니다.");

    const data = await response.json();
    return data.freeChampionIds; // 로테이션 챔피언 ID 목록 반환
  } catch (error) {
    console.error("API 요청 실패:", error);
    return null;
  }
};
