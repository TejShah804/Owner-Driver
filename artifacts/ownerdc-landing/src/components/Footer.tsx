function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="17" stroke="#F68520" strokeWidth="2" fill="none"/>
        <circle cx="19" cy="19" r="11.5" stroke="#F68520" strokeWidth="1.5" fill="none"/>
        <circle cx="19" cy="19" r="6" stroke="#F68520" strokeWidth="1.5" fill="none"/>
        <circle cx="19" cy="3.5" r="2.5" fill="#F68520"/>
        <circle cx="19" cy="34.5" r="2.5" fill="#F68520"/>
        <circle cx="3.5" cy="19" r="2.5" fill="#F68520"/>
        <circle cx="34.5" cy="19" r="2.5" fill="#F68520"/>
      </svg>
      <div className="leading-tight">
        <div className="text-white font-bold text-sm tracking-tight">OwnerDriver</div>
        <div className="text-white/60 font-normal text-xs tracking-widest uppercase">Collective</div>
      </div>
    </div>
  );
}

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#who-its-for", label: "Who it's for" },
  { href: "#safety-ewd", label: "Safety & EWD" },
  { href: "#about", label: "About ODC" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0">
          <div className="lg:col-span-5 lg:border-r lg:border-white/15 lg:pr-10 space-y-6">
            <a href="/" className="inline-block">
              <FooterLogo />
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              A freight platform combining job allocation, electronic work diary and compliance guidance to support safer, inspection-ready road transport operations.
            </p>
            <p className="text-white/30 text-xs leading-relaxed max-w-sm">
              Sertainty by ODC® is a registered trademark of Owner Driver Collective Pty Ltd. All rights reserved.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-10 flex flex-col justify-between gap-10">
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">Navigation</h4>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-white/70 text-sm hover:text-brand-orange transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <button className="inline-flex items-center px-6 py-3 rounded-full bg-brand-orange text-white text-sm font-semibold hover:bg-orange-500 transition-colors cursor-pointer">
                Register Interest
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Owner Driver Collective Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
