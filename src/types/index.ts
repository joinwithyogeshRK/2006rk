export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  category?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}
