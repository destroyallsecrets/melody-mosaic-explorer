
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Music, Disc3, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Discover', path: '/discover' },
    { name: 'Albums', path: '/albums' },
    { name: 'Artists', path: '/artists' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10',
        isScrolled 
          ? 'py-3 glass shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-display font-bold text-2xl"
        >
          <Music className="h-6 w-6 text-primary" />
          <span className="animate-fade-in">Melody</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-all duration-200 hover:text-primary relative py-1',
                location.pathname === link.path 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary' 
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Search Button and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-accent transition-colors duration-200">
            <Search className="h-5 w-5" />
          </button>
          
          <button 
            className="md:hidden p-2 rounded-full hover:bg-accent transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 top-[57px] z-40 glass-subtle md:hidden transition-all duration-300 transform',
          isMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col space-y-6 p-8 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-medium transition-all duration-200 animate-slide-down',
                location.pathname === link.path 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              )}
              style={{ animationDelay: `${navLinks.indexOf(link) * 0.05}s` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
