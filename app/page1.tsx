"use client";

import { useEffect, useMemo, useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { FaGithub, FaLinkedin, } from "react-icons/fa6";
import {
  SiPhp, SiTypescript, SiJavascript, SiHtml5, SiLaravel, SiYii,
  SiCodeigniter, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiWordpress,
  SiJquery, SiBootstrap, SiTailwindcss, SiMysql,
  SiQuickbooks, SiGit, SiPostman, SiJira,
  SiVercel, SiSublimetext, SiXampp, SiFilezilla, SiHostinger, SiJson, SiGithub, 
} from "react-icons/si";
import {
  ArrowRight, BriefcaseBusiness, Check, ChevronLeft, ChevronRight, Code2,
  Database, Download, ExternalLink, Mail, Menu, Palette, Phone, Server,
  Sparkles, UserRound, Workflow, X, FileText, Wrench, Building2, MapPin
} from "lucide-react";

const skillCategories = [
  {
    name: "Programming",
    icon: Code2,
    description: "Languages and core technologies I use to create reliable applications.",
    items: [
      ["PHP", SiPhp], ["VB.NET", Code2], ["TypeScript", SiTypescript],
      ["JavaScript", SiJavascript], ["HTML5", SiHtml5],  ["JSON", SiJson]
    ]
  },
  {
    name: "Frameworks & Libraries",
    icon: Workflow,
    description: "Modern frameworks for responsive interfaces and scalable backends.",
    items: [
      ["Laravel", SiLaravel], ["Yii Framework", SiYii], ["CodeIgniter", SiCodeigniter],
      ["React.js", SiReact], ["Next.js", SiNextdotjs], ["Vue.js", SiVuedotjs],
      ["Node.js", SiNodedotjs], ["WordPress", SiWordpress], ["jQuery", SiJquery],
      ["Bootstrap", SiBootstrap], ["Tailwind CSS", SiTailwindcss]
    ]
  },
  {
    name: "Databases",
    icon: Database,
    description: "Database design, querying, optimization, and data management.",
    items: [["MySQL", SiMysql], ["Microsoft SQL Server", Database]]
  },
  {
    name: "Reporting & ERP",
    icon: FileText,
    description: "Reporting and ERP platforms used for payroll and finance workflows.",
    items: [["Crystal Reports", FileText], ["Sage 300", Building2], ["NetSuite", Server], ["QuickBooks", SiQuickbooks]]
  },
  {
    name: "Development Tools",
    icon: Wrench,
    description: "Tools used for planning, coding, testing, deployment, and support.",
    items: [
      ["Git", SiGit], ["Postman", SiPostman], ["Jira", SiJira], ["Visual Studio", Code2],
      ["VS Code", Code2], ["NetBeans", Code2], ["HeidiSQL", Database],
      ["Vercel", SiVercel], ["Sublime Text", SiSublimetext], ["MySQL Workbench", SiMysql],
      ["Notepad++", FileText], ["XAMPP", SiXampp]
    ]
  },
  {
    name: "Hosting & Infrastructure",
    icon: Server,
    description: "Hosting, deployment, file transfer, and email security platforms.",
    items: [["IONOS", Server], ["FileZilla", SiFilezilla], ["Barracuda Email Security", Mail], ["HostGator", SiHostinger]]
  },
  {
    name: "Productivity & Design",
    icon: Palette,
    description: "Design and productivity software supporting polished project delivery.",
    items: [["Microsoft Office Suite", FileText], ["Nitro PDF Pro", FileText], ["Adobe Photoshop", FaPaintBrush],  ["Canva", Palette]]
  }
] as const;

const experiences = [
  {
    period: "2021 — Present",
    role: "Software Developer",
    company: "Eva Care Management Consultancy Inc.",
    description: "Develop and maintain web systems, payroll solutions, reporting tools, database workflows, and ERP integrations that support daily business operations.",
    icon: BriefcaseBusiness
  },
  {
    period: "2018 — 2021",
    role: "Web Developer",
    company: "Previous Company",
    description: "Built and maintained responsive websites and internal systems, translated business requirements into features, and supported production applications.",
    icon: Code2
  },
  {
    period: "2016 — 2018",
    role: "Junior Developer",
    company: "Previous Company",
    description: "Assisted with web application development, database management, troubleshooting, testing, and continuous system improvements.",
    icon: Database
  }
];

const projects = [
  {
    title: "Payroll Management System",
    subtitle: "Enterprise payroll application",
    description: "A web-based payroll platform with timekeeping, payroll computation, approvals, reporting, and employee management.",
    icon: FileText,
    preview: "payroll"
  },
  {
    title: "EFTC 2.0 Timekeeping System",
    subtitle: "Attendance and workforce platform",
    description: "A multi-device timekeeping system with real-time logs, employee schedules, pay details, and labor analytics.",
    icon: Workflow,
    preview: "analytics"
  },
  {
    title: "Sage 300 Integration",
    subtitle: "ERP and finance automation",
    description: "An integration workflow connecting payroll data with Sage 300 and NetSuite-ready account mappings.",
    icon: Database,
    preview: "integration"
  }
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentSkill = useMemo(() => skillCategories[activeSkill], [activeSkill]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const changeSkill = (direction: number) => {
    setActiveSkill((prev) => (prev + direction + skillCategories.length) % skillCategories.length);
  };

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">DP</span>
            <span><strong>DYANN P.</strong><small>SOFTWARE DEVELOPER</small></span>
          </a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[
              ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"],
              ["Experience", "#experience"], ["Projects", "#projects"], ["Contact", "#contact"]
            ].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="download-btn" href="/resume.pdf" download><Download size={17} /> Download CV</a>
          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">SOFTWARE DEVELOPER</span>
            <h1>Building Web Systems<br />That <span>Drive Results</span></h1>
            <p>Software Developer with expertise in PHP, Laravel, Vue.js, React.js, and MySQL. I build scalable web applications, payroll systems, and integrations with ERP platforms like Sage 300 and NetSuite.</p>
            <div className="hero-actions">
              <a href="#projects" className="primary-btn">View My Work <ArrowRight size={18} /></a>
              <a href="#contact" className="secondary-btn"><Mail size={18} /> Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://github.com" aria-label="GitHub"><SiGithub /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin   /></a>
              <a href="mailto:youremail@example.com" aria-label="Email"><Mail /></a>
            </div>
          </Reveal>
          <Reveal className="hero-visual">
            <div className="portrait-glow" />
            <div className="portrait-card">
              <span className="portrait-initials">DP</span>
              <small>Replace this area with your profile photo</small>
            </div>
            <span className="dot-pattern" />
          </Reveal>
        </div>
      </section>

      <section className="panel-section" id="about">
        <Reveal className="about-panel">
          <div className="about-copy">
            <div className="section-icon"><UserRound /></div>
            <div>
              <h2>About Me</h2>
              <span className="title-line" />
              <p>I&apos;m a passionate Software Developer focused on creating efficient, user-friendly, and scalable web systems. I enjoy solving complex problems and turning ideas into practical digital solutions.</p>
              <p>With experience in payroll systems, ERP integration, and reporting solutions, I deliver applications that help businesses streamline operations and improve productivity.</p>
            </div>
          </div>
          <div className="service-grid">
            {[
              [Code2, "Frontend & Backend Development", "Building responsive and dynamic web applications."],
              [Database, "Database Design", "Designing efficient and scalable database structures."],
              [Workflow, "API Integration", "Connecting third-party and RESTful APIs seamlessly."],
              [Palette, "UI / UX Design", "Creating intuitive and user-friendly interfaces."]
            ].map(([Icon, title, text]) => (
              <article className="service-card" key={String(title)}>
                <span><Icon /></span><div><h3>{String(title)}</h3><p>{String(text)}</p></div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="panel-section" id="skills">
        <Reveal className="skills-panel">
          <div className="section-head"><div><h2>Key Skills</h2><span className="title-line" /></div><div className="skill-counter">{String(activeSkill + 1).padStart(2, "0")} / {String(skillCategories.length).padStart(2, "0")}</div></div>
          <div className="skills-layout">
            <aside className="skill-tabs">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return <button key={category.name} className={activeSkill === index ? "active" : ""} onClick={() => setActiveSkill(index)}><Icon size={17} />{category.name}</button>;
              })}
            </aside>
            <div className="skill-content" key={currentSkill.name}>
              <div className="skill-title-row"><div><h3>{currentSkill.name}</h3><p>{currentSkill.description}</p></div><div className="carousel-controls"><button onClick={() => changeSkill(-1)} aria-label="Previous category"><ChevronLeft /></button><button onClick={() => changeSkill(1)} aria-label="Next category"><ChevronRight /></button></div></div>
              <div className="skill-icon-grid">
                {currentSkill.items.map(([name, Icon]) => <article className="skill-tile" key={name}><Icon /><span>{name}</span></article>)}
              </div>
              <div className="carousel-dots">{skillCategories.map((_, index) => <button key={index} aria-label={`Go to skill category ${index + 1}`} className={activeSkill === index ? "active" : ""} onClick={() => setActiveSkill(index)} />)}</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="panel-section" id="experience">
        <Reveal className="experience-panel">
          <div className="section-head"><div><h2>Work Experience</h2><span className="title-line" /></div><span className="experience-badge"><Sparkles size={16} /> Professional Journey</span></div>
          <div className="timeline">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return <article className="timeline-row" key={experience.role}>
                <div className="timeline-date"><span>{experience.period}</span><i className={index === 0 ? "current" : ""} /></div>
                <div className="experience-card">
                  <span className="experience-icon"><Icon /></span>
                  <div><span className="experience-index">0{index + 1}</span><h3>{experience.role}</h3><h4>{experience.company}</h4><p>{experience.description}</p></div>
                  {index === 0 && <span className="current-label"><Check size={14} /> Current</span>}
                </div>
              </article>;
            })}
          </div>
        </Reveal>
      </section>

      <section className="panel-section" id="projects">
        <Reveal className="projects-panel">
          <div className="section-head"><div><h2>Featured Projects</h2><span className="title-line" /></div><a href="#contact">View All Projects <ArrowRight size={16} /></a></div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className="project-card" key={project.title}>
                <div className={`project-preview ${project.preview}`}><div className="fake-sidebar" /><div className="fake-window"><span /><span /><span /><div className="fake-chart" /></div></div>
                <div className="project-body"><span className="project-icon"><Icon /></span><div><small>{project.subtitle}</small><h3>{project.title}</h3><p>{project.description}</p></div><button aria-label={`Open ${project.title}`}><ExternalLink size={16} /></button></div>
              </article>;
            })}
          </div>
        </Reveal>
      </section>

      <section className="panel-section" id="contact">
        <Reveal className="contact-panel">
          <div className="contact-title"><span><ArrowRight /></span><div><h2>Let&apos;s Work Together</h2><p>Have a project in mind? Let&apos;s build something great together.</p></div></div>
          <div className="contact-item"><Mail /><span>youremail@example.com</span></div>
          <div className="contact-item"><Phone /><span>+63 912 345 6789</span></div>
          <div className="contact-item"><MapPin /><span>Philippines</span></div>
        </Reveal>
      </section>

      <footer>© 2026 Dyann P. All rights reserved.</footer>
    </main>
  );
}
