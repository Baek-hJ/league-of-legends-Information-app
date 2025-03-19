import { fetchChampionList } from "@/utils/serverApi";
import { ChampionCard } from "@/components/ChampionCard";

export default async function ChampionsPage() {
  const champions = await fetchChampionList();

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
}
