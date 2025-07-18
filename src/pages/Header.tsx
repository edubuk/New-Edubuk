
import logo from '../assets/edubuklogo.png'
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-[#010922] backdrop-blur-lg py-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2" aria-label="Edubuk Home">
            <img src={logo} alt="logo" className="h-20 w-20"></img>
        </a>
        <div className="flex items-center gap-2">
          <button className="bg-cyan-400 text-[#010922] font-semibold px-2  py-2 sm:px-6 sm:py-3 rounded-md hover:bg-cyan-300 transition">
              Explore Our Products
            </button>
        </div>
      </div>
    </header>
  );
}
