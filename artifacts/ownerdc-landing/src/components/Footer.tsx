function OdcLogoWhite() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26" r="25" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M26 10 C17.2 10 10 17.2 10 26 C10 34.8 17.2 42 26 42 C34.8 42 42 34.8 42 26 C42 17.2 34.8 10 26 10Z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M19 20 C15.7 22.5 13.5 26 13.5 26 C13.5 26 18 32 26 32 C34 32 38.5 26 38.5 26 C38.5 26 36.3 22.5 33 20" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="26" cy="26" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="26" cy="26" r="2" fill="white"/>
      </svg>
      <div>
        <div className="text-white font-extrabold text-2xl leading-none tracking-tight">ODC</div>
        <div className="text-white/60 text-xs tracking-widest uppercase mt-0.5">Owner Driver Collective</div>
      </div>
    </div>
  );
}

function ContactPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm hover:border-brand-orange hover:text-white transition-colors cursor-default">
      {icon}
      {text}
    </div>
  );
}

function SoonBadge() {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded border border-brand-orange/60 text-brand-orange text-[10px] font-semibold uppercase tracking-wide ml-2">
      soon
    </span>
  );
}

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded border border-brand-orange/60 text-brand-orange text-[10px] font-semibold uppercase tracking-wide ml-2">
      coming soon
    </span>
  );
}

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center border border-white/30 rounded px-3 py-1 text-white text-xs font-semibold uppercase tracking-widest mb-5">
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 md:pt-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] gap-10 lg:gap-0 pb-10 md:pb-14">
          <div className="lg:pr-12 xl:pr-16">
            <OdcLogoWhite />
            <div className="flex flex-col gap-3">
              <ContactPill
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.99 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                }
                text="0414 017 759"
              />
              <ContactPill
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                }
                text="info@ownerdc.com.au"
              />
            </div>
          </div>

          <div className="hidden lg:block bg-white/10 w-px" />

          <div className="lg:pl-12 xl:pl-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div>
                <ColLabel>Explore</ColLabel>
                <ul className="space-y-3">
                  {[
                    { label: "How ODC Works", href: "#how-it-works" },
                    { label: "Who it's for", href: "#who-its-for" },
                    { label: "Safety & EWD", href: "#safety-ewd" },
                  ].map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-white/70 text-sm hover:text-white transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ColLabel>Company</ColLabel>
                  <ul className="space-y-3">
                    <li>
                      <a href="#about" className="text-white/70 text-sm hover:text-white transition-colors">
                        About ODC
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="text-white/40 text-sm">Insights &amp; Updates</span>
                      <ComingSoonBadge />
                    </li>
                    <li className="flex items-center">
                      <span className="text-white/40 text-sm">Careers</span>
                      <ComingSoonBadge />
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <ColLabel>Resources</ColLabel>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-white/40 text-sm">Documentation</span>
                    <SoonBadge />
                  </li>
                  <li className="flex items-center">
                    <span className="text-white/40 text-sm">FAQs</span>
                    <SoonBadge />
                  </li>
                  <li className="flex items-center">
                    <span className="text-white/40 text-sm">Support</span>
                    <SoonBadge />
                  </li>
                </ul>
              </div>

              <div className="hidden sm:block" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Privacy Policy</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Terms &amp; Conditions</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-orange hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-orange hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-orange hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Owner Driver Collective. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">Powered by Onmark</p>
        </div>
      </div>
    </footer>
  );
}
