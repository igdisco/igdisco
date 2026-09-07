const steps = [
  {
    title: "Listen & assess",
    text: "We get to know your infrastructure, your people, and what’s getting in the way.",
    output: "A shared understanding",
  },
  {
    title: "Map the way forward",
    text: "Together, we define the architecture, priorities, and a practical plan for delivery.",
    output: "A clear roadmap",
  },
  {
    title: "Build & implement",
    text: "We build, automate, and migrate with care, keeping your team involved along the way.",
    output: "Systems that work for you",
  },
  {
    title: "Support & evolve",
    text: "We stay focused on system health, ongoing optimization, and your next challenge.",
    output: "A long-term partnership",
  },
];
export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 / OUR APPROACH</span>
            <h2>
              A clear process.
              <br />
              <span className="muted-heading">A team at every step.</span>
            </h2>
          </div>
          <p>
            No black boxes. Just thoughtful collaboration from the first
            conversation to what comes next.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article key={step.title}>
              <div className="step-track">
                <span>0{index + 1}</span>
                <i />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="step-output">{step.output}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
