
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Header({ onSearch, searchQuery }: HeaderProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-spring-300/30">
      {/* Top Banner */}
      <div className="bg-cherry-gradient text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
            🌸 Cherry Blossom Blog
          </h1>
          <p className="text-sm md:text-base opacity-90 mt-1">
            Exploring the Universe of Knowledge
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold spring-text-gradient">
            🌸 Cherry Blog
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-cherry-gradient text-white shadow-lg' 
                  : 'text-spring-800 hover:bg-spring-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-cherry-gradient text-white shadow-lg' 
                  : 'text-spring-800 hover:bg-spring-200'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-cherry-gradient text-white shadow-lg' 
                  : 'text-spring-800 hover:bg-spring-200'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search & New Post */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spring-600 w-4 h-4" />
              <Input
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 w-64 bg-white/70 border-spring-300 focus:border-spring-pink"
              />
            </div>
            <Link to="/new-post">
              <Button className="bg-cherry-gradient hover:opacity-90 text-white shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/80 rounded-lg backdrop-blur-sm animate-bloom">
            <nav className="flex flex-col gap-3 mb-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full text-center transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-cherry-gradient text-white shadow-lg' 
                    : 'text-spring-800 hover:bg-spring-200'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-full text-center transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-cherry-gradient text-white shadow-lg' 
                    : 'text-spring-800 hover:bg-spring-200'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-full text-center transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-cherry-gradient text-white shadow-lg' 
                    : 'text-spring-800 hover:bg-spring-200'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spring-600 w-4 h-4" />
                <Input
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="pl-10 w-full bg-white/70 border-spring-300 focus:border-spring-pink"
                />
              </div>
              <Link to="/new-post" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-cherry-gradient hover:opacity-90 text-white shadow-lg">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
