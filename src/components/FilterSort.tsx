
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORIES, Category } from '@/types/blog';

interface FilterSortProps {
  selectedCategory: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export function FilterSort({ selectedCategory, sortBy, onCategoryChange, onSortChange }: FilterSortProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
      <div className="flex items-center gap-2">
        <span className="text-spring-800 font-medium">📁 Filter by Category:</span>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-48 bg-white/70 border-spring-300">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-white border-spring-300">
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category === 'Maths' && '🔢'} 
                {category === 'Physics' && '⚛️'} 
                {category === 'Universe' && '🌌'} 
                {category === 'Music' && '🎵'} 
                {category === 'Coding' && '💻'} 
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-spring-800 font-medium">🔄 Sort by:</span>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-48 bg-white/70 border-spring-300">
            <SelectValue placeholder="Newest First" />
          </SelectTrigger>
          <SelectContent className="bg-white border-spring-300">
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="title">Title A-Z</SelectItem>
            <SelectItem value="author">Author A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
