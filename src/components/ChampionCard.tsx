import Image from "next/image";
import Link from "next/link";

interface CardProps {
    image: string;
    name: string;
    title: string;
};

export const ChampionCard = ({image, name, title}: CardProps) => {
    return (
        <div>
            <Link href={`/champions/${name}`} className="block p-4 border rounded-lg hover:shadow-lg transition">
            <Image src={image} alt={name} width={200} height={200} className="rounded-md mx-auto"/>
            <h2 className="text-center mt-2 font-semibold">{name}</h2>
            <p className="text-center text-sm text-gray-600">{title}</p>
            </Link>
        </div>
    );
}