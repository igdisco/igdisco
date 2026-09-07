import {
  Workflow,
  Boxes,
  Activity,
  ShieldCheck,
  Cloud,
  Terminal,
  Network,
  GraduationCap
} from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import styles from "./Capabilities.module.css";

const capabilities = [
  {
    Icon: Workflow,
    themeColor: "blue",
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
    themeColor: "blue",
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
    themeColor: "sky",
    title: "Monitoring & logging solutions",
    points: [
      "Proactive infrastructure and application monitoring.",
      "Centralized log management with ELK Stack, Graylog, or cloud-native tooling.",
      "Real-time performance tracking, alerting, and incident management with custom dashboards.",
    ],
    tools: ["Prometheus", "Grafana", "Datadog", "ELK Stack", "Graylog"],
  },
  {
    Icon: ShieldCheck,
    themeColor: "purple",
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
    themeColor: "sky",
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
    themeColor: "blue",
    title: "Infrastructure as code & automation",
    points: [
      "Automated deployments and updates across environments.",
      "Configuration management and resource provisioning.",
      "Log and backup management handled by script, not by hand.",
    ],
    tools: ["Terraform", "Ansible", "AWS CDK", "CloudFormation", "Bash", "Python"],
  },
  {
    Icon: Network,
    themeColor: "sky",
    title: "Infrastructure monitoring",
    points: [
      "Application performance management across every environment.",
      "IT infrastructure monitoring for servers, networks, and databases.",
      "Enterprise application monitoring for ERP, CRM, and critical systems.",
      "Digital workspace monitoring (Citrix, VMware Horizon, Microsoft RDS).",
      "Hybrid & multi-cloud performance management; End-user experience monitoring.",
    ],
    tools: ["APM", "Hybrid cloud", "End-user experience"],
  },
  {
    Icon: GraduationCap,
    themeColor: "purple",
    title: "Training & ongoing support",
    points: [
      "Assessment of your current infrastructure and processes, then an adoption strategy.",
      "Training that helps your team adopt DevOps practices with confidence.",
      "Ongoing support so the practices stick long after go-live.",
    ],
    tools: ["Assessment & planning", "Team enablement", "Continuous support"],
  },
];

export default function Capabilities() {
  return (
    <section className={styles.section} id="catalog">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            02 / WHAT WE DELIVER
          </p>
          <h2 className={styles.title}>
            The full catalog.<br />
            <span className={styles.titleSubtitle}>In practical terms.</span>
          </h2>
        </div>
        <p className={styles.description}>
          From the first pipeline to the last dashboard — here is the work itself, and the tools we do it with.
        </p>
      </div>

      {/* 8 Practical Service Cards Grid */}
      <div className={styles.grid}>
        {capabilities.map(({ Icon, themeColor, title, points, tools }) => (
          <div
            key={title}
            className={styles.card}
            data-theme-color={themeColor}
          >
            <div>
              <div className={styles.iconWrapper}>
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className={styles.cardTitle}>
                {title}
              </h3>
              <ul className={styles.pointList}>
                {points.map((point) => (
                  <li key={point} className={styles.pointItem}>
                    <span className={styles.pointDot}></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.toolsContainer}>
              {tools.map((tool) => (
                <span key={tool} className={styles.toolBadge}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom catalog prompt */}
      <div className={styles.footer}>
        <a className={styles.footerLink} href="#consultation">
          <span>Need something that isn&apos;t on the list? It&apos;s usually still a conversation worth having.</span>
          <span className={styles.footerLinkAccent}>Ask about your setup</span>
          <ArrowUpRight size={16} className={styles.footerLinkIcon} />
        </a>
      </div>
    </section>
  );
}
