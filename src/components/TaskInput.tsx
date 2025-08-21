import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="task-input flex-1"
      />
      <Button type="submit" className="btn-primary">
        <Plus className="h-5 w-5 mr-1" />
        Add
      </Button>
    </form>
  );
};

export default TaskInput;
