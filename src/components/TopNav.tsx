import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';
import { Button } from './Button';

export const TopNav = () => {
  return (
    <header className="flex items-center justify-between w-full px-8 h-16 sticky top-0 z-40 bg-[#faf8ff]/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 opacity-50 group-focus-within:text-primary transition-colors" />
          <input
            className="w-full bg-surface-container-low border-none rounded-md py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-on-surface-variant/60 outline-none transition-all"
            placeholder="Search projects or architectural files..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-6">
        <div className="flex items-center gap-1">
          <button className="p-2 text-[#113069] dark:text-slate-400 hover:bg-primary/5 rounded-md transition-all">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-[#113069] dark:text-slate-400 hover:bg-primary/5 rounded-md transition-all">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        <Button className="hidden lg:block text-xs" size="sm">
          Create Task
        </Button>
      </div>
    </header>
  );
};
