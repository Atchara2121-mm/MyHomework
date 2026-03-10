import React from 'react';
import { BookOpen, Cloud, Bell, BarChart3, ArrowRight, Menu } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onLogin }) => {
  return (
    <div className="min-h-screen bg-[#f6f6f8] text-slate-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
              <BookOpen size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">MyHomework</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Features</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Pricing</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Resources</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={onLogin}
              className="hidden sm:block text-sm font-bold text-slate-700 hover:text-primary px-4 py-2"
            >
              Log in
            </button>
            <button 
              onClick={onGetStarted}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  <Cloud size={16} />
                  Powered by Google Cloud
                </div>
                <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl">
                  Manage your homework <span className="text-primary">with ease</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                  Experience the efficiency of Google Cloud to organize, track, and submit your assignments seamlessly. Stay ahead of your studies with real-time syncing and smart organization tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onGetStarted}
                    className="rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform"
                  >
                    Get Started for Free
                  </button>
                  <button className="rounded-xl border-2 border-slate-200 px-8 py-4 text-base font-bold hover:bg-slate-50 transition-colors">
                    View Demo
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/32/32`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span>Joined by 10k+ students this semester</span>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl"></div>
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyCjkU5ifEe2YiS75zPnzE6iluvUxpcX4YVR1kFGYFeiNQmdWDhaO3he5tfFFBZIjkO4EjlvKzfVfNczqBNpXJJparAHsg6l1hIamMp0eL-Efq4CPrKCOLZiCFiaSolFnIIjPDYObPiWuPeydckCHpyslKRVLVQbEXWAkd7NyM0nLMkmtxTttfJ2OCdGRuQYsdRod6b5zipWxWp8xJ4gPxExi45xbo8DaQd-BEP8-UH1Mr16A3yraDx3rjHMFUfVQSM8s8boZh7XhV" 
                    alt="Dashboard Preview" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose MyHomework?</h2>
              <p className="mt-4 text-lg text-slate-600">Our platform provides the tools you need to stay ahead of your studies and achieve your academic goals.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard 
                icon={<Cloud className="text-white" size={24} />}
                title="Cloud Sync"
                description="Access your tasks from any device with real-time Google Cloud synchronization. Your work is always safe."
              />
              <FeatureCard 
                icon={<Bell className="text-white" size={24} />}
                title="Smart Reminders"
                description="Never miss a deadline with automated notifications and intelligent calendar integration that plans your week."
              />
              <FeatureCard 
                icon={<BarChart3 className="text-white" size={24} />}
                title="Grade Tracking"
                description="Monitor your academic progress with detailed insights, predictive analytics, and visual performance charts."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-slate-900 px-8 py-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to boost your productivity?</h2>
            <p className="mx-auto mb-10 max-w-xl text-slate-300">Join thousands of students who are mastering their schedules and reclaiming their free time with MyHomework.</p>
            <div className="flex justify-center">
              <button 
                onClick={onGetStarted}
                className="rounded-xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                Sign Up for Free
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <BookOpen size={16} />
              </div>
              <span className="font-bold">MyHomework</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
              <a className="hover:text-primary transition-colors" href="#">Help Center</a>
            </div>
            <p className="text-sm text-slate-400">© 2024 MyHomework Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group rounded-2xl border border-slate-100 bg-[#f6f6f8] p-8 transition-all hover:border-primary/20 hover:shadow-xl">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);
