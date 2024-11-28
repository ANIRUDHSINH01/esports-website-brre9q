import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, Calendar, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Trophy, label: 'Tournaments', href: '/tournaments' },
    { icon: Users, label: 'Teams', href: '/teams' },
    { icon: Calendar, label: 'Schedule', href: '/schedule' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="w-8 h-8 text-cyan-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              EsportsHub
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}