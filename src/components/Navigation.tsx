import React from 'react';
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'experiences' | 'projects' | 'awards' | 'hobbies' | 'blog' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'experiences' as const, label: 'Experiences' },
    { id: 'projects' as const, label: 'Projects' },
    { id: 'awards' as const, label: 'Awards' },
    { id: 'hobbies' as const, label: 'Hobbies' },
    { id: 'blog' as const, label: 'Blog' },
    { id: 'contact' as const, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="text-xl tracking-wide text-gray-900 hover:text-gray-600 transition-colors"
          >
            Faisal Alabdullateef
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.id === 'home' ? () => onNavigate('home') : undefined}
                disabled={item.id !== 'home'}
                title={item.id !== 'home' ? 'Under construction' : undefined}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  item.id !== 'home'
                    ? 'text-gray-400 cursor-not-allowed'
                    : currentPage === 'home'
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}