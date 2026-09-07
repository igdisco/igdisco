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
        <p>
          Deep expertise.
          <br />
          <strong>The tools you trust.</strong>
        </p>
        <div className="tech-list">
          {technologies.map(({ name, Icon }) => (
            <span key={name}>
              <Icon size={24} strokeWidth={1.6} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
