import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Award, Library, Star, ChevronRight } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Islamic Courses', desc: 'Structured courses covering Aqeedah, Fiqh, Tafseer, Hadith, and more.' },
  { icon: Award, title: 'Certificates', desc: 'Earn verified certificates upon course completion.' },
  { icon: Library, title: 'Resource Library', desc: 'Access books, lectures, and scholarly materials.' },
  { icon: Star, title: 'Track Progress', desc: 'Monitor your learning journey with detailed analytics.' },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-navy pattern-overlay">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green/10 rounded-full blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green to-gold flex items-center justify-center">
            <span className="font-arabic text-navy text-lg font-bold">ك</span>
          </div>
          <span className="font-display text-gold font-bold text-lg tracking-wider">Al Kawser</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="btn-primary text-sm px-5 py-2">Sign In</Link>
          <Link to="/register" className="btn-gold text-sm px-5 py-2">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="font-arabic text-gold text-2xl md:text-3xl mb-6 opacity-80">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-6">
            Learn Islam
            <br />
            <span className="text-gold-gradient">Online Academy</span>
          </h1>
          <p className="text-slate-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Al Kawser is an Islamic learning platform offering structured courses,
            authentic knowledge, and verified certificates — all rooted in the
            teachings of Ahl-e-Sunnat Wal Jamaat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-gold text-base px-8 py-3 flex items-center gap-2">
              Start Learning <ChevronRight size={18} />
            </Link>
            <Link to="/login" className="btn-primary text-base px-8 py-3">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-3">
            Why <span className="text-gold">Al Kawser</span>
          </h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card p-6 border-gold/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                <f.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-cream font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <div className="glass-card p-10 md:p-14 text-center border-gold/20">
          <p className="font-arabic text-gold text-2xl mb-4">رَبِّ زِدْنِي عِلْماً</p>
          <p className="text-cream-muted text-sm mb-2">"My Lord, increase me in knowledge" — Quran 20:114</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mt-6 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-slate-muted mb-8 max-w-lg mx-auto">
            Join Al Kawser Academy and access authentic Islamic knowledge
            at your own pace.
          </p>
          <Link to="/register" className="btn-gold text-base px-10 py-3">
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-navy-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-muted text-sm">
            <span className="font-arabic text-gold">الكوثر</span>
            <span>© {new Date().getFullYear()} Al Kawser Academy</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-muted">
            <Link to="/login" className="hover:text-gold transition-colors">Sign In</Link>
            <Link to="/register" className="hover:text-gold transition-colors">Register</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
