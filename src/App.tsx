import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Settings from './pages/Settings';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="todo-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="categories" element={<Categories />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
