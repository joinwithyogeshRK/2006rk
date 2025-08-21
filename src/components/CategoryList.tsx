import { Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Category } from '@/types';

interface CategoryListProps {
  categories: Category[];
  onDeleteCategory: (id: string) => void;
  onEditCategory: (category: Category) => void;
}

const CategoryList = ({ categories, onDeleteCategory, onEditCategory }: CategoryListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {categories.map((category) => (
        <div key={category.id} className="neumorphic-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: category.color }}
              />
              <h3 className="font-medium">{category.name}</h3>
            </div>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onEditCategory(category)}
                className="h-8 w-8"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onDeleteCategory(category.id)}
                className="h-8 w-8 text-accent hover:text-accent-foreground hover:bg-accent/20"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
