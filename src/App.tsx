// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import { Header } from "./pages/Header";
import WhyTruCVSection from "./pages/Trucv";
import WhyCETASection from "./pages/CETA";
import MIITScreeningSection from "./pages/MIIT";
import Olympiad from "./pages/Olympiad";
import ESealSection from "./pages/Eseal";
import WhyEbukTokenSection from "./pages/Token";
import Footer from "./pages/Footer";


function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div 
  className="absolute top-0 left-0 -z-10 h-full w-full" 
  style={{
    backgroundImage: `
      radial-gradient(circle at 10% 20%, hsl(217 100% 50% / 0.08), transparent 40%),
      radial-gradient(circle at 90% 80%, hsl(341 70% 15% / 0.08), transparent 40%)
    `
  }}
/>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyTruCVSection />
        <ESealSection />
        <WhyCETASection />
        <WhyEbukTokenSection />
        <Olympiad />
        <MIITScreeningSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
