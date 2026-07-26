"use client";

import { useEffect, useMemo, useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { FaGithub, FaLinkedin, } from "react-icons/fa6";
import {
  SiPhp, SiTypescript, SiJavascript, SiHtml5, SiLaravel, SiYii,
  SiCodeigniter, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiWordpress,
  SiJquery, SiBootstrap, SiTailwindcss, SiMysql,
  SiQuickbooks, SiGit, SiPostman, SiJira,
  SiVercel, SiSublimetext, SiXampp, SiFilezilla, SiHostinger, SiJson,
} from "react-icons/si";
;
import Link from "next/link";
import { projects } from "@/data/projects";

import {
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Server,
  Sparkles,
  UserRound,
  Workflow,
  Wrench,
  Building2,
  Smartphone,
  X,
  ChartNoAxesCombined,
  Clapperboard,
  ListTodo,
  ReceiptText,
  ShoppingBag,
  UserCog,
  UsersRound,
  MonitorSmartphone, User
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
    name: "Reporting & ERP",
    icon: FileText,
    description: "Reporting and ERP platforms used for payroll and finance workflows.",
    items: [["Crystal Reports", FileText], ["Sage 300", Building2], ["NetSuite", Server], ["QuickBooks", SiQuickbooks]]
  },

  {
    name: "Databases",
    icon: Database,
    description: "Database design, querying, optimization, and data management.",
    items: [["MySQL", SiMysql], ["Microsoft SQL Server", Database]]
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
    items: [["Microsoft Office Suite", FileText], ["Nitro PDF Pro", FileText], ["Adobe XD", FaPaintBrush ], ["Adobe Photoshop", FaPaintBrush],  ["Canva", Palette], ["yWorks" , Workflow]]
  }
 ] as const;

const skillColors: Record<string, string> = {
  PHP: "#777BB4",
  "VB.NET": "#512BD4",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML5: "#E34F26",
  JSON: "#F5C518",
  Laravel: "#FF2D20",
  "Yii Framework": "#40B3D8",
  CodeIgniter: "#EF4223",
  "React.js": "#61DAFB",
  "Next.js": "#F5F5F5",
  "Vue.js": "#42B883",
  "Node.js": "#5FA04E",
  WordPress: "#21759B",
  jQuery: "#0769AD",
  Bootstrap: "#7952B3",
  "Tailwind CSS": "#06B6D4",
  MySQL: "#4479A1",
  "Microsoft SQL Server": "#CC2927",
  "Crystal Reports": "#F4B400",
  "Sage 300": "#00A651",
  NetSuite: "#1B6D85",
  QuickBooks: "#2CA01C",
  Git: "#F05032",
  Postman: "#FF6C37",
  Jira: "#0052CC",
  "Visual Studio": "#5C2D91",
  "VS Code": "#007ACC",
  NetBeans: "#1B6AC6",
  HeidiSQL: "#5B9BD5",
  Vercel: "#F5F5F5",
  "Sublime Text": "#FF9800",
  "MySQL Workbench": "#4479A1",
  "Notepad++": "#90E59A",
  XAMPP: "#FB7A24",
  IONOS: "#003D8F",
  FileZilla: "#BF0000",
  "Barracuda Email Security": "#E31B23",
  HostGator: "#FFB900",
  "Microsoft Office Suite": "#D83B01",
  "Nitro PDF Pro": "#F15A24",
  "Adobe Photoshop": "#31A8FF",
  Canva: "#00C4CC"
};

const experiences = [
  {
    company: "Eva Care Management Consultancy Inc.",
    role: "Software Developer",
    period: "Aug 2021 – Present",
    current: true,
    icon: BriefcaseBusiness,
    description: [
      "Develop and maintain enterprise web applications, healthcare facility websites, and internal systems that support payroll, HR, clinical, and business operations."
    ]
  },
  {
    company: "Rockbird Events Management",
    role: "Web Developer",
    period: "Jun 2019 – Aug 2021",
    current: false,
    icon: Code2,
    description: [
      "Developed and maintained event websites for delegate and facilitator registration, B2B meetings, webinars, and online events."
    ]
  },
  {
    company: "Proventa International",
    role: "Web Developer",
    period: "Mar 2018 – Jun 2019",
    current: false,
    icon: MonitorSmartphone,
    description: [
      "Developed and maintained responsive websites based on mockups provided by the design team."
    ]
  },
  {
    company: "Circus International Philippines Inc.",
    role: "Programmer",
    period: "Apr 2017 – Sept 2017",
    current: false,
    icon: ListTodo,
    description: [
      "Developed an Issue Tracking System that centralized issue reporting, task assignment, and progress monitoring."
    ]
  },
  {
    company: "MobileGroup Incorporation",
    role: "Software Engineer",
    period: "Aug 2016 – Feb 2017",
    current: false,
    icon: Clapperboard,
    description: [
      "Developed a Cinema Ticketing System integrated with kiosk machines for movie browsing, seat selection, and reservations."
    ]
  }
];

