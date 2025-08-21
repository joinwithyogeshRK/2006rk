import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CategoryFormProps {
  onAddCategory: (name: string, color: string) => void;
}

const CategoryForm = ({ onAddCategory }: CategoryFormProps) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryColor, setCategoryColor] = useState('#4A6FA5');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAddCategory(categoryName, categoryColor);
      setCategoryName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="text"
        placeholder="New category name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        className="flex-1"
      />
      <Input
        type="color"
        value={categoryColor}
        onChange={(e) => setCategoryColor(e.target.value)}
        className="w-full sm:w-20 h-10"
      />
      <Button type="submit" className="btn-primary">
        <Plus className="h-5 w-5 mr-1" />
        Add
      </Button>
    </form>
  );
};

export default CategoryForm;
