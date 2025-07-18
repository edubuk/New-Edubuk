

import logo1 from "../assets/Logos/cetabgless.png";
import logo2 from "../assets/Logos/miitbgless.png";
import logo3 from "../assets/Logos/logo3.png";
import logo4 from "../assets/Logos/logo4.png";
import logo5 from "../assets/Logos/logo5.png";
import logo6 from "../assets/Logos/logo6.png";
import logo from "../assets/edubuklogo.png";
const products = [
  { name: "CETA", icon: logo1 },
  { name: "MIIT Screening", icon: logo2 },
  { name: "CETA Olympiad", icon: logo3 },
  { name: "TruCV", icon: logo4 },
  { name: "eSeal", icon: logo5 },
  { name: "EBUK Token", icon: logo6 },
];

export default function HeroSection() {
  return (
    <section className="bg-[#010922] text-white min-h-screen px-6 md:px-16 pt-16 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-balance">
            Empowering Trust
            <br /> in the Digital World
          </h1>
          <p className="text-muted-foreground text-lg">
            Edubuk unites cutting-edge blockchain with real-world credentials
            across 6 innovative products.
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-400 text-[#010922] font-semibold px-6 py-3 rounded-md hover:bg-cyan-300 transition">
              Get Started →
            </button>
            <button className="bg-[#030c2c] border border-white/10 text-white font-semibold px-6 py-3 rounded-md hover:bg-[#081541] transition">
              Explore Our Products
            </button>
          </div>
        </div>

        {/* Product Grid Container larger screen */}
        <div className="relative mt-10 md:mt-0 md:ml-20 w-full md:w-auto hide-horizontal-design">
          {/* Background SVG with shiny glowing center */}
          <svg
            viewBox="0 0 300 300"
            className="absolute inset-0 w-full h-full opacity-80"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Glow gradient */}
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor="hsl(186, 83%, 73%)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(186, 83%, 53%)"
                  stopOpacity="0"
                />
              </radialGradient>

              {/* Animation for shiny stroke */}
              <style>
                {`
          .shiny-line {
            stroke-dasharray: 200;
            stroke-dashoffset: 400;
            animation: dash 4s infinite ease-in-out;
          }

          @keyframes dash {
            0% {
              stroke-dashoffset: 400;
            }
              50% {
              stroke-dashoffset:0;
            }
            100% {
              stroke-dashoffset:-400;
            }
          }
        `}
              </style>
            </defs>

            {/* Shiny lines */}
            {[
              [50, 50, 150, 150],
              [250, 50, 150, 150],
              [50, 250, 150, 150],
              [250, 250, 150, 150],
              [150, 50, 150, 150],
              [150, 250, 150, 150],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(186, 83%, 53%)"
                strokeWidth="1"
                className="shiny-line"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
            <img
              src={logo}
              alt="Parent Logo"
              className="w-fit h-18 bg-[#010922] rounded-full border-2 border-cyan-400 shadow-lg p-1"
            />
          </div>

          {/* Product Grid */}
          <div className="relative grid grid-cols-3 gap-28 lg:gap-30 justify-items-center z-10">
            {products.map((product, index) => (
              <div
                key={index}
                className={`
          w-40 h-28 border border-white/10 rounded-xl 
          flex flex-col items-center justify-center 
           bg-[#010922] font-bold 
          hover:border-cyan-400 transition bounce-slow
        `}
                style={{ animationDelay: `${index * 1}s` }}
              >
                <img src={product.icon} className="w-fit h-14 mb-2" />
                <span className="text-sm text-cyan-400 font-medium">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Product Grid Container smaller screen */}
        <div className="relative flex flex-col items-center justify-center w-full py-16 px-4 hide-vertical-design">
          {/* SVG Lines to connect logos to parent */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Glow gradient */}
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor="hsl(186, 83%, 73%)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(186, 83%, 53%)"
                  stopOpacity="0"
                />
              </radialGradient>

              {/* Animation for shiny stroke */}
              <style>
                {`
          .shiny-line {
            stroke-dasharray: 520;
            stroke-dashoffset: 400;
            animation: dash 1.5s infinite ease-in-out;
          }

          @keyframes dash {
            0% {
              stroke-dashoffset: 400;
            }

            50% {
              stroke-dashoffset:0;
            }
            100% {
              stroke-dashoffset:-400;
            }
          }
        `}
              </style>
            </defs>
            {[
              [150, 150],
              [350, 150], // row 1
              [150, 300],
              [350, 300], // row 2
              [150, 520],
              [350, 520], // row 3
            ].map(([x, y], i) => (
              <line
                key={i}
                x1="250"
                y1="-5"
                x2={x}
                y2={y}
                stroke="hsl(186, 83%, 53%)"
                strokeWidth="1.5"
                className="shiny-line"
              />
            ))}
          </svg>

          {/* Parent Logo */}
          <div className="z-10 mb-10">
            <img
              src={logo}
              alt="Parent Logo"
              className="w-fit h-28 rounded-full shadow-lg bg-[#010922] border-2 border-cyan-400 p-2"
            />
          </div>

          {/* Logo Grid (3 rows × 2 columns) */}
          <div className="grid grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-32 h-24 bg-[#010922] border border-white/20 rounded-xl flex flex-col items-center justify-center text-[#030c2c] font-semibold hover:border-cyan-400 transition-all duration-300 shadow-lg relative z-10"
              >
                <img
                  src={product.icon}
                  alt={product.name}
                  className="w-fit h-12 mb-2"
                />
                <span className="text-sm text-cyan-600">{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
