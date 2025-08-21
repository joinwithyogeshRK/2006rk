import { NavLink } from 'react-router-dom';
import { Home, Layers, Settings } from 'lucide-react';

const MobileNav = () => {
  return (
    <nav className="nav-bottom-bar z-10">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-primary' : 'text-foreground'}`
        }
      >
        <Home className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </NavLink>
      
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-primary' : 'text-foreground'}`
        }
      >
        <Home className="h-5 w-5" />
        <span className="text-xs">Dashboard</span>
      </NavLink>
      
      <NavLink 
        to="/categories" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-primary' : 'text-foreground'}`
        }
      >
        <Layers className="h-5 w-5" />
        <span className="text-xs">Categories</span>
      </NavLink>
      
      <NavLink 
        to="/settings" 
        className={({ isActive }) => 
          `flex flex-col items-center p-2 ${isActive ? 'text-primary' : 'text-foreground'}`
        }
      >
        <Settings className="h-5 w-5" />
        <span className="text-xs">Settings</span>
      </NavLink>
    </nav>
  );
};

export default MobileNav;
