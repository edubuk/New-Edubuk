import {
  BadgeCheck,
  BookMarked,
  BarChart3,
  Presentation,
  GitBranchPlus,
  ListChecks,
  Users,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
const miitBenefits = [
  {
    icon: <BadgeCheck className="w-7 h-7" />,
    title: "Identifies True Strengths",
    desc: "Goes beyond marks to uncover hidden talents and aptitudes.",
  },
  {
    icon: <BookMarked className="w-7 h-7" />,
    title: "Personalized Career Guidance",
    desc: "Matches each student to the right fields and job roles.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Data-Driven & Scientific",
    desc: "Backed by psychological and career-matching models.",
  },
  {
    icon: <Presentation className="w-7 h-7" />,
    title: "Boosts Confidence & Clarity",
    desc: "Helps students make aligned and informed decisions.",
  },
  {
    icon: <GitBranchPlus className="w-7 h-7" />,
    title: "Prevents Misguided Choices",
    desc: "Reduces chances of academic or career dissatisfaction.",
  },
  {
    icon: <ListChecks className="w-7 h-7" />,
    title: "Used by Leading Institutions",
    desc: "Trusted by schools and colleges for effective counselling.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Supports Parents & Educators",
    desc: "Provides actionable insights for better guidance.",
  },
];

export default function MIITScreeningSection() {
  return (
    <>
    <section className="bg-gradient-to-br from-[#031A2F] to-[#010922] text-white px-6 md:px-20 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">
            Why MIIT Screening?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Why <span className="text-cyan-400">Scientific Intelligence & Interest Mapping</span> Matters for Career Success?
          </h3>
          <p className="text-lg mb-4 text-white/80">
            Choosing the right career shouldn't be guesswork. Every student has a unique combination of intelligences, interests, and natural abilities
            <span className="text-cyan-400 font-semibold"> MIIT Screening by Edubuk</span>, uses a scientific approach to map these traits to the most suitable career paths and job roles—enabling students to make informed, confident, and personalized decisions about their future. Backed by research in Multiple Intelligences and Interest Theory, this tool empowers youth to align their learning and career planning with who they truly are.
          </p>
        </div>

        {/* Custom Icon Design */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[280px] h-[280px]">
            {/* Big cyan question mark */}
            <UserCheck
              className="text-cyan-400 absolute top-0 left-0 w-full h-full "
              style={{ filter: "drop-shadow(0 0 12px hsl(186, 83%, 53%))" }}
            />
            {/* Smaller navy blue with offset */}
            <UserCheck
              className="text-[#061138] absolute top-4 left-4 w-[85%] h-[85%] opacity-60"
            />
            {/* Accent glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl animate-ping z-[-1]" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#010922] text-white px-6 md:px-20 py-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Why <span className="text-cyan-400">MIIT Screening</span> Is Important?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {miitBenefits.map((item, i) => (
          <div
            key={item.title}
            className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="bg-cyan-400/10 text-cyan-400 w-12 h-12 flex items-center justify-center rounded-full mb-4 shadow-inner shadow-cyan-500/10">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
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
