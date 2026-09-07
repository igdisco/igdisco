import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
const members = [
  {
    name: "Darom Sovannareach",
    role: "Lead DevOps Engineer",
    image: "sovannareach.jpg",
  },
  {
    name: "Kheang Sokuntheary",
    role: "Security & Infrastructure Specialist",
    image: "sokuntheary.png",
  },
  {
    name: "Noun Phireak",
    role: "Security & Infrastructure Specialist",
    image: "phireak.png",
  },
  {
    name: "Heng Hongsea",
    role: "Network & Infrastructure Specialist",
    image: "hongsea.png",
  },
  { name: "Yin Soknara", role: "Automation Architect", image: "nara.png" },
  { name: "Phorn Sreyteng", role: "DevOps Engineer", image: "sreyteng.png" },
];
export default function Team() {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">05 / THE PEOPLE BEHIND THE SYSTEMS</span>
            <h2>
              Technical minds.
              <br />
              <span className="muted-heading">Human connections.</span>
            </h2>
          </div>
          <p>
            Meet the people who bring care, curiosity, and hands-on expertise to
            your infrastructure.
          </p>
        </div>
        <article className="founder">
          <div className="founder-photo">
            <Image
              src="/assets/images/chhaypor.jpeg"
              alt="Lim Chhaypor"
              fill
              sizes="(max-width: 600px) 100vw, 260px"
            />
          </div>
          <div className="founder-copy">
            <span className="eyebrow">A NOTE FROM OUR FOUNDER</span>
            <h3>
              Great technology starts
              <br />
              with understanding people.
            </h3>
            <p>
              Lim brings over a decade of experience in technology and a
              commitment to helping businesses find the right solutions for
              their next chapter.
            </p>
            <div className="founder-signature">
              <div>
                <strong>Lim Chhaypor</strong>
                <span>CEO</span>
              </div>
              <a
                href="#contact"
                className="round-link"
                aria-label="Start a conversation with IGDISCO"
              >
                <ArrowUpRight size={21} />
              </a>
            </div>
          </div>
        </article>
        <div className="team-grid">
          {members.map((member) => (
            <article className="person" key={member.name}>
              <div className="person-photo">
                <Image
                  src={`/assets/images/${member.image}`}
                  alt={member.name}
                  fill
                  sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 180px"
                />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
