import React from "react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await res.json;
};

const ChampionsPage = () => {
  return <div>챔피언 목록</div>;
};

export default ChampionsPage;
