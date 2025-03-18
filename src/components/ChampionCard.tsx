import Image from "next/image";
import Link from "next/link";

interface CardProps {
    id: string;
    image: {
        full: string;
    };
    name: string;
    title: string;
};

export const ChampionCard = ({id, image, name, title}: CardProps) => {
    return (
        <div>
            <Link href={`/champions/${id}`} className="block p-4 border rounded-lg hover:shadow-lg transition">
            <Image src={image.full} alt={name} width={100} height={100} className="rounded-md mx-auto"/>
            <h2 className="text-center mt-2 font-semibold">{name}</h2>
            <p className="text-center text-sm text-gray-600">{title}</p>
            </Link>
        </div>
    );
}