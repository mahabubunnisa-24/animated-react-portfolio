import { useState } from 'react'
import './App.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node.js', 'Express.js', 'Python', 'SQL']

const projects = [
  {
    title: 'Expense Tracker',
    description: 'A simple application to record expenses and understand spending.',
    image: '/images/project2.png',
    tags: ['React JS', 'CSS', 'JavaScript'],
    link: '#'
  },
  {
    title: 'Movie Explorer',
    description: 'A movie discovery interface for browsing and viewing movie information.',
    image: '/images/project1.png',
    tags: ['React JS', 'API', 'CSS'],
    link: '#'
  },
  {
    title: 'Weather App',
    description: 'A weather application that presents weather information in a clear layout.',
    image: '/images/project3.png',
    tags: ['JavaScript', 'API', 'CSS'],
    link: '#'
  }
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <header className="navbar">
      <a className="brand" href="#home">M<span>.</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
        ))}
      </nav>
    </header>
  )
}

function Home() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="status-dot" /> AVAILABLE TO LEARN & BUILD</p>
        <h1>Hello, I'm <span>Mahabubunnisa</span></h1>
        <h2>I'm a <span className="typing">Web Developer</span></h2>
        <p className="hero-text">
          I enjoy creating clean, responsive and user-friendly web experiences.
          I am continuously learning and improving my development skills.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore my work <span>↗</span></a>
          <a className="button secondary" href="/resume/resume.pdf" target="_blank" rel="noreferrer">View resume</a>
        </div>
        <div className="hero-meta"><span>React JS</span><i /> <span>Frontend Development</span><i /> <span>UI Design</span></div>
      </div>
      <div className="hero-visual">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="profile-card">
          <img src="/images/profile.jpg" alt="Mahabubunnisa profile" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <div className="profile-fallback">M<span>.</span></div>
        </div>
        <div className="floating-chip chip-top">✦ Creative thinking</div>
        <div className="floating-chip chip-bottom">⌘ Building with React</div>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  )
}

function SectionHeading({ eyebrow, title, accent }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{title} <span>{accent}</span></h2></div>
}

function About() {
  return (
    <section className="section content-section" id="about">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious mind." accent="Creative builder." />
      <div className="about-grid reveal">
        <p className="about-lead">I am an aspiring web developer who likes turning ideas into useful digital experiences.</p>
        <div className="about-detail">
          <p>I work with web technologies to build responsive interfaces and explore how websites work from design to development. I enjoy learning, solving problems and improving my code step by step.</p>
          <div className="stats"><div><strong>03+</strong><span>Practice projects</span></div><div><strong>08</strong><span>Core technologies</span></div><div><strong>100%</strong><span>Learning mindset</span></div></div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section content-section" id="skills">
      <SectionHeading eyebrow="WHAT I WORK WITH" title="Tools &" accent="technologies." />
      <div className="skill-grid reveal">
        {skills.map((skill, index) => <div className="skill-card" key={skill} style={{ '--delay': `${index * 70}ms` }}><span className="skill-number">0{index + 1}</span><strong>{skill}</strong><span className="skill-arrow">↗</span></div>)}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section content-section" id="projects">
      <SectionHeading eyebrow="SELECTED WORK" title="Things I've" accent="built." />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card reveal" key={project.title} style={{ '--delay': `${index * 100}ms` }}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} screenshot`} onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="image-placeholder">PROJECT 0{index + 1}</span>
              <a className="project-open" href={project.link} aria-label={`Open ${project.title}`}>↗</a>
            </div>
            <div className="project-info"><div><p className="project-label">0{index + 1} / PROJECT</p><h3>{project.title}</h3></div><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </article>
        ))}
      </div>
      <p className="hint">Replace the sample screenshots and project links with your own files and URLs.</p>
    </section>
  )
}

function Experience() {
  return (
    <section className="section content-section" id="experience">
      <SectionHeading eyebrow="MY JOURNEY" title="Learning through" accent="experience." />
      <div className="timeline reveal">
        <div className="timeline-marker" />
        <div><p className="project-label">CURRENT EXPERIENCE</p><h3>Web Developer Intern</h3><h4>HRA Group of Technologies</h4><p>Working on web development tasks, building user interfaces and improving practical skills with modern web technologies.</p><span className="timeline-date">Present</span></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
      <h2>Let's make something<br /><span>meaningful together.</span></h2>
      <p>I'm open to learning opportunities, collaboration and conversations about web development.</p>
      <a className="button primary" href="mailto:your-email@example.com">Email me <span>↗</span></a>
      <p className="email-hint">Update the email address in App.jsx before publishing.</p>
    </section>
  )
}

export default function App() {
  return <><Navbar /><main><Home /><About /><Skills /><Projects /><Experience /><Contact /></main><footer><a className="brand" href="#home">M<span>.</span></a><p>Designed & built with React JS</p><a href="#home">BACK TO TOP ↑</a></footer></>
}
