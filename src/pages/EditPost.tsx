
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES } from '@/types/blog';
import { initialBlogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';
import { ArrowLeft, Save, Image, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    author: '',
    image: '',
    tags: ''
  });
  const [tagList, setTagList] = useState<string[]>([]);

  useEffect(() => {
    const foundPost = initialBlogPosts.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
      setFormData({
        title: foundPost.title,
        content: foundPost.content,
        excerpt: foundPost.excerpt,
        category: foundPost.category,
        author: foundPost.author,
        image: foundPost.image || '',
        tags: ''
      });
      setTagList(foundPost.tags);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.category || !formData.author) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Post Updated! 🌸",
      description: "Your blog post has been successfully updated.",
    });
    navigate(`/post/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddTag = () => {
    if (formData.tags.trim() && !tagList.includes(formData.tags.trim())) {
      setTagList(prev => [...prev, formData.tags.trim()]);
      setFormData(prev => ({ ...prev, tags: '' }));
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTagList(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
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

  if (!post) {
    return (
      <div className="min-h-screen bg-spring-gradient">
        <Header onSearch={() => {}} searchQuery="" />
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="text-6xl mb-4">😿</div>
          <h1 className="text-2xl font-bold text-spring-800 mb-4">Post not found</h1>
          <Button onClick={() => navigate('/')} className="bg-cherry-gradient hover:opacity-90 text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spring-gradient">
      <Header onSearch={() => {}} searchQuery="" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button
                variant="outline"
                onClick={() => navigate(`/post/${id}`)}
                className="border-spring-300 hover:bg-spring-100 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Post
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold spring-text-gradient">
                Edit Post 🌸
              </h1>
              <p className="text-spring-700 mt-2">Update your blog post</p>
            </div>
          </div>

          {/* Form */}
          <Card className="glass-effect p-8 shadow-xl animate-bloom">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-spring-800 font-medium mb-2">
                  Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-white/70 border-spring-300 focus:border-spring-pink text-lg"
                  placeholder="Enter an engaging title for your post..."
                />
              </div>

              {/* Category and Author */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-spring-800 font-medium mb-2">
                    Category *
                  </label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger className="bg-white/70 border-spring-300">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-spring-300">
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {getCategoryIcon(category)} {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="author" className="block text-spring-800 font-medium mb-2">
                    Author *
                  </label>
                  <Input
                    id="author"
                    name="author"
                    type="text"
                    required
                    value={formData.author}
                    onChange={handleChange}
                    className="bg-white/70 border-spring-300 focus:border-spring-pink"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-spring-800 font-medium mb-2">
                  Featured Image
                </label>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="flex items-center gap-2 px-4 py-2 bg-spring-200 hover:bg-spring-300 rounded-lg transition-colors">
                      <Image className="w-4 h-4" />
                      <span>Choose Image</span>
                    </div>
                  </label>
                  <span className="text-sm text-spring-600">
                    Or paste image URL:
                  </span>
                  <Input
                    name="image"
                    type="url"
                    value={formData.image}
                    onChange={handleChange}
                    className="flex-1 bg-white/70 border-spring-300 focus:border-spring-pink"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                {formData.image && (
                  <div className="mt-4">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="max-w-full h-48 object-cover rounded-lg border border-spring-300"
                    />
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-spring-800 font-medium mb-2">
                  Excerpt
                </label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="bg-white/70 border-spring-300 focus:border-spring-pink resize-none"
                  placeholder="A brief description of your post..."
                />
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-spring-800 font-medium mb-2">
                  Content *
                </label>
                <Textarea
                  id="content"
                  name="content"
                  required
                  value={formData.content}
                  onChange={handleChange}
                  rows={12}
                  className="bg-white/70 border-spring-300 focus:border-spring-pink resize-none"
                  placeholder="Write your blog post content here..."
                />
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-spring-800 font-medium mb-2">
                  Tags
                </label>
                <div className="flex gap-2 mb-3">
                  <Input
                    id="tags"
                    name="tags"
                    type="text"
                    value={formData.tags}
                    onChange={handleChange}
                    className="flex-1 bg-white/70 border-spring-300 focus:border-spring-pink"
                    placeholder="Add a tag..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  />
                  <Button type="button" onClick={handleAddTag} variant="outline">
                    Add Tag
                  </Button>
                </div>
                {tagList.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tagList.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-spring-300">
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-cherry-gradient hover:opacity-90 text-white shadow-lg text-lg py-3"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Update Post 🌸
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-40 right-12 text-pink-300 opacity-20 animate-float">
        <div className="text-4xl">🌸</div>
      </div>
      <div className="fixed bottom-40 left-12 text-pink-300 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-5xl">🌺</div>
      </div>
    </div>
  );
};

export default EditPost;
