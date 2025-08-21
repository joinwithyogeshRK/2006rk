import { useState } from 'react';
import { Check, Edit, Trash, Clock } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Task } from '@/types';

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TaskCard = ({ task, onToggleComplete, onDelete, onEdit }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && editedTitle.trim()) {
      onEdit(task.id, editedTitle);
    }
    setIsEditing(!isEditing);
  };

  const getPriorityBadge = () => {
    switch (task.priority) {
      case 'high':
        return <Badge variant="destructive" className="priority-high">High</Badge>;
      case 'medium':
        return <Badge variant="default" className="priority-medium">Medium</Badge>;
      case 'low':
        return <Badge variant="outline" className="priority-low">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className={`task-card group ${task.completed ? 'opacity-70' : ''}`}>
      <div className="flex items-start gap-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggleComplete(task.id)}
          className={`task-checkbox mt-1 ${task.completed ? 'task-complete-animation' : ''}`}
        />
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-1 border rounded-md"
              autoFocus
            />
          ) : (
            <h3 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
              {task.title}
            </h3>
          )}
          
          {task.description && (
            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
          )}
          
          <div className="flex flex-wrap gap-2 mt-2">
            {task.category && (
              <Badge variant="outline" className="badge-primary">
                {task.category}
              </Badge>
            )}
            
            {getPriorityBadge()}
            
            {task.dueDate && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {new Date(task.dueDate).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex gap-1">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleEdit}
            className="h-8 w-8"
          >
            {isEditing ? <Check className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onDelete(task.id)}
            className="h-8 w-8 text-accent hover:text-accent-foreground hover:bg-accent/20"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
