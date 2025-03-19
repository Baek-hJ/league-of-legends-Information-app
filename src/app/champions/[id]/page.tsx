// src/app/champions/[id]/page.tsx
import { fetchChampionDetail } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";

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
<div 
  className="min-h-screen flex items-center justify-center bg-cover bg-center p-8"
  style={{ backgroundImage: `url("https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe/ac8f27055808f5c375af1312c5584cae88124db0-1920x814.jpg")`

   }}>
  <div className="max-w-3xl bg-gray-900 bg-opacity-95 text-white rounded-lg shadow-lg p-8">
    {/* 챔피언 이름 및 타이틀 */}
    <h1 className="text-4xl font-extrabold text-center mb-2">{champion.name}</h1>
    <p className="text-lg text-gray-400 text-center mb-6">{champion.title}</p>

    {/* 챔피언 이미지 */}
    <div className="flex justify-center">
      <Image
        src={champion.image.full}
        alt={champion.name}
        width={150}
        height={150}
        className="rounded-lg border-4 border-gray-700"
      />
    </div>

    {/* 챔피언 설명 */}
    <p className="mt-6 text-gray-300 leading-relaxed text-center px-4">
      {champion.blurb}
    </p>

    {/* 챔피언 능력치 */}
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center bg-gray-800 p-4 rounded-md">
      <div>
        <p className="text-lg font-semibold text-gray-300">공격력</p>
        <p className="text-xl font-bold">{champion.info.attack}</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-300">방어력</p>
        <p className="text-xl font-bold">{champion.info.defense}</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-300">마법</p>
        <p className="text-xl font-bold">{champion.info.magic}</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-300">난이도</p>
        <p className="text-xl font-bold">{champion.info.difficulty}</p>
      </div>
    </div>
  </div>
</div>
  );
}
