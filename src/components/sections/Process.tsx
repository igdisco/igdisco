const steps = [
  {
    num: "01",
    numBg: "bg-blue-50 dark:bg-blue-950/40 text-brand-blue border-blue-100 dark:border-blue-900",
    hoverBorder: "hover:border-brand-blue/50",
    accentColor: "text-brand-blue",
    title: "Listen & assess",
    text: "We get to know your infrastructure, your people, and what’s getting in the way.",
    output: "A shared understanding",
  },
  {
    num: "02",
    numBg: "bg-sky-50 dark:bg-sky-950/40 text-[#008cb8] border-sky-100 dark:border-sky-900",
    hoverBorder: "hover:border-[#008cb8]/50",
    accentColor: "text-[#008cb8]",
    title: "Map the way forward",
    text: "Together, we define the architecture, priorities, and a practical plan for delivery.",
    output: "A clear roadmap",
  },
  {
    num: "03",
    numBg: "bg-purple-50 dark:bg-purple-950/40 text-[#662D91] border-purple-100 dark:border-purple-900",
    hoverBorder: "hover:border-[#662D91]/50",
    accentColor: "text-[#662D91]",
    title: "Build & implement",
    text: "We build, automate, and migrate with care, keeping your team involved along the way.",
    output: "Systems that work for you",
  },
  {
    num: "04",
    numBg: "bg-blue-50 dark:bg-blue-950/40 text-brand-blue border-blue-100 dark:border-blue-900",
    hoverBorder: "hover:border-brand-blue/50",
    accentColor: "text-brand-blue",
    title: "Support & evolve",
    text: "We stay focused on system health, ongoing optimization, and your next challenge.",
    output: "A long-term partnership",
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-24 px-6 lg:px-16 max-w-7xl mx-auto w-full border-t border-slate-200 dark:border-slate-800" id="approach">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-[#008cb8] uppercase">
            04 / OUR APPROACH
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A clear process.<br />
            <span className="text-slate-400 dark:text-slate-500">A team at every step.</span>
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
          No black boxes. Just thoughtful collaboration from the first conversation to what comes next.
        </p>
      </div>

      {/* 4-Step Process Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.num}
            className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md ${step.hoverBorder} flex flex-col justify-between transition-all`}
          >
            <div className="step-track">
              <span>0{index + 1}</span>
              <i />
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.text}
              </p>
            </div>
            <div className={`pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-headline font-bold ${step.accentColor}`}>
              {step.output}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