const trainings = [
  {
    title: "Complete Software Testing Bootcamp",
    provider: {
        name: "Udemy",
        logo: "/training/udemy.png"
    },
    date: "March 2026",
    type: "Software Testing",
    description:
      "Completed comprehensive training in software testing concepts, test planning, manual testing, defect reporting, and quality assurance practices.",
    topics: [
      "Manual Testing",
      "Test Cases",
      "Bug Reporting",
      "Quality Assurance"
    ],
    icon: BadgeCheck,
    credentialUrl: "#"
  },
  {
    title: "CNA Certified Specialist: UI/UX using Adobe XD",
    provider: {
        name: "Creative Nation Academy",
        logo: "/training/cna.png"
    },
    date: "October 2019",
    type: "UI/UX Certification",
    description:
      "Completed specialized training in user interface and user experience design using Adobe XD, including prototyping, wireframing, and interface design.",
    topics: [
      "Adobe XD",
      "UI Design",
      "UX Design",
      "Prototyping"
    ],
    icon: Palette,
    credentialUrl: "#"
  },
  {
    title:
      "CNA Certified Specialist: UI/UX using Experience Design CC",
    provider: {
        name: "Creative Nation Academy",
        logo: "/training/cna.png"
    },
    date: "October 2019",
    type: "UI/UX Certification",
    description:
      "Completed certification training in Experience Design CC focused on user-centered design, interactive prototypes, and visual interface development.",
    topics: [
      "Experience Design CC",
      "Wireframing",
      "User-Centered Design",
      "Interactive Prototypes"
    ],
    icon: GraduationCap,
    credentialUrl: "#"
  },
  {
    title: "AWS Innovate Online Conference 2018",
    provider: {
        name: "Amazon",
        logo: "/training/amazon.png"
    },
    date: "July 2018",
    type: "Cloud Conference",
    description:
      "Participated in an online conference covering cloud computing, AWS services, infrastructure, deployment, and modern technology solutions.",
    topics: [
      "AWS",
      "Cloud Computing",
      "Infrastructure",
      "Deployment"
    ],
    icon: Server,
    credentialUrl: "#"
  },
  {
    title: "Mobile Development",
    provider: {
        name: "Fasttrack IT Academy",
        logo: "/training/fastrack.gif"
    },
    date: "October 2012",
    type: "Technical Training",
    description:
      "Completed foundational training in mobile application development, interface design, application workflows, and mobile technology concepts.",
    topics: [
      "Mobile Applications",
      "Application Development",
      "UI Design",
      "Mobile Technology"
    ],
    icon: Smartphone,
    credentialUrl: "#"
  }
];

const featuredProjects = projects.slice(0, 3);

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentSkill = useMemo(() => skillCategories[activeSkill], [activeSkill]);
  const [activeProjectCategory, setActiveProjectCategory] = useState("All");
  

  useEffect(() => {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -70px 0px"
    }
  );

  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element, index) => {
    element.setAttribute(
      "style",
      `--reveal-delay: ${Math.min(index * 70, 280)}ms`
    );

    revealObserver.observe(element);
  });

  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 500);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true
  });

  handleScroll();

  return () => {
    revealObserver.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const changeSkill = (direction: number) => {
    setActiveSkill((prev) => (prev + direction + skillCategories.length) % skillCategories.length);
    
  };
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  };
  
  const projectCategories = [
  "All",
  "Enterprise System",
  "Internal System",
  "Web Application",
  "Reporting Automation",
  "HR System",
  "Payroll System",
  "Website",
  "E-Commerce",
  "Property Website"
];

