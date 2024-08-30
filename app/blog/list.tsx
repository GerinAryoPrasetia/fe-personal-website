interface Props {
  title: string;
  desc: string;
  publishedAt: string;
  id: number;
}

import Link from "next/link";

export default function BlogList({ title, desc, publishedAt, id }: Props) {
  return (
    <div className="mb-7">
      <Link href={`/blog/${id}`}>
        <h3 className="font-bold">
          {title} <span className="font-light italic text-sm"> - Category</span>
        </h3>
        <p className="text-sm">{desc}</p>
        <p className="text-sm font-light italic">Tuesday, 15 Mar 2024</p>
      </Link>
    </div>
  );
}
