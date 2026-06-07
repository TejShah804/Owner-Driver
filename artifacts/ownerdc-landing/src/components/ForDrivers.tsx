const features = [
  {
    title: "Get work that's right for you",
    body: "Jobs are matched to your availability, hours and vehicle type — so you spend less time chasing work and more time on the road.",
  },
  {
    title: "Stay compliant without the guesswork",
    body: "Your hours, rest breaks and duty records are tracked in real time. ODC flags risks before they become breaches - not after.",
  },
  {
    title: "Make the job easier, not harder",
    body: "One place for job details, changes and records. No more chasing paperwork, phone calls or finding out mid-run that something doesn't add up.",
  },
];

export default function ForDrivers() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-8 md:mb-10">
          <span className="block text-brand-orange text-xs font-bold uppercase tracking-[0.18em] mb-4">
            For Drivers
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-brand-navy leading-snug mb-5">
            Know the job before you accept the load.
          </h2>
          <p className="text-brand-muted text-base lg:text-lg leading-relaxed">
            ODC shows whether work is safe, compliant and workable before it is accepted by an owner.
          </p>
        </div>

        <div className="space-y-0">
          {features.map((f, i) => (
            <div key={i}>
              <div className="h-px bg-brand-orange/30 my-6" />
              <div>
                <h3 className="text-brand-navy font-semibold text-base md:text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
