const pillars = [
  {
    letter: "D",
    title: "DevOps",
    subtitle: "Keep delivery moving.",
    description:
      "Connect development and operations with automated pipelines, multi-environment deployments, and a smoother path from code to production.",
    tags: ["CI/CD pipelines", "Kubernetes management", "Delivery automation"],
    icon: "all_inclusive",
    color: "text-brand-blue",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
  },
  {
    letter: "I",
    title: "Infrastructure",
    subtitle: "Build a solid foundation.",
    description:
      "Create consistent, version-controlled environments and dependable networks that grow with your business.",
    tags: ["Infrastructure as code", "Automation scripting", "Network architecture"],
    icon: "dns",
    color: "text-[#008cb8]",
    bg: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-200 dark:border-sky-800",
  },
  {
    letter: "S",
    title: "Security",
    subtitle: "Confidence, built in.",
    description:
      "Protect the systems you depend on with security scanning, artifact management, and compliance checks woven into your pipelines.",
    tags: ["DevSecOps", "Compliance checks", "Infrastructure protection"],
    icon: "shield_lock",
    color: "text-[#662D91]",
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
  },
  {
    letter: "C",
    title: "Cloud",
    subtitle: "Make room for what's next.",
    description:
      "Move forward with a considered migration strategy, high-availability architecture, and cloud spend that stays under control.",
    tags: ["Cloud migration", "Disaster recovery", "Cost optimization"],
    icon: "cloud",
    color: "text-[#008cb8]",
    bg: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-200 dark:border-sky-800",
  },
  {
    letter: "O",
    title: "Operations",
    subtitle: "Keep everything in rhythm.",
    description:
      "Bring monitoring, logs, alerting, and ongoing optimization together to understand system health and act where it matters.",
    tags: ["Monitoring & logging", "Incident response", "Training & support"],
    icon: "tune",
    color: "text-brand-blue",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-24 px-6 lg:px-16 max-w-7xl mx-auto w-full" id="disco-framework">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-[#008cb8] uppercase">
            01 / THE MEANING BEHIND THE NAME
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            It all comes together.<br />
            <span className="disco-text">That’s D.I.S.C.O.</span>
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
          Five disciplines. One team looking after the technical side, so you can focus on your side of life.
        </p>
      </div>

      {/* Horizontal interactive rows / cards */}
      <div className="space-y-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.letter}
            className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-blue/60 dark:hover:border-brand-blue/60 hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-[250px_1fr_auto_auto] gap-6 lg:gap-10 items-center"
          >
            {/* Column 1: Letter and Title */}
            <div className="flex items-center gap-5">
              <div
                className={`w-[60px] h-[60px] rounded-[14px] ${pillar.bg} border ${pillar.border} flex items-center justify-center font-headline font-black text-2xl ${pillar.color} shrink-0 shadow-sm`}
              >
                {pillar.letter}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`material-symbols-outlined ${pillar.color} text-xl`}>
                    {pillar.icon}
                  </span>
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono tracking-wide">
                  {pillar.subtitle}
                </p>
              </div>
            </div>

            {/* Column 2: Description */}
            <p className="text-[13px] sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {pillar.description}
            </p>

            {/* Column 3: Stacked Tags */}
            <div className="flex flex-wrap lg:flex-col gap-2 min-w-[180px]">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60 font-medium whitespace-nowrap w-fit"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Column 4: Arrow */}
            <a
              href="#consultation"
              aria-label={`Inquire about ${pillar.title}`}
              className="hidden lg:flex items-center justify-center w-8 shrink-0"
            >
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-brand-blue transition-all group-hover:translate-x-1 group-hover:-translate-y-1 text-xl font-light">
                north_east
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Bottom link */}
      <div className="text-center mt-10">
        <a
          className="inline-flex flex-wrap items-center justify-center gap-1.5 text-sm font-headline font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-blue transition-colors"
          href="#consultation"
        >
          <span>Your systems should work together. So should your IT partner.</span>
          <span className="text-brand-blue underline">Find your rhythm with us</span>
          <span className="material-symbols-outlined text-base text-brand-blue">north_east</span>
        </a>
      </div>
    </section>
  );
}
