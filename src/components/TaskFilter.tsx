import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TaskFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  categories: string[];
}

const TaskFilter = ({
  filter,
  setFilter,
  categoryFilter,
  setCategoryFilter,
  categories,
}: TaskFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm font-medium">Filter:</span>
      </div>
      
      <div className="flex flex-1 flex-col sm:flex-row gap-2">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter tasks" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tasks</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFilter('all');
              setCategoryFilter('all');
            }}
            className="ml-auto"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
