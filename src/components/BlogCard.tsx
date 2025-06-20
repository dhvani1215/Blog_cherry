
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Edit, Trash2, Eye } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
  onDelete: (id: string) => void;
}

export function BlogCard({ post, onDelete }: BlogCardProps) {
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
      case 'Maths': return 'bg-spring-600';
      case 'Physics': return 'bg-spring-700';
      case 'Universe': return 'bg-spring-800';
      case 'Music': return 'bg-spring-500';
      case 'Coding': return 'bg-spring-400';
      default: return 'bg-spring-900';
    }
  };

  return (
    <div className="glass-effect rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bloom">
      {post.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge className={`${getCategoryColor(post.category)} text-white`}>
            {getCategoryIcon(post.category)} {post.category}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-spring-900 mb-3 line-clamp-2 hover:spring-text-gradient transition-colors">
          <Link to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-spring-700 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-spring-600 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-spring-300">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Link to={`/post/${post.id}`} className="flex-1">
            <Button className="w-full bg-spring-500 hover:bg-spring-600 text-white border-0">
              <Eye className="w-4 h-4 mr-2" />
              Read More
            </Button>
          </Link>
          <Link to={`/edit/${post.id}`}>
            <Button className="bg-spring-600 hover:bg-spring-700 text-white border-0">
              <Edit className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            className="bg-spring-900 hover:bg-spring-800 text-white border-0"
            onClick={() => onDelete(post.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
