import { useState, useEffect } from "react";

function OdcLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="19" cy="19" r="17" stroke="#F68520" strokeWidth="2" fill="none" />
        <circle cx="19" cy="19" r="11.5" stroke="#F68520" strokeWidth="1.5" fill="none" />
        <circle cx="19" cy="19" r="6" stroke="#F68520" strokeWidth="1.5" fill="none" />
        <circle cx="19" cy="3.5" r="2.5" fill="#F68520" />
        <circle cx="19" cy="34.5" r="2.5" fill="#F68520" />
        <circle cx="3.5" cy="19" r="2.5" fill="#F68520" />
        <circle cx="34.5" cy="19" r="2.5" fill="#F68520" />
      </svg>

      <div className="leading-tight">
        <div className="text-white font-bold text-sm tracking-tight">
          OwnerDriver
        </div>
        <div className="text-white/70 font-normal text-xs tracking-widest uppercase">
          Collective
        </div>
      </div>
    </div>
  );
}

function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#who-its-for", label: "Who it's for" },
    { href: "#safety-ewd", label: "Safety & EWD" },
    { href: "#about", label: "About ODC" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-navy shadow-md py-3 lg:py-4" : "bg-transparent py-5 lg:py-6"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-10">
        <a href="/" className="block">
          <OdcLogo />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white hover:text-brand-orange transition-colors"
            >
              {l.label}
            </a>
          ))}

          <button 
            onClick={onOpenModal}
            className="inline-flex items-center px-5 py-2 rounded-full bg-brand-orange text-white text-sm font-semibold hover:bg-orange-500 transition-colors cursor-pointer"
          >
            Register Interest
          </button>
        </div>

        <button
          className="lg:hidden text-white p-1 cursor-pointer z-[60] relative"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[45] lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[280px] bg-brand-navy shadow-2xl z-[50] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col px-6 pt-24 pb-8 gap-6 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 mt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg font-medium text-white hover:text-brand-orange transition-colors border-b border-white/10 py-4"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button 
          onClick={() => {
            onOpenModal();
            setMenuOpen(false);
          }}
          className="block w-full text-center px-5 py-3.5 rounded-full bg-brand-orange text-white text-base font-semibold hover:bg-orange-500 transition-colors cursor-pointer mt-auto"
        >
          Register Interest
        </button>
      </div>
    </nav>
  );
}

export default Navbar;