import {
  ArrowUpRight,
  Cloud,
  Infinity as InfinityIcon,
  Server,
  Settings2,
  ShieldCheck,
} from "lucide-react";
const services = [
  {
    letter: "D",
    title: "DevOps",
    subtitle: "Keep delivery moving.",
    description:
      "Connect development and operations with automated pipelines, multi-environment deployments, and a smoother path from code to production.",
    tags: [
      "CI/CD pipelines",
      "Kubernetes management",
      "Delivery automation",
    ],
    Icon: InfinityIcon,
  },
  {
    letter: "I",
    title: "Infrastructure",
    subtitle: "Build a solid foundation.",
    description:
      "Create consistent, version-controlled environments and dependable networks that grow with your business.",
    tags: [
      "Infrastructure as code",
      "Automation scripting",
      "Network architecture",
    ],
    Icon: Server,
  },
  {
    letter: "S",
    title: "Security",
    subtitle: "Confidence, built in.",
    description:
      "Protect the systems you depend on with security scanning, artifact management, and compliance checks woven into your pipelines.",
    tags: ["DevSecOps", "Compliance checks", "Infrastructure protection"],
    Icon: ShieldCheck,
  },
  {
    letter: "C",
    title: "Cloud",
    subtitle: "Make room for what’s next.",
    description:
      "Move forward with a considered migration strategy, high-availability architecture, and cloud spend that stays under control.",
    tags: ["Cloud migration", "Disaster recovery", "Cost optimization"],
    Icon: Cloud,
  },
  {
    letter: "O",
    title: "Operations",
    subtitle: "Keep everything in rhythm.",
    description:
      "Bring monitoring, logs, alerting, and ongoing optimization together to understand system health and act where it matters.",
    tags: ["Monitoring & logging", "Incident response", "Training & support"],
    Icon: Settings2,
  },
];
export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / THE MEANING BEHIND THE NAME</span>
            <h2>
              It all comes together.
              <br />
              <span className="disco-text">That’s D.I.S.C.O.</span>
            </h2>
          </div>
          <p>
            Five disciplines. One team looking after the technical side, so you
            can focus on your side of life.
          </p>
        </div>
        <div className="disco-services">
          {services.map(
            ({ letter, title, subtitle, description, tags, Icon }) => (
              <article className="disco-service" key={letter}>
                <div className="pillar-letter" aria-hidden="true">
                  {letter}
                </div>
                <div className="pillar-title">
                  <span className="pillar-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </span>
                  <h3>{title}</h3>
                  <span>{subtitle}</span>
                </div>
                <div className="pillar-description">
                  <p>{description}</p>
                  <div className="service-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="pillar-link"
                  aria-label={`Discuss ${title.toLowerCase()} services`}
                >
                  <ArrowUpRight size={22} />
                </a>
              </article>
            ),
          )}
        </div>
        <div className="services-footnote">
          <span>
            Your systems should work together. So should your IT partner.
          </span>
          <a href="#contact" className="text-link">
            Find your rhythm with us <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
