import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/3f263a8c-aeab-464c-ae7d-3dd693ba73af/1782371625870_logo.JPG" alt="EDVAN AGENCY Logo" className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl tracking-tight text-foreground">
              EDVAN <span className="text-blue-600">AGENCY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.href ? "text-blue-600" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote">
              <Button size="sm" className="gap-2">
                Get a Quote <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border/40 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium p-2 rounded-md transition-colors",
                  location.pathname === link.href ? "bg-blue-50 text-blue-600" : "text-muted-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setIsOpen(false)}>
              <Button className="w-full gap-2">
                Get a Quote <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
