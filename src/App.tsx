import { useEffect, useRef, useState } from 'react'
import { Mail } from 'lucide-react'
import avatarImg from './assets/avatar.jpeg'
import logoAppfire from './assets/appfire_logo.jpeg'
import logoTecnalia from './assets/tecnalia_research__innovation_logo.jpeg'
import logoLudus from './assets/ludus_hse_training_with_vr_logo.jpeg'
import logoIdeateca from './assets/ideateca_logo.jpeg'
import './App.css'

const data = {
  name: 'Jon Lopez de Guereña',
  title: 'Software Engineer',
  subtitle: 'AI · Cloud & Architecture · Backend & Distributed Systems · Atlassian Ecosystem',
  location: 'Bilbao, Spain',
  email: 'jon.ldg85@gmail.com',
  linkedin: 'linkedin.com/in/jonldg',
  website: 'jonlo.dev',
  summary:
    'Senior software engineer focused on backend systems and cloud architecture, currently building scalable Atlassian ecosystem apps (Forge & Connect for Confluence). Passionate about pragmatic architecture, clean code, and engineering practices that let teams move fast without sacrificing long-term integrity.',
  experience: [
    {
      company: 'Appfire',
      logo: logoAppfire,
      role: 'Senior Software Architect',
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
      logo: logoTecnalia,
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
      logo: logoLudus,
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
      logo: logoIdeateca,
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
      logo: null,
      role: '.NET Developer',
      period: '2006 — 2007',
      location: 'Bilbao',
      bullets: [
        'Web development with C# and ASP.NET.',
      ],
    },
  ],
  skills: [
    'Spec-Driven Development', 'AI-assisted Development', 'Cursor', 'ChatGPT', 'TypeScript', 'Node.js', 'Express.js', 'React',
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
  teaching: [
    { course: 'iOS Mobile App Development', institution: 'Cebanc', period: '2013 — 2016' },
    { course: 'Game Development with Unity3D', institution: 'IFPS Tartanga', period: '2014 — 2016' },
  ],
  languages: ['Basque', 'Spanish', 'English'],
}

function ConstellationField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight
    }
    resize()

    const NODE_COUNT = 90
    const MAX_DIST = 160

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.8,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }

      ctx.lineWidth = 0.6
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.28
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(160,185,255,${alpha})`
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(200,215,255,0.75)'
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" />
}

function CompanyLogo({ logo, company }: { logo: string | null; company: string }) {
  const initials = company.split(/[\s&—]/)[0].slice(0, 2).toUpperCase()
  if (!logo) return <div className="company-initials">{initials}</div>
  return <img className="company-logo" src={logo} alt={company} />
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

      {/* Full-viewport hero */}
      <header className="hero">
        <ConstellationField />
        <div className="hero-inner">
          <div className="avatar-ring">
            <img className="avatar-photo" src={avatarImg} alt="Jon Lopez de Guereña" />
          </div>
          <p className="hero-pre">Hello, I'm</p>
          <h1 className="hero-name">{data.name}</h1>
          <p className="hero-title">{data.title}</p>
          <p className="hero-subtitle">{data.subtitle}</p>
          <p className="hero-location">
            <span className="dot" /> {data.location}
          </p>
          <div className="hero-links">
            <button className="icon-btn" onClick={copyEmail} title={copied ? 'Copied!' : data.email}>
              <Mail size={20} />
            </button>
            <a className="icon-btn" href={`https://${data.linkedin}`} target="_blank" rel="noreferrer" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.989V9h3.101v1.561h.044c.432-.816 1.487-1.676 3.059-1.676 3.27 0 3.874 2.152 3.874 4.948v6.619zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.601 13.019H3.734V9h3.204v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="hero-scroll-line" />
        </div>
      </header>

      <div className="container">

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
                  <CompanyLogo logo={job.logo} company={job.company} />
                  <div className="card-head-text">
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

        {/* Teaching */}
        <Section title="Teaching" delay={200}>
          <div className="teaching-list">
            {data.teaching.map((t) => (
              <div className="teaching-item" key={t.course}>
                <div>
                  <h3 className="teaching-course">{t.course}</h3>
                  <span className="teaching-institution">{t.institution}</span>
                </div>
                <span className="edu-period">{t.period}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Languages */}
        <Section title="Languages" delay={250}>
          <div className="lang-row">
            {data.languages.map((l) => (
              <div className="lang-chip" key={l}>{l}</div>
            ))}
          </div>
        </Section>

        <footer className="footer">
          <p>{new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
