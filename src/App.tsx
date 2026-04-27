import { useEffect, useRef, useState } from 'react'
import './App.css'

const data = {
  name: 'Jon Lopez de Guereña',
  title: 'Software Engineer',
  subtitle: 'AI · Backend & Distributed Systems · Atlassian Ecosystem · Cloud & Architecture',
  location: 'Bilbao, Spain',
  email: 'jon.ldg85@gmail.com',
  linkedin: 'linkedin.com/in/jonldg',
  website: 'jonlo.dev',
  summary:
    'Senior software engineer specialized in backend systems and cloud applications, focused on building scalable, reliable, and maintainable software. I work primarily on the Atlassian ecosystem (Forge & Connect for Confluence), designing backend services, implementing complex data migrations, and contributing to production systems that support workflow automation and document management at scale. I care deeply about pragmatic architecture, clean code, and engineering practices that allow teams to move fast while maintaining long-term system integrity.',
  experience: [
    {
      company: 'Appfire',
      role: 'Senior Software Engineer',
      period: 'Feb 2024 — Present',
      location: 'Bilbao',
      bullets: [
        'Building scalable cloud applications for the Atlassian ecosystem (Forge & Connect), extending Confluence functionality.',
        'Architected backend systems with Node.js, TypeScript and REST APIs following hexagonal architecture and clean code principles.',
        'Designed and implemented complex data migrations and performance improvements for production systems.',
        'Implemented automated testing strategies — unit, integration and E2E — using Jest and Playwright.',
        'Adopted AI-assisted development workflows (Cursor, ChatGPT) to support spec-driven development and improve engineering productivity.',
      ],
    },
    {
      company: 'TECNALIA Research & Innovation',
      role: 'Senior Software Engineer',
      period: 'May 2019 — Feb 2024',
      location: 'Derio',
      bullets: [
        'Designed and developed WebXR applications using React and Three.js to deliver immersive VR/AR experiences in the browser.',
        'Built SPAs with React and modern JavaScript, focusing on maintainable front-end architectures.',
        'Developed backend services and APIs using Node.js, Express and Java; implemented real-time features with Socket.IO.',
        'Containerized applications with Docker, deployed microservices on Kubernetes (AKS), and ran CI/CD pipelines on GitLab CI and Azure.',
        'Mentored junior developers and worked in Agile/Scrum environments on research-driven software projects.',
      ],
    },
    {
      company: 'LUDUS — VR for Industry & Emergency Services',
      role: 'Co-founder & Lead Developer',
      period: 'Aug 2011 — Jul 2020',
      location: 'Bilbao',
      bullets: [
        'Co-founded the company and led a team of up to 8 engineers building VR training applications for emergency response and industrial safety.',
        'Designed the core Unity3D (C#) framework architecture enabling reusable components across projects.',
        'Developed backend services and APIs with Node.js/Express, and operated cloud infrastructure on AWS.',
        'Developed mobile games and apps for iOS and Android using Objective-C, Xamarin and Unity3D.',
        'Taught iOS mobile development at Cebanc and game development at IFPS Tartanga.',
      ],
    },
    {
      company: 'IDEATECA',
      role: 'iOS Developer',
      period: 'Jan 2010 — Jun 2011',
      location: 'Bilbao',
      bullets: [
        'Contributed to iBasket — a basketball game that reached 15M+ downloads worldwide and ranked Top 10 in the App Store across multiple countries.',
        'Developed gameplay features for iPhone and iPad using Objective-C and the iOS SDK.',
      ],
    },
    {
      company: 'Campusdeportivo',
      role: '.NET Developer',
      period: '2006 — 2007',
      location: 'Bilbao',
      bullets: [
        'Web development with C# and ASP.NET.',
      ],
    },
  ],
  skills: [
    'TypeScript', 'Node.js', 'Express.js', 'React',
    'REST APIs', 'Hexagonal Architecture', 'Clean Code',
    'AWS (Lambda · S3 · DynamoDB)', 'Docker', 'Kubernetes',
    'CI/CD', 'GitLab CI', 'Azure',
    'Jest', 'Playwright', 'Cucumber / Gherkin', 'TestCafe',
    'WebXR', 'Three.js', 'Socket.IO',
    'Unity3D', 'C#', 'Objective-C',
    'Atlassian Forge', 'Systems Design', 'Cloud-Native Architecture',
  ],
  education: [
    { school: 'Universidad de Deusto', degree: 'Computer Engineering', period: '2003 — 2010' },
    { school: 'Oulun yliopisto', degree: 'Computer Engineering (Exchange)', period: '2009 — 2010' },
    { school: 'Inedi Design School', degree: 'Master in Graphic Design', period: '2011 — 2012' },
  ],
  certifications: [
    { name: 'HackerRank Problem Solving', date: 'Nov 2022' },
    { name: 'HackerRank REST API Certificate', date: 'Nov 2022' },
    { name: 'Learning 3D Graphics on the Web with Three.js', issuer: 'LinkedIn Learning', date: 'May 2019' },
  ],
  languages: ['Basque', 'Spanish', 'English'],
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref}
      className={`resume-section ${visible ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-line" />
      </div>
      {children}
    </section>
  )
}

function App() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="container">
        {/* Hero */}
        <header className="hero">
          <div className="hero-text">
            <p className="hero-pre">Hello, I'm</p>
            <h1 className="hero-name">{data.name}</h1>
            <p className="hero-title">{data.title}</p>
            <p className="hero-subtitle">{data.subtitle}</p>
            <p className="hero-location">
              <span className="dot" /> {data.location}
            </p>
            <div className="hero-links">
              <button className="link-chip" onClick={copyEmail}>
                {copied ? '✓ Copied!' : data.email}
              </button>
              <a className="link-chip" href={`https://${data.linkedin}`} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="link-chip" href={`https://${data.website}`} target="_blank" rel="noreferrer">
                {data.website}
              </a>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar-ring">
              <div className="avatar-initials">JL</div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <Section title="About">
          <p className="summary">{data.summary}</p>
        </Section>

        {/* Experience */}
        <Section title="Experience" delay={50}>
          <div className="experience-list">
            {data.experience.map((job) => (
              <div className="card" key={job.company + job.period}>
                <div className="card-head">
                  <div>
                    <h3 className="card-title">{job.role}</h3>
                    <span className="card-subtitle">{job.company} · {job.location}</span>
                  </div>
                  <span className="card-period">{job.period}</span>
                </div>
                <ul className="bullet-list">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills" delay={100}>
          <div className="skill-grid">
            {data.skills.map((s) => (
              <span className="skill-chip" key={s}>{s}</span>
            ))}
          </div>
        </Section>

        {/* Two-col: Education + Certs */}
        <div className="two-col">
          <Section title="Education" delay={150}>
            {data.education.map((e) => (
              <div className="edu-item" key={e.school + e.period}>
                <div>
                  <h3 className="edu-degree">{e.degree}</h3>
                  <span className="edu-school">{e.school}</span>
                </div>
                <span className="edu-period">{e.period}</span>
              </div>
            ))}
          </Section>

          <Section title="Certifications" delay={200}>
            {data.certifications.map((c) => (
              <div className="cert-item" key={c.name}>
                <p className="cert-name">{c.name}</p>
                <span className="cert-meta">{c.issuer ? `${c.issuer} · ` : ''}{c.date}</span>
              </div>
            ))}
          </Section>
        </div>

        {/* Languages */}
        <Section title="Languages" delay={250}>
          <div className="lang-row">
            {data.languages.map((l) => (
              <div className="lang-chip" key={l}>{l}</div>
            ))}
          </div>
        </Section>

        <footer className="footer">
          <p>Built with React + Vite · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
