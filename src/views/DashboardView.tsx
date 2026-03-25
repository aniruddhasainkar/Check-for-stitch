import React from 'react';
import { Calendar, AlertTriangle, CheckCircle2, Folder, MoreHorizontal } from 'lucide-react';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { Badge } from '../components/Badge';
import { MOCK_ACTIVITIES, MOCK_PROJECTS } from '../mockData';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const DashboardView = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8">
      {/* Welcome Header */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-on-surface mb-1">Morning, Alex</h2>
        <p className="text-on-surface-variant">Here is an overview of your workspace for today, October 24th.</p>
      </motion.section>

      {/* Summary Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 group hover:translate-y-[-2px] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calendar className="text-primary w-5 h-5" />
            </div>
            <Badge variant="primary">Active</Badge>
          </div>
          <p className="text-sm text-on-surface-variant mb-1">Tasks due today</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tighter text-on-surface">12</span>
            <span className="text-xs font-medium text-on-surface-variant/70">+2 from yesterday</span>
          </div>
        </Card>

        <Card className="p-6 group hover:translate-y-[-2px] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-error/10 rounded-lg">
              <AlertTriangle className="text-error w-5 h-5" />
            </div>
            <Badge variant="error">Critical</Badge>
          </div>
          <p className="text-sm text-on-surface-variant mb-1">Overdue tasks</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tighter text-on-surface">04</span>
            <span className="text-xs font-medium text-error opacity-80">Requires attention</span>
          </div>
        </Card>

        <Card className="p-6 group hover:translate-y-[-2px] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <CheckCircle2 className="text-secondary w-5 h-5" />
            </div>
            <Badge variant="tertiary">Progress</Badge>
          </div>
          <p className="text-sm text-on-surface-variant mb-1">Completed this week</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tighter text-on-surface">28</span>
            <div className="h-1.5 w-16 bg-surface-container-highest rounded-full overflow-hidden self-center ml-2">
              <div className="h-full bg-primary w-[75%]"></div>
            </div>
          </div>
        </Card>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-on-surface">Recent Activity</h3>
            <button className="text-xs font-semibold text-primary hover:underline underline-offset-4">View All</button>
          </div>
          <div className="space-y-4">
            {MOCK_ACTIVITIES.map((activity) => (
              <Card key={activity.id} className="flex gap-4 p-4">
                {activity.userAvatar ? (
                  <Avatar src={activity.userAvatar} name={activity.userName} size="md" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Folder className="text-secondary w-5 h-5" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-on-surface">
                    <span className="font-semibold">{activity.userName}</span> {activity.action}{' '}
                    <span className="text-primary font-medium">{activity.target}</span>
                    {activity.badge && (
                      <Badge variant="tertiary" className="ml-2">
                        {activity.badge}
                      </Badge>
                    )}
                  </p>
                  {activity.details && (
                    <div className="mt-2 p-3 bg-surface-container-low rounded-lg text-xs text-on-surface-variant italic">
                      {activity.details}
                    </div>
                  )}
                  <p className="text-xs text-on-surface-variant opacity-60 mt-1">{activity.timestamp}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Secondary Column / Projects Sidebar */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-on-surface">Top Projects</h3>
            <MoreHorizontal className="text-on-surface-variant opacity-50 w-5 h-5" />
          </div>
          <div className="bg-surface-container-low rounded-xl p-2 space-y-1">
            {MOCK_PROJECTS.slice(0, 3).map((project) => (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-highest transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-2 h-2 rounded-full',
                      project.status === 'Active' ? 'bg-primary' : project.status === 'On Hold' ? 'bg-tertiary' : 'bg-secondary'
                    )}
                  ></div>
                  <span className="text-sm font-medium text-on-surface">{project.name}</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.progress}%
                </span>
              </a>
            ))}
          </div>

          {/* Upgrade / Banner Card */}
          <div className="relative overflow-hidden bg-primary p-6 rounded-xl text-white">
            <div className="relative z-10">
              <h4 className="font-bold text-base mb-2">Architect Pro</h4>
              <p className="text-xs opacity-80 mb-4 leading-relaxed">
                Unlock unlimited team members and advanced analytics tools.
              </p>
              <button className="w-full py-2 bg-white text-primary font-bold text-[10px] uppercase tracking-widest rounded-md hover:bg-opacity-90 transition-all">
                Upgrade Now
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-dim rounded-full opacity-50"></div>
            <div className="absolute -right-8 -top-8 w-24 h-24 border-4 border-primary-dim rounded-full opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
