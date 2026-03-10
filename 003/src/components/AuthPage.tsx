import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AuthPageProps {
  onAuthSuccess: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#f6f6f8] font-sans flex flex-col items-center">
      {/* Top Navigation Bar */}
      <nav className="w-full max-w-7xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="size-8 bg-primary text-white flex items-center justify-center rounded-lg">
            <BookOpen size={20} />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">MyHomework</h2>
        </div>
        <button className="flex items-center justify-center rounded-xl h-10 px-6 bg-primary/10 text-primary text-sm font-bold border border-primary/20 hover:bg-primary/20 transition-colors">
          Help
        </button>
      </nav>

      {/* Main Content Container */}
      <main className="flex-1 flex items-center justify-center w-full px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[480px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
        >
          {/* Header Section */}
          <div className="p-8 pb-4 text-center">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-slate-500">Join thousands of students managing their studies efficiently.</p>
          </div>

          {/* Login/Register Toggle */}
          <div className="px-8 py-4">
            <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-100 p-1">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex grow items-center justify-center rounded-lg px-2 h-full text-sm font-semibold transition-all ${isLogin ? 'bg-white shadow-sm text-primary' : 'text-slate-500'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex grow items-center justify-center rounded-lg px-2 h-full text-sm font-semibold transition-all ${!isLogin ? 'bg-white shadow-sm text-primary' : 'text-slate-500'}`}
              >
                Register
              </button>
            </div>
          </div>

          {/* Social Provider Button */}
          <div className="px-8 py-3">
            <button 
              onClick={onAuthSuccess}
              className="flex w-full items-center justify-center rounded-xl h-12 px-5 bg-white border border-slate-200 text-slate-700 gap-3 hover:bg-slate-50 transition-colors font-semibold"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="px-8 py-4 flex items-center gap-4">
            <div className="h-px grow bg-slate-200"></div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">or use email</span>
            <div className="h-px grow bg-slate-200"></div>
          </div>

          {/* Email & Password Fields */}
          <form 
            onSubmit={(e) => { e.preventDefault(); onAuthSuccess(); }}
            className="px-8 space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="email">Email Address</label>
              <input 
                className="w-full h-11 px-4 rounded-xl border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary text-sm transition-all outline-none" 
                id="email" 
                placeholder="name@example.com" 
                type="email"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-semibold text-slate-700" htmlFor="password">Password</label>
                <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot?</a>
              </div>
              <input 
                className="w-full h-11 px-4 rounded-xl border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary text-sm transition-all outline-none" 
                id="password" 
                placeholder="••••••••" 
                type="password"
                required
              />
            </div>
            <div className="pt-2">
              <button 
                className="w-full h-12 bg-primary text-white rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2" 
                type="submit"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </form>

          {/* Footer Section */}
          <div className="p-8 pt-6 text-center">
            <p className="text-slate-500 text-xs">
              By continuing, you agree to our 
              <a className="text-primary hover:underline ml-1" href="#">Terms of Service</a> and 
              <a className="text-primary hover:underline ml-1" href="#">Privacy Policy</a>.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <footer className="w-full py-8 text-center">
        <p className="text-slate-400 text-sm">© 2024 MyHomework Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};