const filteredProjects =
  activeProjectCategory === "All"
    ? projects
    : projects.filter(
        (project) =>
          project.category === activeProjectCategory
      );

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <UserRound className="brand-mark" />
            <span><strong>DYANN DUCALANG</strong><small>PROFESSIONAL PROFILE</small></span>
          </a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[
              ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Training", "#training"],  ["Experience", "#experience"], ["Contact", "#contact"]
 
            ].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="download-btn" href="/dhd_cv_2026.pdf" download><Download size={17} /> Download CV</a>
          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <h1>Dyann D.<br /> <span> Profile</span></h1>
            <p>Software Developer with expertise in PHP, Laravel, Vue.js, React.js, Wordpress and MySQL. I develop scalable web applications, payroll systems, automated reports, and integrations with ERP platforms.</p>
            <div className="hero-actions">
              <a href="#projects" className="primary-btn">View My Work <ArrowRight size={18} /></a>
              <a href="#contact" className="secondary-btn"><Mail size={18} /> Contact Me</a>
            </div>
          </Reveal>
          <div className="hero-animation" aria-hidden="true">
  <div className="hero-glow hero-glow-one" />
  <div className="hero-glow hero-glow-two" />

  <div className="orbit orbit-one">
    <span className="orbit-item orbit-item-one">
      {"</>"}
    </span>
  </div>

  <div className="orbit orbit-two">
    <span className="orbit-item orbit-item-two">
      API
    </span>
  </div>

  <div className="hero-code-window">
    <div className="code-window-header">
      <div className="code-window-dots">
        <span />
        <span />
        <span />
      </div>

      <span>portfolio.tsx</span>
    </div>

    <div className="code-window-body">
      <div className="code-line">
        <span className="code-purple">const</span>
        <span className="code-blue"> developer</span>
        <span> = {"{"}</span>
      </div>

      <div className="code-line code-indent">
        <span className="code-cyan">name</span>
        <span>: </span>
        <span className="code-green">"Dyann Ducalang"</span>
        <span>,</span>
      </div>

      <div className="code-line code-indent">
        <span className="code-cyan">role</span>
        <span>: </span>
        <span className="code-green">"Software Developer"</span>
        <span>,</span>
      </div>

      <div className="code-line code-indent">
        <span className="code-cyan">focus</span>
        <span>: [</span>
      </div>

      <div className="code-line code-double-indent">
        <span className="code-green">"Web Applications"</span>
        <span>,</span>
      </div>

      <div className="code-line code-double-indent">
        <span className="code-green">"API Integration"</span>
        <span>,</span>
      </div>

      <div className="code-line code-double-indent">
        <span className="code-green">"Automation and System"</span>
      </div>

      <div className="code-line code-indent">
        <span>]</span>
      </div>

      <div className="code-line">
        <span>{"}"}</span>
      </div>
    </div>
  </div>

  <div className="floating-card floating-card-one">
    <span className="floating-card-icon">DB</span>

    <div>
      <strong>Database</strong>
      <small>MySQL · SQL Server</small>
    </div>
  </div>

  <div className="floating-card floating-card-two">
    <span className="floating-card-icon">API</span>

    <div>
      <strong>Integration</strong>
      <small>REST · QuickBooks</small>
    </div>
  </div>

  <div className="floating-card floating-card-three">
    <span className="floating-card-icon">UI</span>

    <div>
      <strong>Frontend</strong>
      <small>Next.js · Vue.js</small>
    </div>
  </div>

  <div className="hero-particle particle-one" />
  <div className="hero-particle particle-two" />
  <div className="hero-particle particle-three" />
  <div className="hero-particle particle-four" />
