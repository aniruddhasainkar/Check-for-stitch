import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, MoreVertical, Calendar, Clock, MessageSquare, Paperclip, CheckSquare, Send, Plus, Trash2, Edit2, Share2 } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { MOCK_TASKS, MOCK_USERS } from '../mockData';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const TaskDetailView = () => {
  const { id } = useParams();
  const task = MOCK_TASKS.find((t) => t.id === id) || MOCK_TASKS[0];
  const [comment, setComment] = React.useState('');

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-surface">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation and Actions */}
        <header className="flex items-center justify-between">
          <Link to={`/projects/${task.projectId}`}>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 -ml-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Board
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-error hover:bg-error/5">
              <Trash2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Task Title and Meta */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant={task.priority === 'High' ? 'error' : 'primary'}>{task.priority} Priority</Badge>
            <Badge variant="tertiary">{task.status}</Badge>
            <span className="text-xs font-bold text-on-surface-variant opacity-50 uppercase tracking-widest">
              Task #{task.id.split('-')[1]}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-on-surface leading-tight">{task.title}</h1>
          <div className="flex flex-wrap items-center gap-6 pt-2 border-b border-outline-variant/10 pb-6">
            <div className="flex items-center gap-3">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Assignee</p>
              <div className="flex items-center gap-2">
                <Avatar src={task.assignee.avatar} name={task.assignee.name} size="sm" />
                <span className="text-sm font-semibold text-on-surface">{task.assignee.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Due Date</p>
              <div className="flex items-center gap-2 text-on-surface">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">
                  {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Time Spent</p>
              <div className="flex items-center gap-2 text-on-surface">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold">4h 20m</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description, Subtasks, Attachments */}
          <div className="lg:col-span-2 space-y-10">
            <section className="space-y-4">
              <h3 className="text-lg font-bold tracking-tight text-on-surface flex items-center gap-2">
                Description
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {task.description || 'No description provided for this task.'}
              </p>
            </section>

            {task.subtasks && task.subtasks.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold tracking-tight text-on-surface flex items-center gap-2">
                    Subtasks
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {task.subtasks.filter((s) => s.completed).length}/{task.subtasks.length}
                    </span>
                  </h3>
                  <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    Add Subtask
                  </Button>
                </div>
                <div className="space-y-2">
                  {task.subtasks.map((subtask) => (
                    <div
                      key={subtask.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors group"
                    >
                      <button
                        className={cn(
                          'w-5 h-5 rounded border-2 flex items-center justify-center transition-all',
                          subtask.completed
                            ? 'bg-primary border-primary text-white'
                            : 'border-outline-variant group-hover:border-primary/50'
                        )}
                      >
                        {subtask.completed && <CheckSquare className="w-3.5 h-3.5" />}
                      </button>
                      <span
                        className={cn(
                          'text-sm font-medium transition-all',
                          subtask.completed ? 'text-on-surface-variant line-through opacity-50' : 'text-on-surface'
                        )}
                      >
                        {subtask.title}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {task.attachments && task.attachments.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg font-bold tracking-tight text-on-surface flex items-center gap-2">
                  Attachments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {task.attachments.map((attachment) => (
                    <Card key={attachment.id} className="p-3 flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Paperclip className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-on-surface truncate">{attachment.name}</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">
                          {attachment.type} • {attachment.size}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Comments/Activity */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight text-on-surface flex items-center gap-2">
              Discussion
              <span className="text-xs font-bold text-on-surface-variant opacity-50">{task.comments.length}</span>
            </h3>

            <div className="space-y-6">
              {task.comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar src={comment.userAvatar} name={comment.userName} size="sm" className="shrink-0" />
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface">{comment.userName}</span>
                      <span className="text-[10px] text-on-surface-variant opacity-60">{comment.timestamp}</span>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded-xl rounded-tl-none text-sm text-on-surface leading-relaxed">
                      {comment.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-outline-variant/10 space-y-4">
              <div className="flex gap-3">
                <Avatar src={MOCK_USERS[0].avatar} name={MOCK_USERS[0].name} size="sm" className="shrink-0" />
                <div className="flex-1 space-y-3">
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-on-surface-variant/60 outline-none transition-all resize-none min-h-[100px]"
                    placeholder="Add a comment or architectural note..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      className="flex items-center gap-2"
                      disabled={!comment.trim()}
                      onClick={() => {
                        setComment('');
                      }}
                    >
                      <Send className="w-4 h-4" />
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
