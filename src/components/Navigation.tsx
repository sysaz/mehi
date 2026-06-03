import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: any) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'About Us', key: 'about' },
    { label: 'Products', key: 'products' },
    { label: 'Industries', key: 'industries' },
    { label: 'Our Clients', key: 'clients' },
    { label: 'Mission & Vision', key: 'mission' },
    { label: 'Quality', key: 'quality' },
  ];

  const handleNavClick = (key: string) => {
    setCurrentPage(key);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center space-x-3"
          >
            <img
              src="/mehi-logo-transparent.png"
              alt="MEHI Worldwide Trading"
              className="h-10 w-auto object-contain"
              width="120"
              height="40"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.key
                    ? 'bg-brand-navy-light text-brand-navy'
                    : 'text-brand-gray hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* WhatsApp & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919830261334"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <MessageCircle size={18} />
              <span className="text-sm">WhatsApp</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === item.key
                    ? 'bg-brand-navy-light text-brand-navy'
                    : 'text-brand-gray hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/919830261334"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium w-full justify-center"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
