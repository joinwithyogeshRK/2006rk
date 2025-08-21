import { NavLink } from 'react-router-dom';
import { Home, Layers, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  return (
    <nav className="nav-sidebar fixed left-0 top-0 z-10 border-r border-border">
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-bold text-primary">Todo App</h1>
      </div>
      
      <div className="flex flex-col p-2 space-y-1">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'nav-item-active' : ''}`
          }
        >
          <Home className="mr-2 h-5 w-5" />
          Home
        </NavLink>
        
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'nav-item-active' : ''}`
          }
        >
          <Home className="mr-2 h-5 w-5" />
          Dashboard
        </NavLink>
        
        <NavLink 
          to="/categories" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'nav-item-active' : ''}`
          }
        >
          <Layers className="mr-2 h-5 w-5" />
          Categories
        </NavLink>
        
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'nav-item-active' : ''}`
          }
        >
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </NavLink>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Sidebar;
