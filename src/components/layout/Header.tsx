import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isLoggedIn?: boolean;
  username?: string;
  avatarUrl?: string;
}

const Header = ({
  isLoggedIn = false,
  username = "Guest",
  avatarUrl = "",
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white py-6">
      <div className="container mx-auto px-4">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center justify-center mb-6">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold text-navy-800 flex items-center">
                <span className="mr-2 italic">The</span>
                <span className="relative mx-2">
                  <svg className="w-24 h-24" viewBox="0 0 120 80" fill="none">
                    {/* Helicopter rotor */}
                    <line
                      x1="10"
                      y1="10"
                      x2="110"
                      y2="10"
                      stroke="#1e3a8a"
                      strokeWidth="3"
                    />
                    <line
                      x1="60"
                      y1="0"
                      x2="60"
                      y2="10"
                      stroke="#1e3a8a"
                      strokeWidth="3"
                    />

                    {/* Bus body */}
                    <rect
                      x="20"
                      y="25"
                      width="80"
                      height="35"
                      rx="10"
                      fill="#fbbf24"
                    />

                    {/* Windows */}
                    <rect
                      x="30"
                      y="30"
                      width="15"
                      height="15"
                      rx="3"
                      fill="#93c5fd"
                    />
                    <rect
                      x="50"
                      y="30"
                      width="15"
                      height="15"
                      rx="3"
                      fill="#93c5fd"
                    />
                    <rect
                      x="70"
                      y="30"
                      width="15"
                      height="15"
                      rx="3"
                      fill="#93c5fd"
                    />

                    {/* People in windows */}
                    <circle cx="37" cy="37" r="4" fill="#ef4444" />
                    <circle cx="57" cy="37" r="4" fill="#3b82f6" />
                    <circle cx="77" cy="37" r="4" fill="#22c55e" />

                    {/* Wheels */}
                    <circle cx="30" cy="60" r="8" fill="#1e293b" />
                    <circle cx="90" cy="60" r="8" fill="#1e293b" />

                    {/* Helicopter top */}
                    <rect x="55" y="15" width="10" height="10" fill="#ef4444" />
                  </svg>
                </span>
                <span className="italic">Flying Bus</span>
              </h1>
            </div>
            <p className="text-sm text-slate-600 italic text-center mt-1">
              News for Kids, By Kids
            </p>
          </Link>
        </div>

        {/* User Menu and Mobile Menu Button */}
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          {/* User Menu or Login Button */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src={avatarUrl} alt={username} />
                    <AvatarFallback className="bg-blue-100 text-navy-800">
                      {username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/my-articles" className="w-full">
                    My Articles
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    className="w-full text-left"
                    onClick={() => console.log("Logout")}
                  >
                    Sign Out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="text-navy-800 border-navy-800"
              >
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log In
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-navy-800 text-white hover:bg-navy-700"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-navy-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/category/news"
              className="text-sm font-medium text-navy-800 hover:text-blue-600 transition-colors"
            >
              Children's News
            </Link>
            <Link
              to="/category/sports"
              className="text-sm font-medium text-navy-800 hover:text-blue-600 transition-colors"
            >
              Sports
            </Link>
            <Link
              to="/category/local"
              className="text-sm font-medium text-navy-800 hover:text-blue-600 transition-colors"
            >
              Local Updates
            </Link>
            <Link
              to="/category/food"
              className="text-sm font-medium text-navy-800 hover:text-blue-600 transition-colors"
            >
              Food
            </Link>
            <Link
              to="/category/entertainment"
              className="text-sm font-medium text-navy-800 hover:text-blue-600 transition-colors"
            >
              Entertainment
            </Link>
            <Link
              to="/category/learning"
              className="text-sm font-medium text-navy-800 hover:text-blue-600 transition-colors"
            >
              Learning
            </Link>
            <Link
              to="/category/school"
              className="text-sm font-medium text-navy-800 hover:text-blue-600 transition-colors"
            >
              School News
            </Link>
          </nav>

          {!isLoggedIn && (
            <div className="mt-4 flex space-x-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 text-navy-800 border-navy-800"
              >
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log In
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="flex-1 bg-navy-800 text-white hover:bg-navy-700"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
