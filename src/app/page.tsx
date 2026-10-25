import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const projects = [
  {
    name: "SUB/WAVE",
    type: "Live radio platform",
    description:
      "A self-hosted radio station where every listener hears the same broadcast, guided by an AI DJ and a shared request queue.",
    stack: "TypeScript · Next.js · Liquidsoap",
    href: "https://github.com/YashRaJShaRMaCODE/nightshift-radio",
  },
  {
    name: "UNNATI",
    type: "Farmer finance platform",
    description:
      "A bilingual platform for farmer trust and financial access, with focused tools for farmers, buyers, banks, and public agencies.",
    stack: "Django REST · Next.js · PostgreSQL",
    href: "https://github.com/YashRaJShaRMaCODE/unnati-farmer-platform",
  },
  {
    name: "AI Writing Assistant",
    type: "Writing tool",
    description:
      "A full-stack tool for rewriting and summarizing text, with a Django REST API and a focused React interface.",
    stack: "Django · React · REST API",
    href: "https://github.com/YashRaJShaRMaCODE/ai-writing-assistant",
  },
  {
    name: "CineScope",
    type: "Movie discovery",
    description:
      "A movie discovery and review experience with searchable titles, useful filters, ratings, and curated collections.",
    stack: "Django · MySQL · JavaScript",
    href: "https://github.com/YashRaJShaRMaCODE/Cinescope",
  },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "ElevateCareer.ai",
    period: "May 2026 to present",
    detail:
      "Building AI-powered learning products, including coding challenges, communication tools, and shared platform services.",
  },
  {
    role: "Backend Developer",
    company: "Bhumi Tech Pvt. Ltd.",
    period: "Dec 2025 to May 2026",
    detail:
      "Built and scaled an LMS across 15+ modules and automated monthly reporting to reduce manual work.",
  },
  {
    role: "Data Analytics Intern",
    company: "Cognetix Technology",
    period: "Jul 2025 to Dec 2025",
    detail: "Worked on data pipelines and dashboards for operational reporting.",
  },
  {
    role: "Software Intern",
    company: "Yhills Data Tech",
    period: "Aug 2024 to Jan 2025",
    detail: "Built Python and SQL applications and helped tune database queries.",
  },
];

const capabilities = [
  { title: "Product engineering", items: "React · Next.js · TypeScript" },
  { title: "Backend systems", items: "Python · Django · REST APIs" },
  { title: "Data", items: "PostgreSQL · MySQL · Redis · SQL" },
  { title: "Delivery", items: "Docker · Linux · GitHub Actions" },
];

export default function PortfolioPage() {
  return (
    <main id="top">
      <header className="site-header">
        <a aria-label="Yash Raj Sharma, home" className="wordmark" href="#top">
          YS<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:yashrajsharma786jmd@gmail.com">
          Let’s talk <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </header>

      <section aria-labelledby="hero-title" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack developer · Product builder</p>
          <h1 id="hero-title">
            I build <em>useful software</em> from interface to infrastructure.
          </h1>
          <p className="hero-summary">
            I’m Yash Raj Sharma, building clear product interfaces and dependable
            backend systems for real user needs.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowDownRight aria-hidden="true" size={17} />
            </a>
            <a className="text-link" href="/Yash_Raj_Sharma_Resume.pdf" download>
              Download résumé <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
        <figure className="hero-visual">
          <Image
            alt="SUB/WAVE radio control center showing the live station dashboard and broadcast tools"
            className="hero-image"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 44vw"
            src="/projects/subwave-dashboard.webp"
          />
        </figure>
      </section>

      <section aria-labelledby="work-title" className="work-section" id="work">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">A few things I’ve built.</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/YashRaJShaRMaCODE?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              All repositories <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <a
                    aria-label={`View ${project.name} on GitHub`}
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-stack">{project.stack}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-title" className="section-wrap experience-section" id="experience">
        <div className="experience-heading">
          <h2 id="experience-title">Built with teams, learned by shipping.</h2>
          <p className="heading-note">Product work across learning, software, and data.</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={`${item.company}-${item.role}`}>
              <div className="experience-period">{item.period}</div>
              <div>
                <h3>{item.role} <span>· {item.company}</span></h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-title" className="about-section" id="about">
        <div className="section-wrap about-layout">
          <div>
            <h2 id="about-title">Good software starts with a clear problem.</h2>
          </div>
          <div className="about-copy">
            <p>
              I focus on full-stack engineering. I enjoy shaping a problem,
              designing a dependable system, and polishing the details that make
              a product easier to use.
            </p>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <div className="capability" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="section-wrap site-footer" id="contact">
        <div>
          <p className="eyebrow">Have a good problem?</p>
          <h2>Let’s make something useful.</h2>
          <a className="email-link" href="mailto:yashrajsharma786jmd@gmail.com">
            yashrajsharma786jmd@gmail.com <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/YashRaJShaRMaCODE" rel="noreferrer" target="_blank">
            <Github aria-hidden="true" size={17} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/yash-raj-sharma-4627bb212" rel="noreferrer" target="_blank">
            <Linkedin aria-hidden="true" size={17} /> LinkedIn
          </a>
          <a href="mailto:yashrajsharma786jmd@gmail.com">
            <Mail aria-hidden="true" size={17} /> Email
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Yash Raj Sharma</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
