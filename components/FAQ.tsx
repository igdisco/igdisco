import { ArrowUpRight, Plus } from "lucide-react";
const faqs = [
  {
    question: "Which cloud platforms do you work with?",
    answer:
      "We are a cloud service partner across AWS, Microsoft Azure, and Huawei Cloud, including hybrid and multi-cloud environments. That covers compute, storage, and security on each, plus high availability, auto-scaling, and cost optimization. We help you choose an approach that fits your existing systems and business needs.",
  },
  {
    question: "Do you manage Kubernetes clusters?",
    answer:
      "Yes. We handle full cluster deployment for containerized workloads on-premise and in the cloud (AWS EKS, GKE, AKS), then take on monitoring, scaling, and troubleshooting. Our managed service covers updates, security patching, resource optimization, and automated backups.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Yes. We work alongside your team, starting with an assessment of your current workflows and infrastructure. We agree on responsibilities and keep your engineers involved throughout implementation.",
  },
  {
    question: "How long does a migration project take?",
    answer:
      "It depends on your infrastructure and the scope of the move. We assess complexity, dependencies, and business priorities before agreeing on a realistic timeline during the strategy phase.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Ongoing monitoring, optimization, and support can be scoped to your needs. We work with you to define the right level of support for your systems.",
  },
  {
    question: "Can you train our team on DevOps practices?",
    answer:
      "Yes. We start by assessing your current infrastructure and processes to shape a DevOps adoption strategy, then provide training and ongoing support so your team can carry the practices forward themselves.",
  },
  {
    question: "Can you help with security requirements?",
    answer:
      "We integrate security practices into infrastructure design and delivery — a DevSecOps approach, with security scanning, artifact management, and compliance checks built into your pipelines. During assessment, we review your requirements and plan the controls your environment needs.",
  },
];
export default function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-grid">
        <div>
          <span className="eyebrow">06 / A LITTLE MORE CLARITY</span>
          <h2>
            Good questions.
            <br />
            <span className="muted-heading">Straight answers.</span>
          </h2>
          <p className="section-description">
            Have something else on your mind?
            <br />
            We’re always up for a conversation.
          </p>
          <a href="#contact" className="text-link">
            Ask us anything <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details key={faq.question} name="questions" open={i === 0}>
              <summary>
                {faq.question}
                <Plus size={19} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
