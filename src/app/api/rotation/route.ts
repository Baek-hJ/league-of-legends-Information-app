import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.RIOT_API_KEY;
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API 키가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  const RIOT_API_URL = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

  try {
    const response = await fetch(RIOT_API_URL, {
      headers: { "X-Riot-Token": API_KEY },
    });

    if (!response.ok) throw new Error("Riot API 요청 실패");

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "데이터를 불러오는 중 오류 발생" },
      { status: 500 }
    );
  }
}
