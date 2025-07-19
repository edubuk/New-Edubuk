import {
  Rocket,
  GraduationCap,
  Banknote,
  Medal,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import multiToken from '../assets/ebuk_multi_token_without_bg.png'
export default function WhyEbukTokenSection() {
  const utilities = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Courses on Edubuk LMS",
      desc: "Use EBUK tokens to enroll in premium skill-building courses across tech, business, and emerging domains.",
    },
    {
      icon: <Medal className="w-7 h-7" />,
      title: "AI Olympiad & CETA Program",
      desc: "Participate in international-level assessments powered by AI and earn rewards via EBUK tokens.",
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Internships & Placements",
      desc: "Gain exclusive access to internships and placement support by holding or using EBUK tokens.",
    },
    {
      icon: <Banknote className="w-7 h-7" />,
      title: "Learn-to-Earn, Skill-to-Earn",
      desc: "Earn tokens by learning, verifying, or contributing to the Edubuk ecosystem.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Verified Certificates on Blockchain",
      desc: "Issue and store your blockchain-based certificates securely using EBUK tokens.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "TruCV & eSeal Access",
      desc: "Leverage token-based access to trusted verification tools like TruCV and eSeal.",
    },
  ];

  return (
    <>
      {/* Section: What is EBUK */}
      <section className="bg-gradient-to-r from-[#031A2F] to-[#010922] text-white px-6 md:px-20 pt-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">
              Edubuk Token
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              What is <span className="text-cyan-400">EBUK</span> and Why It Matters?
            </h3>
            <p className="text-lg mb-4 text-white/80">
              <span className="text-cyan-400 font-semibold">EBUK</span> is the native utility and reward token of the globally awarded Edubuk ecosystem—
              connecting learning, skilling, and employment through Web3.
            </p>
            <p className="text-white/70 text-lg">
              It's a <strong>Utility Token</strong> — not a security. Designed to power Edubuk's Learn-to-Earn, Skill-to-Earn,
              and Verify-to-Earn models using AI & Blockchain. With support from chains like Solana, XDC, Concordium, and BNB,
              it’s the <span className="text-cyan-400 font-semibold">Bitcoin of Education & Employment</span>.
            </p>
          </div>

          {/* Visual Accent (Animated Icon Glow) */}
          <div className="relative flex justify-center items-center">
            
          <div className="relative w-[280px] h-[280px]">
            {/* Smaller navy blue with offset */}
            <img
            src={multiToken}
              className="text-[#061138] absolute top-4 left-4 w-[85%] h-[85%] opacity-60"
            />
            {/* Accent glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl animate-ping z-[-1]" />
          </div>

          </div>
        </div>
      </section>

      {/* Section: Token Utilities */}
      <section className="bg-[#010922] text-white px-6 md:px-20 py-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Real Utilities of <span className="text-cyan-400">EBUK Token</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {utilities.map((item, i) => (
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

        {/* Learn More CTA */}
        <div className="mt-12 text-center">
          <Button className="bg-cyan-300 text-[#031A2F] hover:bg-cyan-300 transition-all rounded-full px-6 py-4 text-xl font-semibold shadow-lg">
            Learn More →
          </Button>
        </div>
      </section>
    </>
  );
}