</div>
        </div>
      </section>

      <section className="panel-section" id="about">
        <Reveal className="about-panel">
          <div className="about-copy">
            <div className="section-icon"><UserRound /></div>
            <div>
              <h2>About Me</h2>
              <span className="title-line" />
              <p>I'm a Software Developer dedicated to building efficient, user-friendly, and scalable web applications. </p>
              <p> With experience in HR & payroll systems, ERP integrations, website development, and reporting solutions, I develop applications that help businesses streamline operations and improve productivity.</p>
              <p> Away from my computer, I enjoy watching movies, reading books, and having meaningful conversations with friends.</p>
             </div>
          </div>
          <div className="service-grid">
            {[
              [Code2, "Full-Stack Development", "Building responsive and dynamic web applications."],
              [Database, "Database Design & API Integration", "Designing scalable database and RESTful APIs structures."],
              [Workflow, "Reports & Automation", "Develop data reporting and automation solutions."],
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
                {currentSkill.items.map(([name, Icon]) => {
                  const color = skillColors[name] ?? "#9CA3AF";

                  return (
                    <article
                      className="skill-tile"
                      key={name}
                      style={{ "--skill-color": color } as React.CSSProperties}
                    >
                      <Icon style={{ color }} />
                      <span>{name}</span>
                    </article>
                  );
                })}
              </div>
              <div className="carousel-dots">{skillCategories.map((_, index) => <button key={index} aria-label={`Go to skill category ${index + 1}`} className={activeSkill === index ? "active" : ""} onClick={() => setActiveSkill(index)} />)}</div>
            </div>
          </div>
        </Reveal>
      </section>
<section className="panel-section" id="projects">
  <Reveal className="projects-showcase">
    <div className="projects-heading">
      <div>

        <h2>Featured Projects</h2>

        <p>
          A selection of enterprise systems, payroll modules,
          reporting tools, and responsive websites.
        </p>
      </div>

      <Link href="/projects" className="projects-contact-link">
        View All Projects
        <ArrowRight size={17} />
      </Link>
    </div>

    <div className="featured-project-grid">
      {featuredProjects.map((project, index) => {
        const Icon = project.icon;

        return (
          <article
            className={`modern-project-card accent-${project.accent}`}
            key={project.slug}
          >
            <div className="project-card-header">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-visual">
              <span className="project-main-icon">
                <Icon />
              </span>

              <div className="project-screen">
                <span className="screen-topbar" />

                <div className="screen-layout">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="screen-table">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="modern-project-content">
              <span className="project-subtitle">
                {project.subtitle}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>


          </article>
        );
      })}
    </div>

    <div className="projects-mobile-action">
      <Link href="/projects" className="view-all-projects-btn">
        View All Projects
        <ArrowRight size={17} />
      </Link>
    </div>
  </Reveal>
</section>
<section className="panel-section" id="training">
  <Reveal className="training-panel">
    <div className="section-head">
      <div>
        <span className="section-kicker">
          <GraduationCap size={16} />
          Continuous Learning
        </span>

        <h2>Training & Certifications</h2>
        <span className="title-line" />
      </div>

      <span className="training-summary">
        <Award size={17} />
        Professional Development
      </span>
    </div>

    <div className="training-grid">
      {trainings.map((training, index) => {
        const Icon = training.icon;

        return (
          <article
            className="training-card"
            key={`${training.title}-${training.date}`}
          >
            <div className="training-card-top">
              <div className="provider">

                      <img
                          src={training.provider.logo}
                          alt={training.provider.name}
                      />

                      <span>
                          
                      </span>

                  </div>

              <span className="training-type">
                <BadgeCheck size={14} />
                {training.type}
              </span>
            </div>

            <div className="training-card-content">
              <div className="training-meta">

                  <span>
                      <CalendarDays size={15}/>
                      {training.date}
                  </span>
                   <span>
                      {training.provider.name}
                  </span> 
                  

              </div>

              <h3>{training.title}</h3>

              <p>{training.description}</p>

              <div className="training-topics">
                {training.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </div>

            {training.credentialUrl !== "#" && (
              <a
                className="credential-link"
                href={training.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
                <ExternalLink size={15} />
              </a>
            )}
          </article>
        );
      })}
    </div>
  </Reveal>
      </section>
      
      
   <section className="panel-section" id="experience">
  <Reveal className="experience-panel">
    <div className="section-head">
      <div>
        <h2>Work Experience</h2>
        <span className="title-line" />
      </div>

      <span className="experience-badge">
        <Sparkles size={16} /> Professional Journey
      </span>
    </div>

    <div className="timeline">
      {experiences.map((experience, index) => {
        const Icon = experience.icon;

        return (
          <article
            className="timeline-row"
            key={experience.company}
          >
            <div className="timeline-date">
              <span>{experience.period}</span>

              <i
                className={experience.current ? "current" : ""}
              />
            </div>

            <div className="experience-card">
              <span className="experience-icon">
                <Icon />
              </span>

              <div>
                <span className="experience-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                
              </div>

              {experience.current && (
                <span className="current-label">
                  <Check size={14} />
                  Current
                </span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  </Reveal>
</section>
    

      <section className="panel-section" id="contact">
        <Reveal className="contact-panel">
          <div className="contact-title"><span><ArrowRight /></span><div><h2>Let&apos;s Work Together</h2><p>Have a project in mind? Let&apos;s build something great together.</p></div></div>
          <div className="contact-item"><Mail /><span>yan.ducalang@gmail.com</span></div>
          <div className="contact-item"><Phone /><span>+63 968 213 5135</span></div>
          <div className="contact-item"><MapPin /><span>Manila, Philippines</span></div>
        </Reveal>
      </section>

      <footer>© 2026 Dyann Ducalang. All rights reserved.</footer>
      <button
  type="button"
  className={`back-to-top ${showBackToTop ? "show" : ""}`}
  onClick={scrollToTop}
  aria-label="Back to top"
  title="Back to top"
>
  <ArrowUp size={21} />
</button>
    </main>
  );
}
