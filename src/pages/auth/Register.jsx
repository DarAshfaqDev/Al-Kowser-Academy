import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';
import { Button, Input } from '../../components/ui/index.jsx';

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Register() {
  const [form, setForm]       = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPw, setShowPw]   = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp, signInWithGoogle } = useAuthStore();
  const navigate              = useNavigate();

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    if (form.password !== form.confirm) {
      toast.error('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await signUp({ email: form.email, password: form.password, name: form.name });
      toast.success('Account created! Check your email to confirm, then sign in.');
      navigate('/login');
    } catch (err) {
      toast.error(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4 pattern-overlay">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-gold/8 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md animate-slide-up">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green to-gold
            flex items-center justify-center mx-auto mb-4 shadow-gold-lg">
            <span className="font-arabic text-navy text-3xl font-bold">ك</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-gold tracking-wider mb-1">Al Kawser</h1>
          <p className="text-xs text-slate-muted tracking-[0.2em] uppercase">Islamic Learning Platform</p>
        </div>

        <div className="glass-card p-8 border-gold/10 shadow-glass">
          <h2 className="font-display text-lg font-semibold text-cream mb-6">Create Your Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Full Name" type="text" icon={User}
              placeholder="Your name" value={form.name} onChange={set('name')} />

            <Input label="Email Address" type="email" icon={Mail}
              placeholder="you@example.com" value={form.email} onChange={set('email')} />

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-cream-muted">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted">
                  <Lock size={16} />
                </span>
                <input type={showPw ? 'text' : 'password'}
                  placeholder="Min. 6 characters"
                  value={form.password} onChange={set('password')}
                  className="input-field pl-9 pr-10" />
                <button type="button" onClick={() => setShowPw(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-muted hover:text-cream">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <Input label="Confirm Password" type="password" icon={Lock}
              placeholder="Repeat password" value={form.confirm} onChange={set('confirm')} />

            <Button type="submit" loading={loading} className="w-full mt-2" variant="gold">
              {loading ? 'Creating Account…' : 'Create Account'}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-navy-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-navy px-3 text-slate-muted">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => signInWithGoogle()}
            className="w-full flex items-center justify-center gap-3 px-6 py-2.5
              rounded-xl border border-navy-border bg-navy-dark/50
              text-cream-muted hover:text-cream hover:border-gold/30
              hover:bg-navy-dark transition-all duration-200 active:scale-95"
          >
            <GoogleIcon />
            <span className="text-sm font-semibold">Sign up with Google</span>
          </button>

          <div className="gold-divider mt-6" />

          <p className="text-center text-sm text-slate-muted">
            Already have an account?{' '}
            <Link to="/login" className="text-gold hover:text-gold-light font-semibold">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
