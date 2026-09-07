import { ArrowUpRight, Gauge, ShieldCheck, Workflow } from "lucide-react";
const benefits = [
  {
    Icon: Workflow,
    title: "Ship without the bottlenecks.",
    text: "Give your team a smoother path from idea to production with automated delivery workflows.",
  },
  {
    Icon: ShieldCheck,
    title: "Build on a stronger foundation.",
    text: "Make security part of your architecture, with practical controls woven into the way you work.",
  },
  {
    Icon: Gauge,
    title: "Be ready for what’s next.",
    text: "Create adaptable infrastructure that supports your business as its needs evolve.",
  },
];
export default function Features() {
  return (
    <section id="features" className="section benefits-section">
      <div className="container benefits-grid">
        <div>
          <span className="eyebrow">03 / WHY IGDISCO</span>
          <h2>
            You focus on life.
            <br />
            We focus on{" "}
            <br />
            <span className="accent-word">your systems.</span>
          </h2>
          <p className="section-description">
            Peace of mind starts with a connected approach to IT. We work
            alongside your team to understand the challenges, make the right
            calls, and build something that lasts.
          </p>
          <div className="purpose-pair">
            <div>
              <span>OUR VISION</span>
              <p>
                Everyone can party all night without worrying about
                infrastructure and security — it stays up, 24/7.
              </p>
            </div>
            <div>
              <span>OUR MISSION</span>
              <p>
                Bringing cloud computing and security solutions to the world,
                and serving as a trusted source of infrastructure technology.
              </p>
            </div>
          </div>
          <a className="text-link" href="#team">
            Meet your engineering partners <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="benefits-list">
          {benefits.map(({ Icon, title, text }, index) => (
            <article key={title}>
              <span className="benefit-icon">
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <div>
                <span className="benefit-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
