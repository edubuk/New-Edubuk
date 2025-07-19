"use client";

import {
  Bot,
  ShieldCheck,
  BarChartBig,
  CircuitBoard,
  Award,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const olympiadFeatures = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Artificial Intelligence",
    desc: "Explore AI applications without writing code. Open to all curious minds.",
  },
  {
    icon: <CircuitBoard className="w-7 h-7" />,
    title: "Robotics",
    desc: "Understand the future of automation through visual and interactive tools.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Cybersecurity",
    desc: "Learn how to stay secure in the digital age with intuitive, no-code tools.",
  },
  {
    icon: <BarChartBig className="w-7 h-7" />,
    title: "Data Analytics",
    desc: "Develop data skills with a practical lens, no complex coding required.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Reach",
    desc: "Open to students from India, Singapore & Dubai — Classes 7 to 12.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Exciting Rewards",
    desc: "Win medals, certificates & exciting prizes! Earn recognition.",
  },
];

export default function CETAOlympiadSection() {
  return (
    <section className="bg-gradient-to-br from-[#010922] to-[#031A2F] text-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          CETA-Olympiad:
          <span className="text-cyan-400"> AI & Emerging Tech</span>
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          International No-Code Olympiad for Class 7–12 | Available in India, Singapore & Dubai.
          A visionary concept by IIT, IIM Alumni, CFA Charterholder, Gold Medalist & Industry Experts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {olympiadFeatures.map((item, i) => (
          <div
            key={item.title}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cyan-400/10 text-cyan-400 rounded-full shadow-inner shadow-cyan-500/10">
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
  );
}
