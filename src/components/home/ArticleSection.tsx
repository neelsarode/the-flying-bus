import React from "react";
import ArticleCard from "../articles/ArticleCard";
import { cn } from "@/lib/utils";

export interface ArticleSectionProps {
  title?: string;
  viewAllLink?: string;
  articles?: Array<{
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
  layout?: "grid" | "featured" | "horizontal";
  background?: "white" | "gray";
}

const ArticleSection = ({
  title = "Latest Articles",
  viewAllLink = "#",
  articles = [
    {
      id: "article-1",
      title: "The Amazing Discovery of a New Butterfly Species",
      excerpt:
        "Young scientist Emma Johnson, age 10, discovered a new butterfly species in her backyard garden last week.",
      category: "Science",
      readingLevel: 3,
      author: {
        name: "Jamie Smith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=400&q=80",
      publishDate: "May 15, 2023",
    },
    {
      id: "article-2",
      title: "Kids Lead Climate Change Protest at City Hall",
      excerpt:
        "A group of elementary school students organized a peaceful protest to raise awareness about climate change issues.",
      category: "Environment",
      readingLevel: 4,
      author: {
        name: "Alex Rivera",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1569163139599-0f4517e36f31?w=400&q=80",
      publishDate: "May 12, 2023",
    },
    {
      id: "article-3",
      title: "Review: The Latest Minecraft Update Through Kids' Eyes",
      excerpt:
        "Our junior gaming team reviews the exciting new features in the latest Minecraft update and what they mean for young players.",
      category: "Entertainment",
      readingLevel: 2,
      author: {
        name: "Taylor Wong",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1587573089734-599851b2c3b5?w=400&q=80",
      publishDate: "May 10, 2023",
    },
    {
      id: "article-4",
      title: "Local School Wins National Science Competition",
      excerpt:
        "Students from Oakridge Elementary took first place in the National Junior Science Bowl with their innovative recycling robot.",
      category: "School News",
      readingLevel: 3,
      author: {
        name: "Jordan Lee",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1564144006388-615d45a27449?w=400&q=80",
      publishDate: "May 8, 2023",
    },
  ],
  className,
  layout = "grid",
  background = "white",
}: ArticleSectionProps) => {
  return (
    <section
      className={cn(
        "w-full py-8",
        background === "gray" ? "bg-slate-50" : "bg-white",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        {title && (
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-navy-800 border-l-4 border-blue-500 pl-3">
              {title}
            </h2>
            {viewAllLink && (
              <a
                href={viewAllLink}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                View all
              </a>
            )}
          </div>
        )}

        {layout === "featured" && articles.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-1">
              <ArticleCard {...articles[0]} size="large" />
            </div>
            <div className="md:col-span-1 grid grid-cols-1 gap-6">
              <ArticleCard {...articles[1]} layout="horizontal" />
              <ArticleCard {...articles[2]} layout="horizontal" />
            </div>
          </div>
        )}

        {layout === "horizontal" && (
          <div className="space-y-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                {...article}
                layout="horizontal"
                size="medium"
              />
            ))}
          </div>
        )}

        {layout === "grid" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleSection;
