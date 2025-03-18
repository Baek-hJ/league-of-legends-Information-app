// src/app/items/page.tsx
"use client";

import { ItemCard } from "@/components/ItemCard";
import { useItemDataQuery } from "../../../query/useItemDataQuery";

const ItemsPage = () => {
  const { data: ItemsPage } = useItemDataQuery();

  if (!ItemsPage) return <div>로딩 중...</div>;

  return (
    <div>
      <h1 className="header-container">아이템 목록</h1>
      <div className="item-card-container">
        {ItemsPage.map((item) => (
          <ItemCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
