import { useState, useEffect } from 'react';
import CategoryForm from '@/components/CategoryForm';
import CategoryList from '@/components/CategoryList';
import EditCategoryDialog from '@/components/EditCategoryDialog';
import EmptyState from '@/components/EmptyState';
import { Category } from '@/types';
import { v4 as uuidv4 } from '@/utils/uuid';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [
      { id: '1', name: 'Work', color: '#4A6FA5' },
      { id: '2', name: 'Personal', color: '#47B881' },
      { id: '3', name: 'Shopping', color: '#E74C3C' }
    ];
  });
  
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);
  
  const handleAddCategory = (name: string, color: string) => {
    const newCategory: Category = {
      id: uuidv4(),
      name,
      color
    };
    
    setCategories([...categories, newCategory]);
  };
  
  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
  };
  
  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setIsEditDialogOpen(true);
  };
  
  const handleSaveCategory = (id: string, name: string, color: string) => {
    setCategories(categories.map(category => 
      category.id === id ? { ...category, name, color } : category
    ));
  };
  
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      
      <div className="mb-6">
        <CategoryForm onAddCategory={handleAddCategory} />
      </div>
      
      {categories.length > 0 ? (
        <CategoryList
          categories={categories}
          onDeleteCategory={handleDeleteCategory}
          onEditCategory={handleEditCategory}
        />
      ) : (
        <EmptyState
          title="No categories yet"
          description="Create categories to organize your tasks better."
          actionLabel="Add Category"
          onAction={() => document.querySelector('input')?.focus()}
        />
      )}
      
      <EditCategoryDialog
        category={editingCategory}
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onSave={handleSaveCategory}
      />
    </div>
  );
};

export default Categories;
