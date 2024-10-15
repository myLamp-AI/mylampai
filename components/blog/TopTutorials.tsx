import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface TopArticles {
  id: string;
  title: string;
  excerpt: string;
  image: any;
  slug: string;
}

const topArticless: TopArticles[] = [
  {
    id: "1",
    title: "The Future of AI in Education",
    excerpt:
      "Exploring how artificial intelligence is transforming the educational landscape.",
    image: "/blog/ai.jpg",
    slug: "future-of-ai-in-education",
  },
  {
    id: "2",
    title: "Machine Learning: A Beginners Guide",
    excerpt:
      "Understanding the basics of machine learning and its applications.",
    image: "/blog/ai.jpg",
    slug: "machine-learning-beginners-guide",
  },
  {
    id: "3",
    title: "The Ethics of AI Development",
    excerpt:
      "Discussing the ethical considerations in artificial intelligence development.",
    image: "/blog/ai.jpg",
    slug: "ethics-of-ai-development",
  },
];

export default function TopArticless() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Top Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {topArticless.map((article) => (
          <Card key={article.id}>
            <CardContent className="p-4">
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h4 className="font-bold mb-2">{article.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
              <Link
                href={`/blog/${article.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
