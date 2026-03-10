/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { AddTaskPage } from './components/AddTaskPage';
import { View, Task, Subject } from './types';

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    subject: 'Mathematics',
    topic: 'Calculus Quiz Prep',
    deadline: 'Today, 5:00 PM',
    priority: 'High',
    status: 'pending',
    description: 'Review derivative rules and complete practice problems from Chapter 4.2 to 4.5.'
  },
  {
    id: '2',
    subject: 'History',
    topic: 'Civil War Essay',
    deadline: 'Tomorrow, 9:00 AM',
    priority: 'Medium',
    status: 'pending',
    description: 'Finalize the bibliography and proofread the second draft of the Lincoln analysis.'
  },
  {
    id: '3',
    subject: 'Physics',
    topic: 'Physics Lab Report',
    deadline: 'in 4 hours',
    priority: 'High',
    status: 'pending',
    description: "Calculate velocity vectors and graph the results from Tuesday's pendulum experiment."
  }
];

const INITIAL_SUBJECTS: Subject[] = [
  {
    name: 'Mathematics',
    progress: 75,
    completedTasks: 3,
    totalTasks: 4,
    lastActive: '2h ago',
    color: '#5048e5',
    icon: 'biotech'
  },
  {
    name: 'History',
    progress: 40,
    completedTasks: 2,
    totalTasks: 5,
    lastActive: '1d ago',
    color: '#f59e0b',
    icon: 'history'
  },
  {
    name: 'Physics',
    progress: 90,
    completedTasks: 9,
    totalTasks: 10,
    lastActive: '3h ago',
    color: '#ef4444',
    icon: 'science'
  },
  {
    name: 'Biology',
    progress: 85,
    completedTasks: 8,
    totalTasks: 10,
    lastActive: '2h ago',
    color: '#6366f1',
    icon: 'biotech'
  },
  {
    name: 'Spanish',
    progress: 30,
    completedTasks: 3,
    totalTasks: 12,
    lastActive: '1d ago',
    color: '#10b981',
    icon: 'translate'
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [subjects] = useState<Subject[]>(INITIAL_SUBJECTS);

  const handleAddTask = (newTask: Omit<Task, 'id' | 'status'>) => {
    const task: Task = {
      ...newTask,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending'
    };
    setTasks([task, ...tasks]);
    setTimeout(() => setCurrentView('dashboard'), 1500);
  };

  switch (currentView) {
    case 'landing':
      return (
        <LandingPage 
          onGetStarted={() => setCurrentView('auth')} 
          onLogin={() => setCurrentView('auth')} 
        />
      );
    case 'auth':
      return <AuthPage onAuthSuccess={() => setCurrentView('dashboard')} />;
    case 'dashboard':
      return (
        <Dashboard 
          tasks={tasks} 
          subjects={subjects} 
          onAddTask={() => setCurrentView('add-task')} 
        />
      );
    case 'add-task':
      return (
        <AddTaskPage 
          onSave={handleAddTask} 
          onCancel={() => setCurrentView('dashboard')} 
        />
      );
    default:
      return <LandingPage onGetStarted={() => setCurrentView('auth')} onLogin={() => setCurrentView('auth')} />;
  }
}

