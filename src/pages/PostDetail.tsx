
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { initialBlogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';
import { ArrowLeft, Calendar, User, Tag, Edit, Trash2 } from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = initialBlogPosts.find(p => p.id === id);
    setPost(foundPost || null);
  }, [id]);

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this post?')) {
      navigate('/');
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Maths': return '🔢';
      case 'Physics': return '⚛️';
      case 'Universe': return '🌌';
      case 'Music': return '🎵';
      case 'Coding': return '💻';
      default: return '📝';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Maths': return 'bg-blue-500';
      case 'Physics': return 'bg-green-500';
      case 'Universe': return 'bg-purple-500';
      case 'Music': return 'bg-pink-500';
      case 'Coding': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-spring-gradient">
        <Header onSearch={() => {}} searchQuery="" />
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="text-6xl mb-4">😿</div>
          <h1 className="text-2xl font-bold text-spring-800 mb-4">Post not found</h1>
          <Link to="/">
            <Button className="bg-cherry-gradient hover:opacity-90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spring-gradient">
      <Header onSearch={() => {}} searchQuery="" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="border-spring-300 hover:bg-spring-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Posts
              </Button>
            </Link>
          </div>

          {/* Post Content */}
          <article className="glass-effect rounded-2xl shadow-xl overflow-hidden animate-bloom">
            {post.image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-8 md:p-12">
              {/* Category Badge */}
              <div className="mb-4">
                <Badge className={`${getCategoryColor(post.category)} text-white text-sm`}>
                  {getCategoryIcon(post.category)} {post.category}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold spring-text-gradient mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-spring-600 mb-8 pb-6 border-b border-spring-200">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed text-spring-800">
                  {post.content}
                </p>
                
                {/* Extended content for demonstration */}
                <p className="text-lg leading-relaxed text-spring-800 mt-6">
                  This fascinating topic opens up countless avenues for exploration and understanding. The interconnections between different fields of study often reveal surprising patterns and insights that can transform our perspective on the world around us.
                </p>
                
                <p className="text-lg leading-relaxed text-spring-800 mt-6">
                  Whether you're a beginner or an expert in this subject, there's always something new to discover. The beauty of knowledge lies not just in what we know, but in the questions that arise from our understanding, leading us ever deeper into the mysteries of our universe.
                </p>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-spring-800 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-spring-300">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-spring-200">
                <Link to={`/edit/${post.id}`} className="flex-1">
                  <Button className="w-full bg-spring-300 hover:bg-spring-400 text-spring-900">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Post
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                  onClick={handleDelete}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Post
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-32 right-10 text-pink-300 opacity-20 animate-float">
        <div className="text-5xl">🌸</div>
      </div>
      <div className="fixed bottom-32 left-10 text-pink-300 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-4xl">🌺</div>
      </div>
    </div>
  );
};

export default PostDetail;
