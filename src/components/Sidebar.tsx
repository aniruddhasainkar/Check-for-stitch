import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Grid, Users, Settings, Plus, Layers } from 'lucide-react';
import { cn } from '../lib/utils';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { MOCK_USERS } from '../mockData';

export const Sidebar = () => {
  const currentUser = MOCK_USERS[0];

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'My Tasks', icon: CheckSquare, path: '/tasks' },
    { name: 'Projects', icon: Grid, path: '/projects' },
    { name: 'Team', icon: Users, path: '/team' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 p-4 bg-[#f2f3ff] dark:bg-slate-900 border-r border-outline-variant/10 shrink-0">
      <div className="mb-10 px-2 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
          <Layers className="text-white w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tighter text-[#113069] dark:text-slate-100">TeamTask</h1>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Digital Architect</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                isActive
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-[#113069] dark:text-slate-400 hover:text-primary hover:bg-primary/5'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4 bg-surface-container-highest/30 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Avatar src={currentUser.avatar} name={currentUser.name} size="sm" />
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate">{currentUser.name}</p>
            <p className="text-[10px] text-on-surface-variant truncate">{currentUser.role}</p>
          </div>
        </div>
        <Button className="w-full text-xs py-2" size="sm">
          Create Task
        </Button>
      </div>
    </aside>
  );
};
