export default function PlatformIntro() {
  return (
    <section className="relative bg-brand-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          <div className="relative">
            <div className="lg:absolute lg:-top-20 lg:left-0 lg:right-0 lg:bottom-12 bg-brand-orange flex flex-col z-10">
              <div className="px-6 lg:px-8 py-4 lg:py-5 border-b border-white/30">
                <h3 className="text-white text-center font-bold text-lg lg:text-xl">Pilot Sign Ups</h3>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-8 py-8 lg:py-12">
                <span
                  className="text-white font-extrabold leading-none mb-4 lg:mb-5 tabular-nums"
                  style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                >
                  0100
                </span>
                <p className="text-white text-base text-center leading-relaxed">
                  Drivers and operators registered for pilot participation.
                </p>
              </div>
            </div>
          </div>

          <div className="py-10 lg:py-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy leading-snug mb-6 lg:mb-8">
              A platform built for safer, compliant road transport
            </h2>
            <p className="text-brand-muted text-base lg:text-lg leading-relaxed mb-4">
              Owner Driver Collective brings job allocation, duty records and compliance guidance into one operational system.
            </p>
            <p className="text-brand-muted text-base lg:text-lg leading-relaxed mb-4">
              By connecting allocation, driver records and regulatory oversight, the platform helps transport operators make informed decisions before work begins.
            </p>
            <p className="text-brand-muted text-base lg:text-lg leading-relaxed font-medium">
              Built for real operations. Inspection-ready. Non-punitive by design.
            </p>
          </div>
        </div>

        <div className="pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border-l-4 border-brand-orange bg-white rounded-r-lg px-8 py-8 lg:px-10 lg:py-10">
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
              For Drivers
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-navy leading-snug mb-3">
              Know the job before you accept the load.
            </h3>
            <p className="text-brand-muted text-base lg:text-lg leading-relaxed max-w-3xl">
              ODC shows whether work is safe, compliant and workable before it is accepted by an owner.
            </p>
          </div>

          <div className="border-l-4 border-brand-orange bg-white rounded-r-lg px-8 py-8 lg:px-10 lg:py-10">
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
              For Operators
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-navy leading-snug mb-3">
              Allocate with confidence. Operate with clarity.
            </h3>
            <p className="text-brand-muted text-base lg:text-lg leading-relaxed max-w-3xl">
              Manage work with visibility of hours, constraints, and compliance as the day unfolds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
