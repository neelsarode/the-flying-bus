import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface CategoryNavProps {
  className?: string;
}

const CategoryNav = ({ className }: CategoryNavProps) => {
  const categories = [
    { name: "Childrens News", path: "/category/news" },
    { name: "Sports", path: "/category/sports" },
    { name: "Local Updates", path: "/category/local" },
    { name: "Food", path: "/category/food" },
    { name: "Entertainment", path: "/category/entertainment" },
    { name: "Learning", path: "/category/learning" },
    { name: "School News", path: "/category/school" },
  ];

  return (
    <nav className={cn("w-full border-y border-slate-200 py-3", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="relative ml-4 flex-shrink-0">
            <input
              type="search"
              placeholder="Search..."
              className="h-9 w-40 rounded-full border border-slate-200 pl-4 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
