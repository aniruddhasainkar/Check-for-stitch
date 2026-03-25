import React from 'react';
import { Plus, Filter, Search, MoreVertical, Calendar, Users } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { MOCK_PROJECTS } from '../mockData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const ProjectsView = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-on-surface mb-1">Projects</h2>
          <p className="text-on-surface-variant text-sm">Manage and track your ongoing architectural projects.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Project
          </Button>
        </div>
      </header>

      {/* Search and Tabs */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-b border-outline-variant/10 pb-4">
        <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto no-scrollbar">
          {['All Projects', 'Active', 'Completed', 'On Hold'].map((tab, i) => (
            <button
              key={tab}
              className={cn(
                'text-sm font-medium whitespace-nowrap pb-4 -mb-4 transition-all relative',
                i === 0 ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              )}
            >
              {tab}
              {i === 0 && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 opacity-50 group-focus-within:text-primary transition-colors" />
          <input
            className="w-full bg-surface-container-low border-none rounded-md py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-on-surface-variant/60 outline-none transition-all"
            placeholder="Search projects..."
            type="text"
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link to={`/projects/${project.id}`}>
              <Card className="p-6 group hover:translate-y-[-4px] transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <button className="p-1 text-on-surface-variant hover:bg-surface-container-highest rounded-md transition-all">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Oct 24 - Dec 12</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <Users className="w-3.5 h-3.5" />
                    <span>{project.members.length} Members</span>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-on-surface-variant uppercase tracking-wider">Progress</span>
                      <span className="text-primary">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                    <div className="flex -space-x-2">
                      {project.members.slice(0, 3).map((member) => (
                        <Avatar
                          key={member.id}
                          src={member.avatar}
                          name={member.name}
                          size="xs"
                          className="border-2 border-surface"
                        />
                      ))}
                      {project.members.length > 3 && (
                        <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                          +{project.members.length - 3}
                        </div>
                      )}
                    </div>
                    <Badge
                      variant={
                        project.status === 'Active' ? 'primary' : project.status === 'On Hold' ? 'secondary' : 'tertiary'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}

        {/* Add New Project Card */}
        <button className="h-full min-h-[280px] border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center gap-3 group hover:border-primary/50 hover:bg-primary/5 transition-all">
          <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">
            Create New Project
          </span>
        </button>
      </section>
    </div>
  );
};
