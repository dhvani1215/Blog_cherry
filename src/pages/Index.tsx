import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { BlogCard } from '@/components/BlogCard';
import { FilterSort } from '@/components/FilterSort';
import { CherryBlossomRain } from '@/components/CherryBlossomRain';
import { initialBlogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

const Index = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [blogPosts, searchQuery, selectedCategory, sortBy]);

  const handleDeletePost = (id: string) => {
    setBlogPosts(posts => posts.filter(post => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-spring-gradient relative">
      <CherryBlossomRain />
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="container mx-auto px-4 py-8 relative z-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold spring-text-gradient mb-4 animate-bloom">
            Welcome to Cherry Blossom Blog
          </h1>
          <p className="text-xl text-spring-800 max-w-2xl mx-auto">
            Exploring the beauty of knowledge, one post at a time 🌸
          </p>
          <div className="mt-6 animate-float">
            <div className="text-8xl">🌸</div>
          </div>
        </div>

        {/* Filter and Sort */}
        <FilterSort
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortBy}
        />

        {/* Blog Posts Grid */}
        {filteredAndSortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-spring-800 mb-2">No posts found</h3>
            <p className="text-spring-600">
              {searchQuery 
                ? `No posts match "${searchQuery}"`
                : `No posts in ${selectedCategory} category`
              }
            </p>
          </div>
        )}
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 text-pink-300 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-4xl">🌸</div>
      </div>
      <div className="fixed bottom-20 left-10 text-pink-300 opacity-30 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-6xl">🌺</div>
      </div>
      <div className="fixe d top-1/2 right-20 text-pink-300 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
        <div className="text-5xl">🌸</div>
      </div>
    </div>
  );
};

export default Index;
