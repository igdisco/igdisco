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
    <section className="tech-strip">
      <div className="container tech-inner">
        <div className="text-xs font-headline font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase whitespace-nowrap">
          <span className="text-brand-blue">Deep expertise.</span> <br />
          <span className="text-slate-800 dark:text-slate-200"> The tools you trust.</span>
        </div>
        <div className="tech-list">
          {technologies.map(({ name, Icon }) => (
            <span key={name} className="hover:text-brand-blue transition-colors">
              <Icon size={24} strokeWidth={1.6} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
