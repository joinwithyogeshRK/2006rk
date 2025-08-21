import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const This = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <img 
              src="/assets/icons/favicon-1755005281753.ico" 
              alt="Logo" 
              className="h-8 w-8 object-contain"
              width={32}
              height={32}
            />
            <span className="hidden font-semibold text-lg md:inline-block">TaskMaster</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/dashboard" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
          >
            Dashboard
          </Link>
          <Link 
            to="/tasks" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
          >
            Tasks
          </Link>
          <Link 
            to="/categories" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
          >
            Categories
          </Link>
          <Link 
            to="/analytics" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
          >
            Analytics
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            className="hidden md:flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 active:scale-95 dark:focus:ring-primary-600"
          >
            New Task
          </button>
          
          <button 
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 active:scale-95 md:hidden dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default This;