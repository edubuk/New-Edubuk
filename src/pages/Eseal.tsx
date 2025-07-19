import {
  Fingerprint,
  ShieldCheck,
  TimerReset,
  Database,
  GlobeLock,
  ClipboardCheck,
  ScanLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyESealSection() {
  const reasons = [
    {
      icon: <Fingerprint className="w-7 h-7" />,
      title: "Tamper-Proof Credentials",
      desc: "Every certificate is recorded immutably using blockchain, preventing fraud or manipulation.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Decentralized Verification",
      desc: "Eliminates dependency on third-party verification—anyone can verify directly from the blockchain.",
    },
    {
      icon: <TimerReset className="w-7 h-7" />,
      title: "Instant Timestamping",
      desc: "All certifications are cryptographically timestamped to ensure historical accuracy.",
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Secure Record Storage",
      desc: "Certificate hashes are securely stored on-chain, while originals remain with the owner.",
    },
    {
      icon: <GlobeLock className="w-7 h-7" />,
      title: "Globally Recognized",
      desc: "Used by 15+ universities and verification companies across countries. No geographical barrier.",
    },
    {
      icon: <ClipboardCheck className="w-7 h-7" />,
      title: "One-Click Verification",
      desc: "Employers, universities, or background firms can instantly verify via eSeal’s web dApp.",
    },
  ];

  return (
    <>
      {/* Section: What and Why eSeal */}
      <section className="bg-gradient-to-br from-[#031A2F] to-[#010922] text-white px-6 md:px-20 pt-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">
              Why eSeal?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              What is <span className="text-cyan-400">eSeal</span> and Why Does It Matter?
            </h3>
            <p className="text-lg mb-4 text-white/80">
              <span className="text-cyan-400 font-semibold">eSeal</span> by Edubuk is a blockchain-powered verification system that ensures each certificate—academic or professional—is secure, verifiable, and tamper-proof. Built with cutting-edge AI and blockchain, it enables real-time, fraud-proof verification of credentials globally.
            </p>
            <p className="text-white/70 text-lg">
              With over 20,000+ certificates recorded, 15+ institutional partners, and global awards including recognition from G20 and Tenity Singapore, eSeal is redefining how credentials are trusted across borders.
            </p>
          </div>

          {/* Visual Accent (Animated Icon Glow) */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[280px] h-[280px]">
              <ScanLine
                className="text-cyan-400 absolute top-0 left-0 w-full h-full animate-pulse"
                style={{ filter: "drop-shadow(0 0 12px hsl(186, 83%, 53%))" }}
              />
              <ScanLine
                className="text-[#061138] absolute top-4 left-4 w-[85%] h-[85%] opacity-60"
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl animate-ping z-[-1]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Features */}
      <section className="bg-[#010922] text-white px-6 md:px-20 py-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Why <span className="text-cyan-400">eSeal</span> is a Game-Changer?
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
