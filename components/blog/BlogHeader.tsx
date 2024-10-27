// components/blog/BlogHeader.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import GptVGgl from "@/public/blog/gpt-vs-google.png";
import Ultron from "@/public/blog/ultron.jpg";

interface BlogHeaderProps {
  title: string;
  description: string;
  authorName: string;
  position: string;
  readtime: string;
  createdAt: string;
  tags: string[];
}

export default function BlogHeader({
  title,
  description,
  authorName,
  position,
  readtime,
  createdAt,
  tags,
}: BlogHeaderProps) {
  

  return (
    <div className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <div className="mb-4">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-gray-200"
          >
            Home &gt; Blog
          </Link>
          <span className="text-sm text-gray-400"> &gt; </span>
          <span className="text-sm text-red-500">{title}</span>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start mt-16">
          <div>
            {tags.map((tag, index) => <Button
              key={index}
              variant="outline"
              className="mb-4 bg-red-100 text-red-600 border-red-600 hover:bg-red-200"
            >
              {tag}
            </Button>)}
            <h1 className="text-5xl font-bold mb-4 leading-tight">{title}</h1>
            <div className="mb-4 text-gray-400">
              <p>Last Updated: {new Date(createdAt).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src={Ultron}
                alt={authorName}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{authorName}</p>
                <p className="text-sm text-gray-400">{position}</p>
              </div>
            </div>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
          <div>
            <Image
              src={GptVGgl}
              alt={title}
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
