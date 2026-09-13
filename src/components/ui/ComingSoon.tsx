import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="inline-flex items-center justify-center p-4 bg-brand-blue/10 text-brand-blue rounded-2xl mb-8">
        <span className="material-symbols-outlined text-4xl">construction</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-headline font-bold text-slate-900 dark:text-white tracking-tight mb-6">
        {title}
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10">
        We're currently building out this section of the site. Check back soon for updates!
      </p>
      <Link 
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>
    </div>
  );
}
