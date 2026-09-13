import {
  Activity,
  Boxes,
  Box,
  Cloud,
  Container,
  GitBranch,
  Hexagon,
  Terminal,
} from "lucide-react";
const technologies = [
  { name: "AWS", Icon: Cloud },
  { name: "Azure", Icon: Boxes },
  { name: "Kubernetes", Icon: Hexagon },
  { name: "Docker", Icon: Container },
  { name: "Terraform", Icon: Box },
  { name: "Ansible", Icon: Terminal },
  { name: "CI/CD", Icon: GitBranch },
  { name: "Monitoring", Icon: Activity },
];
export default function TechStack() {
  return (
    <section className="py-8 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <div className="text-xs font-headline font-bold tracking-wide uppercase shrink-0">
          <span className="text-brand-blue">Deep expertise.</span> <br className="hidden md:block" />
          <span className="text-slate-800 dark:text-slate-200">The tools you trust.</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
          {technologies.map(({ name, Icon }) => (
            <span key={name} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
              <Icon size={20} strokeWidth={1.8} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
