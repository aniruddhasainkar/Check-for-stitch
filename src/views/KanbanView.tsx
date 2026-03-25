import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip, ChevronLeft, Search, Filter, Settings } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { MOCK_PROJECTS, MOCK_TASKS } from '../mockData';
import { motion } from 'motion/react';

export const KanbanView = () => {
  const { id } = useParams();
  const project = MOCK_PROJECTS.find((p) => p.id === id) || MOCK_PROJECTS[0];
  const tasks = MOCK_TASKS.filter((t) => t.projectId === project.id);

  const columns = [
    { id: 'todo', name: 'To Do', status: 'To Do' },
    { id: 'in-progress', name: 'In Progress', status: 'In Progress' },
    { id: 'review', name: 'Review', status: 'Review' },
    { id: 'done', name: 'Done', status: 'Done' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8f9ff] dark:bg-slate-950">
      {/* Kanban Header */}
      <header className="px-8 py-6 bg-white dark:bg-slate-900 border-b border-outline-variant/10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/projects">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight text-on-surface">{project.name}</h2>
              <Badge variant={project.status === 'Active' ? 'primary' : 'secondary'}>{project.status}</Badge>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center -space-x-2">
            {project.members.map((member) => (
              <Avatar
                key={member.id}
                src={member.avatar}
                name={member.name}
                size="sm"
                className="border-2 border-white dark:border-slate-900"
              />
            ))}
            <button className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-all">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 opacity-50 group-focus-within:text-primary transition-colors" />
              <input
                className="bg-surface-container-low border-none rounded-md py-2 pl-10 pr-4 text-xs focus:ring-1 focus:ring-primary/20 placeholder:text-on-surface-variant/60 outline-none transition-all w-48 lg:w-64"
                placeholder="Search tasks..."
                type="text"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Board
            </Button>
          </div>
        </div>
      </header>

      {/* Kanban Board */}
      <main className="flex-1 overflow-x-auto p-8 flex gap-6 no-scrollbar">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col w-80 shrink-0 gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">{column.name}</h3>
                <span className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                  {tasks.filter((t) => t.status === column.status).length}
                </span>
              </div>
              <button className="p-1 text-on-surface-variant hover:bg-surface-container-highest rounded-md transition-all">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 space-y-4 min-h-[200px]">
              {tasks
                .filter((t) => t.status === column.status)
                .map((task, index) => (
                  <motion.div
                    key={task.id}
                    layoutId={task.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={`/tasks/${task.id}`}>
                      <Card className="p-4 group hover:ring-1 hover:ring-primary/30 transition-all cursor-grab active:cursor-grabbing">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-start justify-between">
                            <Badge
                              variant={
                                task.priority === 'High' ? 'error' : task.priority === 'Medium' ? 'primary' : 'tertiary'
                              }
                              className="text-[10px] px-1.5 py-0.5"
                            >
                              {task.priority}
                            </Badge>
                            <span className="text-[10px] font-bold text-on-surface-variant opacity-60">
                              #{task.id.split('-')[1]}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                            {task.title}
                          </h4>

                          {task.tags && task.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {task.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-surface-container-highest text-on-surface-variant rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-3 border-t border-outline-variant/10">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant opacity-70">
                                <MessageSquare className="w-3 h-3" />
                                <span>{task.comments.length}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant opacity-70">
                                <Paperclip className="w-3 h-3" />
                                <span>{task.attachments.length}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {task.dueDate && (
                                <div className="flex items-center gap-1 text-[10px] font-bold text-on-surface-variant opacity-70">
                                  <Calendar className="w-3 h-3" />
                                  <span>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                </div>
                              )}
                              <Avatar src={task.assignee.avatar} name={task.assignee.name} size="xs" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}

              <button className="w-full py-3 border border-dashed border-outline-variant/30 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-on-surface-variant hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all group">
                <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Add Task
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
