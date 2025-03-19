// src/app/items/page.tsx
// ssg 렌더링

import { fetchItemList } from "@/utils/serverApi";
import { ItemCard } from "@/components/ItemCard";

export default async function ItemsPage() {
  const items = await fetchItemList();

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
}



