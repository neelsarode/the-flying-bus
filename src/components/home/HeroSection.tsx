import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ArticleCard from "../articles/ArticleCard";

export interface HeroSectionProps {
  mainArticle?: {
    id?: string;
    title?: string;
    excerpt?: string;
    category?: string;
    readingLevel?: number;
    readTime?: number;
    author?: {
      name?: string;
      avatar?: string;
    };
    image?: string;
    thumbnail?: string;
    publishDate?: string;
  };
  sideArticles?: Array<{
    id?: string;
    title?: string;
    excerpt?: string;
    category?: string;
    readingLevel?: number;
    author?: {
      name?: string;
      avatar?: string;
    };
    thumbnail?: string;
    publishDate?: string;
  }>;
  className?: string;
}

const HeroSection = ({
  mainArticle = {
    id: "headline-1",
    title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
    excerpt:
      "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines that turned out to be fossils from an ecosystem that existed before dinosaurs.",
    category: "Children's News",
    readingLevel: 4,
    readTime: 5,
    author: {
      name: "Alex Rivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    image:
      "https://images.unsplash.com/photo-1569180880150-df4eed93c3ff?w=1200&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1569180880150-df4eed93c3ff?w=1200&q=80",
    publishDate: "June 12, 2023",
  },
  sideArticles = [
    {
      id: "side-1",
      title: "New Studying Tips for Second Graders in History Class",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Sports",
      readingLevel: 3,
      author: {
        name: "Jamie Smith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
      publishDate: "May 15, 2023",
    },
    {
      id: "side-2",
      title: "New Studying Tips for Second Graders in History Class",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Local Updates",
      readingLevel: 2,
      author: {
        name: "Alex Rivera",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
      publishDate: "May 12, 2023",
    },
  ],
  className,
}: HeroSectionProps) => {
  return (
    <section className={cn("w-full bg-white py-6", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Article */}
          <div className="md:col-span-2">
            <div className="group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute left-0 top-0 m-3 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
                  {mainArticle.category}
                </div>
              </div>

              <div className="p-4">
                <h1 className="text-3xl font-bold text-navy-800 mb-3">
                  {mainArticle.title}
                </h1>

                <p className="text-slate-600 mb-4">{mainArticle.excerpt}</p>

                <a
                  href={`/article/${mainArticle.id}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="md:col-span-1 space-y-6">
            {sideArticles.map((article, index) => (
              <ArticleCard
                key={article.id || index}
                {...article}
                layout="horizontal"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
