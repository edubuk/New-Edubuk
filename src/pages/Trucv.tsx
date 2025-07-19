
import {
  BadgeCheck,
  HelpCircle,
    ShieldCheck,
  LockKeyhole,
  Globe,
  Rocket,
  FileCheck2,
  SearchCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function WhyTruCVSection() {

  
const reasons = [
  {
    icon: <LockKeyhole className="w-7 h-7" />,
    title: "Eliminates Credential Fraud",
    desc: "All academic and work records are blockchain-secured.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Boosts Trust & Transparency",
    desc: "Employers and institutions can verify your CV in seconds.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Recognition",
    desc: "Your profile is trusted across borders and industries.",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Faster Hiring & Admissions",
    desc: "No more delays with background checks or paperwork.",
  },
  {
    icon: <FileCheck2 className="w-7 h-7" />,
    title: "One CV for Life",
    desc: "Your achievements stay securely accessible, forever.",
  },
  {
    icon: <SearchCheck className="w-7 h-7" />,
    title: "Higher Shortlisting Rates",
    desc: "Verified CVs stand out to recruiters and systems.",
  },
  {
    icon: <BadgeCheck className="w-7 h-7" />,
    title: "Increases Employer Confidence",
    desc: "Better chances for interviews and global roles.",
  },
];
  return (
    <>
    <section className="bg-gradient-to-br from-[#031A2F] to-[#010922] text-white px-6 md:px-20 pt-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">
            Why TruCV?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Why a <span className="text-cyan-400">Completely Verifiable CV</span> is Essential?
          </h3>
          <p className="text-lg mb-4 text-white/80">
            In today’s competitive and global job market, trust and authenticity are everything.
            Employers, universities, and immigration authorities increasingly demand verified proof
            of education, experience, and skills. A traditional CV can be easily faked—but with
            <span className="text-cyan-400 font-semibold"> TruCV by Edubuk</span>, every credential you list is completely verifiable and tamper-proof,
            secured using blockchain technology.
          </p>
          <p className="text-white/70 text-lg">
            This not only builds instant credibility but also opens doors to global opportunities by
            removing doubt, fraud, and manual verification delays.
          </p>
        </div>

        {/* Custom Icon Design */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[280px] h-[280px]">
            {/* Big cyan question mark */}
            <HelpCircle
              className="text-cyan-400 absolute top-0 left-0 w-full h-full animate-pulse"
              style={{ filter: "drop-shadow(0 0 12px hsl(186, 83%, 53%))" }}
            />
            {/* Smaller navy blue with offset */}
            <HelpCircle
              className="text-[#061138] absolute top-4 left-4 w-[85%] h-[85%] opacity-60"
            />
            {/* Accent glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl animate-ping z-[-1]" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#010922] text-white px-6 md:px-20 py-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
        Key Reasons to Choose a <span className="text-cyan-400">Verifiable CV</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, i) => (
          <div
            key={item.title}
            className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="bg-cyan-400/10 text-cyan-400 w-12 h-12 flex items-center justify-center rounded-full mb-4 shadow-inner shadow-cyan-500/10">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-white/70 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button className="bg-cyan-300 text-[#031A2F] hover:bg-cyan-300 transition-all rounded-full px-6 py-4 text-xl font-semibold shadow-lg">
          Learn More →
        </Button>
      </div>
    </section>
    </>
  );
}
