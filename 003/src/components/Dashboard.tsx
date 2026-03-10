import React from 'react';
import { 
  BookOpen, Search, Bell, ChevronDown, LayoutDashboard, 
  CheckCircle2, Calendar, GraduationCap, Flame, Plus, 
  MoreHorizontal, FileText, Clock, Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { Task, Subject } from '../types';

interface DashboardProps {
  tasks: Task[];
  subjects: Subject[];
  onAddTask: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ tasks, subjects, onAddTask }) => {
  const urgentTasks = tasks.filter(t => t.status === 'pending').slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f6f6f8] font-sans text-slate-900 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <BookOpen size={24} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">MyHomework</h2>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4 lg:gap-8">
          <div className="hidden md:flex relative items-center w-full max-w-sm">
            <Search className="absolute left-3 text-slate-400" size={18} />
            <input 
              className="w-full rounded-xl border-none bg-slate-100 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary placeholder:text-slate-500 outline-none" 
              placeholder="Search tasks or subjects..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">
              <Bell size={20} />
            </button>
            <div className="h-10 w-10 rounded-full border-2 border-primary/20 overflow-hidden">
              <img src="https://picsum.photos/seed/alex/40/40" alt="Avatar" referrerPolicy="no-referrer" />
            </div>
            <ChevronDown className="text-slate-500" size={20} />
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full border-r border-slate-200 bg-white lg:w-80">
          <nav className="flex flex-col gap-1 p-4">
            <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
            <SidebarItem icon={<CheckCircle2 size={20} />} label="All Tasks" />
            <SidebarItem icon={<Calendar size={20} />} label="Calendar" />
            <SidebarItem icon={<GraduationCap size={20} />} label="Subjects" />
          </nav>

          <div className="mt-4 px-4">
            <div className="h-px bg-slate-200 mb-6"></div>
            <h3 className="px-4 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Status Overview</h3>
            <div className="space-y-6 px-4">
              {subjects.slice(0, 3).map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{subject.name}</span>
                    <span className="text-primary">{subject.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full bg-primary" style={{ width: `${subject.progress}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-500">{subject.completedTasks}/{subject.totalTasks} tasks completed</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4">
              <div className="rounded-2xl bg-slate-100 p-4 text-center">
                <p className="text-xs font-medium text-slate-500 mb-3">Keep it up! You're on a 5-day streak.</p>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Flame key={i} className="text-orange-400" size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome back, Alex!</h1>
              <p className="mt-1 text-slate-500">You have {urgentTasks.length} urgent tasks that need your attention today.</p>
            </div>
            <button 
              onClick={onAddTask}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
            >
              <Plus size={20} />
              <span>Add New Task</span>
            </button>
          </div>

          {/* Urgent Tasks */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Info className="text-red-500" size={20} />
                Urgent Tasks
              </h2>
              <a className="text-sm font-semibold text-primary hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {urgentTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>

          {/* Subject Activity */}
          <section className="mt-12">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Subject Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.slice(0, 2).map((subject) => (
                <SubjectCard key={subject.name} subject={subject} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-colors ${active ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-50'}`}>
    {icon}
    <span className={active ? 'font-semibold' : 'font-medium'}>{label}</span>
  </div>
);

const TaskCard: React.FC<{ task: Task }> = ({ task }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
  >
    <div className="mb-4 flex items-center justify-between">
      <span className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${
        task.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
      }`}>
        {task.priority} Priority
      </span>
      <button className="text-slate-400 hover:text-slate-600">
        <MoreHorizontal size={20} />
      </button>
    </div>
    <div className="mb-6">
      <h3 className="text-lg font-bold text-slate-900">{task.subject}: {task.topic}</h3>
      <p className="mt-1 text-sm text-slate-500 line-clamp-2">{task.description || 'No description provided.'}</p>
    </div>
    <div className="mt-auto flex flex-col gap-3">
      <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
        <FileText size={14} />
        <span>{task.subject} • {task.topic}</span>
      </div>
      <div className={`flex items-center gap-2 text-xs font-semibold ${task.priority === 'High' ? 'text-red-500' : 'text-orange-500'}`}>
        <Clock size={14} />
        <span>Due {task.deadline}</span>
      </div>
    </div>
  </motion.div>
);

const SubjectCard: React.FC<{ subject: Subject }> = ({ subject }) => (
  <div className="rounded-2xl bg-white p-6 border border-slate-200">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={`size-10 rounded-lg flex items-center justify-center`} style={{ backgroundColor: `${subject.color}20`, color: subject.color }}>
          <BookOpen size={20} />
        </div>
        <h3 className="font-bold">{subject.name}</h3>
      </div>
      <span className="text-xs font-semibold text-slate-400 italic">Last active {subject.lastActive}</span>
    </div>
    <div className="flex gap-4 items-end">
      <div className="flex-1 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Progress</span>
          <span className="font-bold">{subject.progress}%</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full" style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}></div>
        </div>
      </div>
      <div className="size-12 flex items-center justify-center rounded-full border-4 text-xs font-bold" style={{ borderColor: subject.color, color: subject.color }}>
        {subject.completedTasks}/{subject.totalTasks}
      </div>
    </div>
  </div>
);
