import { useEffect, useRef, useState } from 'react'
import './App.css'

const data = {
  name: 'Jon Lopez de Guereña',
  title: 'Senior Software Engineer',
  location: 'Bilbao, Spain',
  email: 'jon.ldg85@gmail.com',
  linkedin: 'linkedin.com/in/jonldg',
  github: 'github.com/jonldg',
  summary:
    'Senior software engineer specialized in backend systems and cloud applications. Passionate about building scalable, maintainable software and solving complex technical challenges. Experienced across the full development lifecycle from architecture to deployment.',
  experience: [
    {
      company: 'Appfire',
      role: 'Senior Software Engineer',
      period: '2021 — Present',
      location: 'Bilbao, Spain (Remote)',
      bullets: [
        'Designing and building backend services and cloud-native applications at scale.',
        'Collaborating with cross-functional teams across multiple time zones.',
        'Contributing to architecture decisions, code reviews, and technical strategy.',
      ],
    },
  ],
  education: [
    {
      school: 'Universidad de Deusto',
      degree: 'Computer Engineering',
      period: '2003 — 2010',
    },
    {
      school: 'Universidad de Deusto',
      degree: 'Postgraduate Studies',
      period: '2009 — 2012',
    },
  ],
  skills: [
    'TypeScript', 'JavaScript', 'Python', 'Java',
    'React', 'Node.js', 'FastAPI',
    'AWS', 'Docker', 'Kubernetes',
    'REST APIs', 'GraphQL',
    'PostgreSQL', 'MongoDB',
    'TensorFlow.js', 'Unity3D',
    'Git', 'CI/CD',
  ],
  certifications: [
    { name: 'HackerRank Problem Solving', date: 'Nov 2022' },
    { name: 'HackerRank REST API Certificate', date: 'Nov 2022' },
    { name: 'Learning 3D Graphics on the Web with Three.js', issuer: 'LinkedIn Learning', date: 'May 2019' },
  ],
  projects: [
    {
      name: 'Image Identifier',
      description: 'Browser-based image classification using React and TensorFlow.js, running inference entirely on the client side.',
      tags: ['React', 'TensorFlow.js'],
    },
    {
      name: 'Python Web Scraper',
      description: 'Intelligent scraping pipeline with FastAPI backend, BeautifulSoup parsing, and TensorFlow-powered data extraction.',
      tags: ['Python', 'FastAPI', 'BeautifulSoup', 'TensorFlow'],
    },
    {
      name: 'Fronton Simulator',
      description: 'Realistic physics simulation of the traditional Basque pelota game built in Unity3D.',
      tags: ['Unity3D', 'C#', 'Game Dev'],
    },
    {
      name: 'Egolike Platform',
      description: 'Social platform with lead iOS developer role — architected the mobile experience from the ground up.',
      tags: ['iOS', 'Swift', 'Mobile'],
    },
  ],
  languages: ['English', 'Spanish', 'Basque'],
}

function useInView(threshold = 0.15) {
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
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="container">
        {/* Hero */}
        <header className="hero">
          <div className="hero-text">
            <p className="hero-pre">Hello, I'm</p>
            <h1 className="hero-name">{data.name}</h1>
            <p className="hero-title">{data.title}</p>
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
          {data.experience.map((job) => (
            <div className="card" key={job.company + job.role}>
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
        </Section>

        {/* Projects */}
        <Section title="Projects" delay={100}>
          <div className="project-grid">
            {data.projects.map((p) => (
              <div className="project-card" key={p.name}>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="tag-row">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills" delay={150}>
          <div className="skill-grid">
            {data.skills.map((s) => (
              <span className="skill-chip" key={s}>{s}</span>
            ))}
          </div>
        </Section>

        {/* Two-col: Education + Certs */}
        <div className="two-col">
          <Section title="Education" delay={200}>
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

          <Section title="Certifications" delay={250}>
            {data.certifications.map((c) => (
              <div className="cert-item" key={c.name}>
                <p className="cert-name">{c.name}</p>
                <span className="cert-meta">{c.issuer ? `${c.issuer} · ` : ''}{c.date}</span>
              </div>
            ))}
          </Section>
        </div>

        {/* Languages */}
        <Section title="Languages" delay={300}>
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
