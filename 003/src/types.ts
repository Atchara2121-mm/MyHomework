export interface Task {
  id: string;
  subject: string;
  topic: string;
  deadline: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'pending' | 'completed';
  description?: string;
}

export interface Subject {
  name: string;
  progress: number;
  completedTasks: number;
  totalTasks: number;
  lastActive: string;
  color: string;
  icon: string;
}

export type View = 'landing' | 'auth' | 'dashboard' | 'add-task';
