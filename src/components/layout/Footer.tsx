import Link from "next/link";
import Brand from "../ui/Brand";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 pt-14 pb-10 px-6 lg:px-16 text-xs text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6 space-y-4">
            <Brand />
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              Enjoy the night. Partner with IG DISCO and hand over deployment headaches,
              patch management, and midnight outages to specialized engineers.
            </p>
            <div className="font-semibold text-slate-900 dark:text-slate-200">
              We&apos;ve got IT!
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <a className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors" href="#catalog">
                  Our services
                </a>
              </li>
              <li>
                <a className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors" href="#catalog">
                  What we deliver
                </a>
              </li>
              <li>
                <a className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors" href="#approach">
                  Our approach
                </a>
              </li>
              <li>
                <a className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors" href="#why-igdisco">
                  Our team
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              LET&apos;S CONNECT
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <a
                  className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
                  href="#consultation"
                >
                  Start a conversation
                  <span className="material-symbols-outlined text-xs">north_east</span>
                </a>
              </li>
              <li>
                <a className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors" href="#faqs">
                  Common questions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} IGDISCO. All rights reserved.
          </div>
          <div className="font-mono text-slate-500 dark:text-slate-500 text-[11px]">
            DevOps. Infrastructure. Security. Cloud. Operations.
          </div>
          <div className="flex gap-6 text-slate-500 dark:text-slate-400">
            <Link className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-brand-blue dark:hover:text-cyan-400 transition-colors" href="/terms-of-service">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
