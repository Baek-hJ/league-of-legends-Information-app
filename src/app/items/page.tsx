// src/app/items/page.tsx
// ssg 렌더링

import { ItemCard } from "@/components/ItemCard";
import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";

export default async function ItemsPage() {
  const items: Item[] = await fetchItemList();

  if (!items) return <div>로딩 중...</div>;

  return (
    <div>
      <h1 className="header-container">아이템 목록</h1>
      <div className="item-card-container">
        {items.map((item) => (
          <ItemCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};


