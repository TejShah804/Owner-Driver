function StackedDiamonds() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M32 6L52 26L32 46L12 26L32 6Z" stroke="#F68520" strokeWidth="2.5" fill="none"/>
      <path d="M32 14L46 26L32 38L18 26L32 14Z" stroke="#F68520" strokeWidth="2.5" fill="none"/>
      <path d="M32 22L40 26L32 30L24 26L32 22Z" fill="#F68520"/>
    </svg>
  );
}

export default function UpstreamApproach() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="bg-brand-navy rounded-2xl flex flex-col items-center text-center px-8 py-14 md:py-20 mb-10 md:mb-14">
          <div className="mb-8">
            <StackedDiamonds />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold italic text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            An Upstream Approach to risk
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10">
            Operational decisions, supported in real time
          </p>
          <button
            type="button"
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-brand-orange hover:text-brand-orange transition-colors cursor-pointer"
            aria-label="Scroll down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
            </svg>
          </button>
        </div>

        <blockquote className="text-brand-navy text-xl md:text-2xl lg:text-3xl font-light italic text-center leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
          "As freight operations grow more complex, the difference between control and chaos increasingly comes down to the quality of the systems supporting everyday decisions."
        </blockquote>
      </div>
    </section>
  );
}
