export default function Features() {
  return (
    <section className="py-20 sm:py-24 px-6 lg:px-16 max-w-7xl mx-auto w-full border-t border-slate-200 dark:border-slate-800" id="why-igdisco">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-mono font-bold tracking-widest text-[#008cb8] uppercase">
              03 / WHY IGDISCO
            </p>
            <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              You focus on life.<br />
              We focus on<br />
              <span className="text-brand-blue">your systems.</span>
            </h2>
          </div>
          <p className="font-body text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
            Peace of mind starts with a connected approach to IT. We work alongside your team to understand the challenges, make the right calls, and build something that lasts.
          </p>
          {/* Vision & Mission Blocks */}
          <div className="space-y-4 pt-2">
            <div className="border-l-4 border-[#008cb8] bg-sky-50/70 dark:bg-sky-950/30 p-4 rounded-r-xl space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase text-[#008cb8] tracking-wider">OUR VISION</span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                Everyone can party all night without worrying about infrastructure and security — it stays up, 24/7.
              </p>
            </div>
            <div className="border-l-4 border-brand-blue bg-blue-50/70 dark:bg-blue-950/30 p-4 rounded-r-xl space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase text-brand-blue tracking-wider">OUR MISSION</span>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                Bringing cloud computing and security solutions to the world, and serving as a trusted source of infrastructure technology.
              </p>
            </div>
          </div>
          <div>
            <a className="inline-flex items-center gap-2 text-sm font-headline font-bold text-slate-900 dark:text-white hover:text-brand-blue transition-colors" href="#consultation">
              <span>Meet your engineering partners</span>
              <span className="material-symbols-outlined text-base text-brand-blue">north_east</span>
            </a>
          </div>
        </div>

        {/* Right Column (3 Feature Callouts) */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-center">
          {/* 01 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#008cb8]/50 flex items-start gap-5 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900 flex items-center justify-center text-[#008cb8] shrink-0">
              <span className="material-symbols-outlined text-xl">speed</span>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-400">01</span>
              <h3 className="font-headline text-lg font-bold text-slate-900 dark:text-white mb-1.5">Ship without the bottlenecks.</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Give your team a smoother path from idea to production with automated delivery workflows.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#662D91]/50 flex items-start gap-5 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900 flex items-center justify-center text-[#662D91] shrink-0">
              <span className="material-symbols-outlined text-xl">verified_user</span>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-400">02</span>
              <h3 className="font-headline text-lg font-bold text-slate-900 dark:text-white mb-1.5">Build on a stronger foundation.</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Make security part of your architecture, with practical controls woven into the way you work.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-brand-blue/50 flex items-start gap-5 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 flex items-center justify-center text-brand-blue shrink-0">
              <span className="material-symbols-outlined text-xl">trending_up</span>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-400">03</span>
              <h3 className="font-headline text-lg font-bold text-slate-900 dark:text-white mb-1.5">Be ready for what&apos;s next.</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Create adaptable infrastructure that supports your business as its needs evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
