import {
  Activity,
  ArrowUpRight,
  Boxes,
  Cloud,
  GaugeCircle,
  GraduationCap,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    Icon: Workflow,
    title: "CI/CD pipeline management",
    points: [
      "Custom pipeline architecture for code integration, testing, and deployment.",
      "Multi-environment delivery to staging, testing, and production, with rollback.",
      "Pipeline optimization through caching, parallel builds, and environment tuning.",
    ],
    tools: ["GitLab CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    Icon: Boxes,
    title: "Kubernetes deployment & management",
    points: [
      "Full cluster setup for containerized workloads, on-premise and in the cloud.",
      "Monitoring, scaling, and troubleshooting of your Kubernetes environments.",
      "Managed updates, security patching, resource optimization, and automated backups.",
    ],
    tools: ["AWS EKS", "GKE", "AKS"],
  },
  {
    Icon: Activity,
    title: "Monitoring & logging solutions",
    points: [
      "Proactive infrastructure and application monitoring.",
      "Centralized log management with ELK Stack, Graylog, or cloud-native tooling.",
      "Real-time performance tracking, alerting, and incident management.",
      "Custom dashboards and reporting for visibility into system health.",
    ],
    tools: ["Prometheus", "Grafana", "Datadog", "ELK Stack", "Graylog"],
  },
  {
    Icon: ShieldCheck,
    title: "Security integration (DevSecOps)",
    points: [
      "Security scanning, artifact management, and compliance checks built into pipelines.",
      "Security practices folded into the DevOps workflow, not bolted on afterwards.",
      "Secure software development from the first commit to production.",
    ],
    tools: ["Pipeline scanning", "Artifact management", "Compliance checks"],
  },
  {
    Icon: Cloud,
    title: "Cloud infrastructure management",
    points: [
      "High availability and auto-scaling configuration.",
      "Cloud performance monitoring and governance.",
      "Disaster recovery planning and implementation.",
      "Cost optimization strategies that reduce cloud spend.",
    ],
    tools: ["AWS", "Microsoft Azure", "Huawei Cloud"],
  },
  {
    Icon: Terminal,
    title: "Infrastructure as code & automation",
    points: [
      "Automated deployments and updates across environments.",
      "Configuration management and resource provisioning.",
      "Log and backup management handled by script, not by hand.",
    ],
    tools: [
      "Terraform",
      "Ansible",
      "AWS CDK",
      "CloudFormation",
      "Bash",
      "Python",
      "PowerShell",
    ],
  },
  {
    Icon: GaugeCircle,
    title: "Infrastructure monitoring",
    points: [
      "Application performance management across every environment.",
      "IT infrastructure monitoring for servers, networks, and databases.",
      "Enterprise application monitoring for ERP, CRM, and other critical systems.",
      "Digital workspace monitoring for Citrix, VMware Horizon, and Microsoft RDS.",
      "Hybrid and multi-cloud performance management.",
      "End-user experience monitoring to catch bottlenecks early.",
    ],
    tools: ["APM", "Hybrid cloud", "End-user experience"],
  },
  {
    Icon: GraduationCap,
    title: "Training & ongoing support",
    points: [
      "Assessment of your current infrastructure and processes, then a DevOps adoption strategy shaped around it.",
      "Training that helps your team adopt DevOps practices with confidence.",
      "Ongoing support so the practices stick long after go-live.",
    ],
    tools: ["Assessment & planning", "Team enablement", "Continuous support"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / WHAT WE DELIVER</span>
            <h2>
              The full catalog.
              <br />
              <span className="muted-heading">In practical terms.</span>
            </h2>
          </div>
          <p>
            From the first pipeline to the last dashboard — here is the work
            itself, and the tools we do it with.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ Icon, title, points, tools }) => (
            <article className="capability-card" key={title}>
              <span className="capability-icon">
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
              <ul className="capability-list">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="capability-tools">
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="services-footnote">
          <span>
            Need something that isn’t on the list? It’s usually still a
            conversation worth having.
          </span>
          <a href="#contact" className="text-link">
            Ask about your setup <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
