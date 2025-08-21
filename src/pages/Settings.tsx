import { useState, useEffect } from 'react';
import { Save, Trash2, Moon, Sun, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/components/ThemeProvider';

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [showCompletedTasks, setShowCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('showCompletedTasks');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [autoArchiveCompleted, setAutoArchiveCompleted] = useState(() => {
    const saved = localStorage.getItem('autoArchiveCompleted');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [defaultPriority, setDefaultPriority] = useState(() => {
    const saved = localStorage.getItem('defaultPriority');
    return saved || 'medium';
  });
  
  useEffect(() => {
    localStorage.setItem('showCompletedTasks', JSON.stringify(showCompletedTasks));
  }, [showCompletedTasks]);
  
  useEffect(() => {
    localStorage.setItem('autoArchiveCompleted', JSON.stringify(autoArchiveCompleted));
  }, [autoArchiveCompleted]);
  
  useEffect(() => {
    localStorage.setItem('defaultPriority', defaultPriority);
  }, [defaultPriority]);
  
  const handleClearAllData = () => {
    if (window.confirm("Are you sure you want to clear all data? This action cannot be undone.")) {
      localStorage.removeItem('tasks');
      localStorage.removeItem('categories');
      window.location.reload();
    }
  };
  
  const handleResetSettings = () => {
    setShowCompletedTasks(true);
    setAutoArchiveCompleted(false);
    setDefaultPriority('medium');
  };
  
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how the app looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Theme</h3>
                <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={theme === 'light' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme('light')}
                  className="flex items-center"
                >
                  <Sun className="h-4 w-4 mr-1" />
                  Light
                </Button>
                <Button
                  variant={theme === 'dark' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme('dark')}
                  className="flex items-center"
                >
                  <Moon className="h-4 w-4 mr-1" />
                  Dark
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Task Settings</CardTitle>
            <CardDescription>Configure how tasks are displayed and managed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Show Completed Tasks</h3>
                <p className="text-sm text-muted-foreground">Display completed tasks in the task list</p>
              </div>
              <Switch
                checked={showCompletedTasks}
                onCheckedChange={setShowCompletedTasks}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Auto-archive Completed Tasks</h3>
                <p className="text-sm text-muted-foreground">Automatically archive tasks when completed</p>
              </div>
              <Switch
                checked={autoArchiveCompleted}
                onCheckedChange={setAutoArchiveCompleted}
              />
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-2">Default Priority</h3>
              <p className="text-sm text-muted-foreground mb-3">Set the default priority for new tasks</p>
              <div className="flex space-x-2">
                <Button
                  variant={defaultPriority === 'low' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDefaultPriority('low')}
                >
                  Low
                </Button>
                <Button
                  variant={defaultPriority === 'medium' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDefaultPriority('medium')}
                >
                  Medium
                </Button>
                <Button
                  variant={defaultPriority === 'high' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDefaultPriority('high')}
                >
                  High
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
            <CardDescription>Manage your app data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Reset Settings</h3>
                <p className="text-sm text-muted-foreground">Reset all settings to default values</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetSettings}
                className="flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Clear All Data</h3>
                <p className="text-sm text-muted-foreground">Delete all tasks and categories</p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleClearAllData}
                className="flex items-center"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => alert("Settings saved")}>
              <Save className="h-4 w-4 mr-1" />
              Save Settings
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
