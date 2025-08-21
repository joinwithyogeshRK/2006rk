import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TaskInput from '@/components/TaskInput';
import TaskCard from '@/components/TaskCard';
import TaskFilter from '@/components/TaskFilter';
import TaskForm from '@/components/TaskForm';
import EmptyState from '@/components/EmptyState';
import Update from '@/components/Update';
import { Task, Category } from '@/types';
import { v4 as uuidv4 } from '@/utils/uuid';

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [categories, setCategories] = useState<Category[]>(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [
      { id: '1', name: 'Work', color: '#4A6FA5' },
      { id: '2', name: 'Personal', color: '#47B881' },
      { id: '3', name: 'Shopping', color: '#E74C3C' }
    ];
  });
  
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);
  
  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      priority: 'medium'
    };
    
    setTasks([newTask, ...tasks]);
  };
  
  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const handleEditTask = (id: string, newTitle: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };
  
  const handleSaveTask = (taskData: Omit<Task, 'id' | 'completed'> & { id?: string }) => {
    if (taskData.id) {
      // Edit existing task
      setTasks(tasks.map(task => 
        task.id === taskData.id ? { ...task, ...taskData } : task
      ));
    } else {
      // Add new task
      const newTask: Task = {
        id: uuidv4(),
        title: taskData.title,
        description: taskData.description,
        dueDate: taskData.dueDate,
        priority: taskData.priority,
        category: taskData.category,
        completed: false,
        createdAt: new Date().toISOString()
      };
      
      setTasks([newTask, ...tasks]);
    }
  };
  
  const openTaskForm = (task: Task | null = null) => {
    setEditingTask(task);
    setIsTaskFormOpen(true);
  };
  
  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    })
    .filter(task => {
      if (categoryFilter === 'all') return true;
      return task.category === categoryFilter;
    });
  
  const categoryNames = categories.map(cat => cat.name);
  
  return (
    <div className="py-6">
      {/* Update component at the top of the page */}
      <Update />
      
      <div className="flex items-center justify-between mb-6 mt-8">
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <Button onClick={() => openTaskForm()} className="btn-primary">
          <Plus className="h-5 w-5 mr-1" />
          New Task
        </Button>
      </div>
      
      <div className="mb-6">
        <TaskInput onAddTask={handleAddTask} />
      </div>
      
      <TaskFilter
        filter={filter}
        setFilter={setFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categoryNames}
      />
      
      <div className="mt-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          ))
        ) : (
          <EmptyState
            title="No tasks found"
            description={filter !== 'all' || categoryFilter !== 'all' ? 
              "Try changing your filters to see more tasks." : 
              "Add your first task to get started!"}
            actionLabel={filter === 'all' && categoryFilter === 'all' ? "Add Task" : "Reset Filters"}
            onAction={filter === 'all' && categoryFilter === 'all' ? 
              () => openTaskForm() : 
              () => {
                setFilter('all');
                setCategoryFilter('all');
              }}
          />
        )}
      </div>
      
      <TaskForm
        task={editingTask}
        open={isTaskFormOpen}
        onOpenChange={setIsTaskFormOpen}
        onSave={handleSaveTask}
        categories={categories}
      />
    </div>
  );
};

export default Home;