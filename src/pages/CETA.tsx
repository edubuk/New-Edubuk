import React from "react";
  
import {
  LayoutDashboard,
  LineChart,
  BriefcaseBusiness,
  BookOpenText,
  Bot,
  Sparkles,
  Lightbulb,
  FileEdit,
} from "lucide-react";

export default function WhyCETASection() {


const techSkills = [
  {
    icon: <LayoutDashboard className="w-7 h-7" />,
    title: "Democratizes Tech Access",
    desc: "No coding required; anyone can build and innovate.",
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: "Bridges the Skill Gap",
    desc: "Makes advanced tech skills accessible to non-tech learners.",
  },
  {
    icon: <BriefcaseBusiness className="w-7 h-7" />,
    title: "Future-Proofs Careers",
    desc: "Equips professionals with tools for tomorrow’s jobs.",
  },
  {
    icon: <BookOpenText className="w-7 h-7" />,
    title: "Accelerates Learning",
    desc: "Learn faster through visual, drag-and-drop tools.",
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Empowers with AI",
    desc: "Master real-world applications of Generative AI and Automation.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Inclusive Innovation",
    desc: "Enables creative problem-solving globally.",
  },
  {
    icon: <FileEdit className="w-7 h-7" />,
    title: "Industry-Aligned Curriculum",
    desc: "Based on real use-cases and modern business tools.",
  },
];

  return (
    <>
    <section className="bg-[#010922] text-white px-6 md:px-20 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">
            Why CETA?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Why <span className="text-cyan-400">No-Code AI & Emerging Tech</span> Education Matters?
          </h3>
          <p className="text-lg mb-4 text-white/80">
            In today’s fast-evolving digital world, technical skills are no longer just for coders. With the rise of no-code platforms and tools, anyone can now build AI-driven solutions, harness the power of Generative AI, and innovate using emerging technologies—without needing to write a single line of code
            <span className="text-cyan-400 font-semibold"> CETA by Edubuk</span>, empowers students, educators, and professionals from all backgrounds to stay future-ready and industry-relevant by enabling practical, hands-on skilling in AI and emerging technologies using simple, intuitive, no-code tools.
          </p>
        </div>

        {/* Custom Icon Design */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[280px] h-[280px]">
            {/* Big cyan question mark */}
            <Lightbulb
              className="text-cyan-400 absolute top-0 left-0 w-full h-full animate-pulse"
              style={{ filter: "drop-shadow(0 0 12px hsl(186, 83%, 53%))" }}
            />
            {/* Smaller navy blue with offset */}
            <Lightbulb
              className="text-[#061138] absolute top-4 left-4 w-[85%] h-[85%] opacity-60"
            />
            {/* Accent glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl animate-ping z-[-1]" />
          </div>
        </div>
      </div>
    </section>
        <section className="bg-[#010922] text-white px-6 md:px-20 py-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
        Why <span className="text-cyan-400">No-Code & Emerging Tech</span> Skilling Matters
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {techSkills.map((item, i) => (
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
    </section>
    </>
  );
}
