'use client';

import { Menu, Share2, Dumbbell, User } from 'lucide-react';

interface NavigationProps {
  currentNav: string;
  setCurrentNav: (nav: string) => void;
}

export default function Navigation({
  currentNav,
  setCurrentNav,
}: NavigationProps) {
  const navItems = [
    { id: 'menu', icon: Menu, label: 'Menu' },
    { id: 'share', icon: Share2, label: 'Compartilhar' },
    { id: 'workouts', icon: Dumbbell, label: 'Meus Treinos' },
    { id: 'profile', icon: User, label: 'Perfil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800">
      <div className="max-w-2xl mx-auto px-4 py-3 flex justify-around items-center">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setCurrentNav(id)}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
              currentNav === id
                ? 'bg-amber-400 text-slate-950'
                : 'text-slate-400 hover:text-white'
            }`}
            title={label}
          >
            <Icon className="w-6 h-6" />
            {id === 'menu' && (
              <span className="text-xs hidden sm:inline">Menu</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
