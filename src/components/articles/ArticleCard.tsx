import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ArticleCardProps {
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
  className?: string;
  size?: "small" | "medium" | "large";
  layout?: "vertical" | "horizontal";
}

const ArticleCard = ({
  id = "article-1",
  title = "The Amazing Discovery of a New Butterfly Species",
  excerpt = "Young scientist Emma Johnson, age 10, discovered a new butterfly species in her backyard garden last week.",
  category = "Science",
  readingLevel = 3,
  author = {
    name: "Jamie Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
  },
  thumbnail = "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=400&q=80",
  publishDate = "May 15, 2023",
  className,
  size = "medium",
  layout = "vertical",
}: ArticleCardProps) => {
  const isHorizontal = layout === "horizontal";
  const isLarge = size === "large";
  const isSmall = size === "small";

  return (
    <div
      className={cn(
        "group overflow-hidden bg-white",
        isHorizontal ? "flex gap-4" : "flex flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isHorizontal ? (isLarge ? "w-1/2" : "w-1/3") : "w-full",
          isSmall ? "h-32" : isLarge ? "h-64" : "h-48",
        )}
      >
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute left-0 top-0 m-2 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
          {category}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col",
          isHorizontal ? (isLarge ? "w-1/2" : "w-2/3") : "w-full",
          isSmall ? "p-2" : "p-4",
        )}
      >
        <h3
          className={cn(
            "font-bold text-navy-800 line-clamp-2",
            isSmall ? "text-base" : isLarge ? "text-2xl" : "text-xl",
            isSmall ? "mb-1" : "mb-2",
          )}
        >
          {title}
        </h3>

        {!isSmall && (
          <p
            className={cn(
              "line-clamp-3 text-slate-600",
              isLarge ? "text-base mb-4" : "text-sm mb-3",
            )}
          >
            {excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between">
          <div className="text-xs text-slate-500">{publishDate}</div>

          <a
            href={`/article/${id}`}
            className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read Article
            <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
