import React, { useState } from 'react';
import { BookOpen, Bell, Calendar, Info, Check, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Task } from '../types';

interface AddTaskPageProps {
  onSave: (task: Omit<Task, 'id' | 'status'>) => void;
  onCancel: () => void;
}

export const AddTaskPage: React.FC<AddTaskPageProps> = ({ onSave, onCancel }) => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      onSave({ subject, topic, deadline, priority });
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] font-sans text-slate-900">
      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-white border border-emerald-100 p-4 rounded-xl shadow-xl"
          >
            <div className="bg-emerald-500 rounded-full p-1 flex items-center justify-center text-white">
              <Check size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Task Saved Successfully</p>
              <p className="text-xs text-slate-500">Your homework has been added to your calendar.</p>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-4 text-slate-400 hover:text-slate-600">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-40 py-3">
        <div className="flex items-center gap-4 text-primary">
          <BookOpen size={24} />
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">MyHomework</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <a className="text-primary text-sm font-semibold leading-normal border-b-2 border-primary pb-1" href="#">Tasks</a>
            <a className="text-slate-600 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Calendar</a>
            <a className="text-slate-600 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Profile</a>
          </div>
          <button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">
            <Bell size={20} />
          </button>
        </div>
      </header>

      <main className="flex flex-1 justify-center py-10 px-6 lg:px-40">
        <div className="w-full max-w-[640px] flex flex-1 flex-col">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-slate-900 text-3xl font-extrabold tracking-tight">Add New Task</h1>
            <p className="text-slate-500 text-base">Keep track of your academic progress by detailing your next assignment.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-semibold">Subject</label>
              <input 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white h-12 px-4 text-base focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                placeholder="e.g. Mathematics" 
                type="text"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-900 text-sm font-semibold">Topic</label>
              <input 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white h-12 px-4 text-base focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                placeholder="e.g. Calculus Integration" 
                type="text"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 text-sm font-semibold">Deadline</label>
                <div className="relative">
                  <input 
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white h-12 px-4 pr-10 text-base focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                    type="date"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
                <p className="text-amber-600 text-xs mt-1 flex items-center gap-1">
                  <Info size={12} />
                  Deadline must be at least 24h from now.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-900 text-sm font-semibold">Priority</label>
                <select 
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as any)}
                  className="w-full rounded-lg border border-slate-200 bg-white h-12 px-4 text-base focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                disabled={isSaving}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg transition-all shadow-lg disabled:opacity-70" 
                type="submit"
              >
                <span>Save Task</span>
                {isSaving && <Loader2 className="animate-spin" size={20} />}
              </button>
              <button 
                onClick={onCancel}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold h-12 rounded-lg transition-all" 
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <StatCard label="Pending Tasks" value="12" primary />
            <StatCard label="This Week" value="4" />
            <StatCard label="Completed" value="89" />
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; primary?: boolean }> = ({ label, value, primary }) => (
  <div className={`p-4 rounded-xl border ${primary ? 'bg-primary/5 border-primary/10' : 'bg-slate-100 border-slate-200'}`}>
    <p className="text-xs text-slate-500 font-medium">{label}</p>
    <p className={`text-xl font-bold ${primary ? 'text-primary' : 'text-slate-900'}`}>{value}</p>
  </div>
);
