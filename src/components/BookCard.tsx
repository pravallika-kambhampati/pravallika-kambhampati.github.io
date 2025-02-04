import Image from "next/image";

interface BookProps {
  title: string;
  author: string;
  year: number;
  cover: string;
}

export default function BookCard({ title, author, year, cover }: BookProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <Image
        src={cover}
        alt={title}
        width={150}
        height={220}
        className="rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">
        {author} ({year})
      </p>
    </div>
  );
}
