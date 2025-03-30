import React from "react";
import Header from "./layout/Header";
import HeroSection from "./home/HeroSection";
import CategoryNav from "./home/CategoryNav";
import ArticleSection from "./home/ArticleSection";
import Footer from "./layout/Footer";

const Home = () => {
  // Mock data for the hero section
  const mainArticle = {
    id: "headline-1",
    title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
    excerpt:
      "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines that turned out to be fossils from an ecosystem that existed before dinosaurs.",
    category: "Childrens News",
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
  };

  // Mock data for the side articles
  const sideArticles = [
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
  ];

  // Mock data for the entertainment section
  const entertainmentArticles = [
    {
      id: "entertainment-1",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Entertainment",
      readingLevel: 2,
      author: {
        name: "Emma Rodriguez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1545668855-b923f0176935?w=400&q=80",
      publishDate: "June 7, 2023",
    },
    {
      id: "entertainment-2",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Entertainment",
      readingLevel: 2,
      author: {
        name: "Liam Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&q=80",
      publishDate: "June 4, 2023",
    },
    {
      id: "entertainment-3",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Entertainment",
      readingLevel: 3,
      author: {
        name: "Zoe Williams",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
      publishDate: "June 2, 2023",
    },
  ];

  // Mock data for the food section
  const foodArticles = [
    {
      id: "food-1",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Food",
      readingLevel: 2,
      author: {
        name: "Riley Cooper",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riley",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
      publishDate: "June 9, 2023",
    },
    {
      id: "food-2",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Food",
      readingLevel: 2,
      author: {
        name: "Jordan Taylor",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80",
      publishDate: "June 6, 2023",
    },
    {
      id: "food-3",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Food",
      readingLevel: 3,
      author: {
        name: "Mia Nguyen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
      publishDate: "June 3, 2023",
    },
  ];

  // Mock data for the sports section
  const sportsArticles = [
    {
      id: "sports-1",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Sports",
      readingLevel: 2,
      author: {
        name: "Noah Kim",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80",
      publishDate: "May 30, 2023",
    },
    {
      id: "sports-2",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Sports",
      readingLevel: 3,
      author: {
        name: "Olivia Martinez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80",
      publishDate: "June 1, 2023",
    },
    {
      id: "sports-3",
      title: "Ancient Ecosystem Found in Italy Predates Dinosaurs",
      excerpt:
        "Claudia Steffensen and her husband were hiking in Lombardy, Italy, in 2023 when she stepped on what appeared to be a block of cement. A closer examination revealed curvy lines.",
      category: "Sports",
      readingLevel: 1,
      author: {
        name: "Lucas Brown",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?w=400&q=80",
      publishDate: "May 28, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Category Navigation */}
      <CategoryNav />

      {/* Hero Section */}
      <HeroSection mainArticle={mainArticle} sideArticles={sideArticles} />

      {/* Entertainment Section */}
      <ArticleSection
        title="Entertainment"
        viewAllLink="/category/entertainment"
        articles={entertainmentArticles}
        layout="grid"
        background="gray"
      />

      {/* Food Section */}
      <ArticleSection
        title="Food"
        viewAllLink="/category/food"
        articles={foodArticles}
        layout="grid"
      />

      {/* Sports Section */}
      <ArticleSection
        title="Sports"
        viewAllLink="/category/sports"
        articles={sportsArticles}
        layout="grid"
        background="gray"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
