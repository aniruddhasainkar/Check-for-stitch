import React from 'react';
import { User, Bell, Shield, Palette, Globe, HelpCircle, LogOut, Camera, Check, Settings } from 'lucide-react';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { MOCK_USERS } from '../mockData';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const SettingsView = () => {
  const currentUser = MOCK_USERS[0];
  const [activeTab, setActiveTab] = React.useState('Profile');

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Notifications', icon: Bell },
    { name: 'Security', icon: Shield },
    { name: 'Appearance', icon: Palette },
    { name: 'Integrations', icon: Globe },
    { name: 'Help', icon: HelpCircle },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-surface">
      <div className="max-w-6xl mx-auto space-y-8">
        <header>
          <h2 className="text-2xl font-semibold tracking-tight text-on-surface mb-1">Settings</h2>
          <p className="text-on-surface-variant text-sm">Manage your account and workspace preferences.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Tabs */}
          <aside className="lg:col-span-1 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={cn(
                  'w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all group',
                  activeTab === tab.name
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                )}
              >
                <div className="flex items-center gap-3">
                  <tab.icon className={cn('w-5 h-5', activeTab === tab.name ? 'text-primary' : 'text-on-surface-variant/60 group-hover:text-on-surface')} />
                  {tab.name}
                </div>
                {activeTab === tab.name && (
                  <motion.div layoutId="activeTabIndicator" className="w-1 h-4 bg-primary rounded-full" />
                )}
              </button>
            ))}
            <div className="pt-6 mt-6 border-t border-outline-variant/10">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-error hover:bg-error/5 transition-all">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </aside>

          {/* Settings Content */}
          <main className="lg:col-span-3 space-y-10">
            {activeTab === 'Profile' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-10"
              >
                {/* Profile Header */}
                <section className="flex flex-col sm:flex-row items-center gap-8 pb-10 border-b border-outline-variant/10">
                  <div className="relative group">
                    <Avatar src={currentUser.avatar} name={currentUser.name} size="lg" className="ring-4 ring-primary/10" />
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-xl font-bold text-on-surface">{currentUser.name}</h3>
                    <p className="text-sm text-on-surface-variant">{currentUser.role} • {currentUser.email}</p>
                    <div className="pt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                      <Badge variant="primary">Admin</Badge>
                      <Badge variant="tertiary">Pro Architect</Badge>
                    </div>
                  </div>
                </section>

                {/* Profile Form */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">Personal Information</h4>
                    <div className="space-y-4">
                      <Input label="Full Name" defaultValue={currentUser.name} />
                      <Input label="Email Address" defaultValue={currentUser.email} type="email" />
                      <Input label="Phone Number" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">Workspace Details</h4>
                    <div className="space-y-4">
                      <Input label="Job Title" defaultValue={currentUser.role} />
                      <Input label="Department" defaultValue="Design & Engineering" />
                      <Input label="Location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                </section>

                {/* Bio */}
                <section className="space-y-4">
                  <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">Bio</h4>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-on-surface-variant/60 outline-none transition-all resize-none min-h-[120px]"
                    placeholder="Tell us about your architectural background..."
                    defaultValue="Digital architect focused on creating seamless user experiences through structured project management and collaborative design systems."
                  />
                </section>

                {/* Actions */}
                <footer className="flex items-center justify-end gap-3 pt-6 border-t border-outline-variant/10">
                  <Button variant="ghost">Cancel</Button>
                  <Button className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Save Changes
                  </Button>
                </footer>
              </motion.div>
            )}

            {activeTab !== 'Profile' && (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 opacity-60">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Settings className="w-8 h-8 text-on-surface-variant" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-on-surface">{activeTab} Settings</h3>
                  <p className="text-sm text-on-surface-variant max-w-xs">
                    This section is currently under construction. Please check back later for more architectural controls.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
