export type ProjectStatus = 'Active' | 'On Hold' | 'Completed';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  members: User[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export type TaskPriority = 'High' | 'Medium' | 'Low';
export type TaskStatus = 'To Do' | 'In Progress' | 'In Review' | 'Done';

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  assignee?: User;
  subtasks?: Subtask[];
  comments?: Comment[];
  tags?: string[];
  attachments?: Attachment[];
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
  assignee?: User;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
}

export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'dwg' | 'image';
  url: string;
}

export interface Activity {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  action: string;
  target: string;
  targetType: 'Project' | 'Task';
  timestamp: string;
  details?: string;
  badge?: string;
}
