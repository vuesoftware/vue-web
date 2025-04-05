
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Over Ons', href: '/about' },
    { text: 'Calculator Demo', href: '/demo' },
  ];

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-vue-700">Vue</span>
            <span className="font-medium text-xl text-gray-700">Software</span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleNav} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href}
              className={`text-base font-medium transition-colors hover:text-vue-600 ${
                location.pathname === link.href ? 'text-vue-700' : 'text-muted-foreground'
              }`}
            >
              {link.text}
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="px-4">
            <a href="mailto:info@vuebyte.com">Neem contact op met ons</a>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 z-50 bg-white border-b shadow-lg">
            <div className="container-custom py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href}
                  className={`py-3 text-base font-medium ${
                    location.pathname === link.href ? 'text-vue-700' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Button asChild variant="default" size="sm" className="mt-4">
                <a href="mailto:info@vuebyte.com">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
