// src/app/champions/[id]/page.tsx
import { fetchChampionDetail } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";
import Head from "next/head";

export default async function ChampionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const champion: ChampionDetail | null = await fetchChampionDetail(params.id);
  if (!champion)
    return (
      <p className="text-center text-red-500">챔피언을 찾을 수 없습니다.</p>
    );

  return (
    <div className="container mx-auto p-8 text-center">

      <Head>
        <title>{champion.id} - 상세 정보</title>
        <meta name="description" content={champion.blurb} />
        <meta name="og:title" content={champion.name} />
        <meta name="og:description" content={champion.blurb} />
        <meta name="og:image" content={champion.image.full} />
      </Head>

      <h1 className="text-3xl font-bold">{champion.name}</h1>
      <p className="text-lg text-gray-600">{champion.title}</p>
      <Image
        src={champion.image.full}
        alt={champion.name}
        width={240}
        height={240}
        className="mx-auto"
      />
      <p className="mt-4">{champion.blurb}</p>
      <p className="mt-2">공격력: {champion.info.attack}</p>
      <p>방어력: {champion.info.defense}</p>
      <p>마법: {champion.info.magic}</p>
      <p>난이도: {champion.info.difficulty}</p>
    </div>
  );
}
