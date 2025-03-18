// src/components/ItemCard.tsx
import { Item } from "@/types/Item";
import Image from "next/image";

export const ItemCard = ({ image, name, plaintext }: Item) => {
  return (
    <div className="block p-4 border rounded-lg hover:shadow-lg transition">
      <Image
        src={image.full}
        alt={name}
        width={100}
        height={100}
        className="rounded-md mx-auto"
      />
      <h2 className="text-center mt-2 font-semibold">{name}</h2>
      <p className="text-center text-sm text-gray-600">{plaintext}</p>
    </div>
  );
};
