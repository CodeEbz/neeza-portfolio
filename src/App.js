import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaExternalLinkAlt, 
  FaMoon, 
  FaSun,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaTimes
} from 'react-icons/fa';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [projectFilter, setProjectFilter] = useState('major'); // 'major' or 'beginner'
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projects = [
    {
      title: "Nee Commerce",
      description: "A revolutionary e-commerce platform that bridges WhatsApp Business catalogs with seamless online shopping. Allows customers to browse products, sync items, and complete orders through a streamlined checkout process directly linked to WhatsApp.",
      longDescription: "Nee Commerce was born out of a need to streamline sales workflows for WhatsApp-reliant small businesses. Traditionally, managing catalogs and sales manually over text is tedious. This web application transforms WhatsApp Business catalogs into dynamic, interactive e-commerce sites where users can browse, build orders, and submit structured carts back to the merchant's WhatsApp in a single click.",
      link: "https://nee-commerce-project.vercel.app",
      github: "https://github.com/CodeEbz/Nee-Commerce-Project",
      tech: ["React", "JavaScript", "WhatsApp API", "CSS"],
      type: "major",
      role: "Full Stack Developer (Solo Creator)",
      image: "/images/nee_commerce_mockup_1782742652962.png",
      features: [
        "Real-time WhatsApp Business catalog sync",
        "Dynamic shopping cart with persistent local storage",
        "One-click WhatsApp direct checkout routing",
        "Glassmorphism dark UI with light mode support",
        "Full responsive mobile-first optimization"
      ],
      challenges: "Handling raw, unformatted merchant catalogs and generating dynamic checkout links that perfectly conform to WhatsApp's deep link formats. Solved by designing a mapping engine that normalizes data schemas and url-encodes customer shopping lists into structured text."
    },
    {
      title: "SkyBook Airlines",
      description: "A robust full-stack flight booking web application. Features comprehensive flight search functionalities, real-time booking, user reservation management, check-in flows, and a secure authentication system.",
      longDescription: "SkyBook Airlines is a enterprise-grade full-stack flight reservation system. It provides customers with interactive flight search capability, real-time seat selection, reservation booking management, and profile history. It features a robust administration console for managing airplanes, flights, and check-ins.",
      link: "https://skybook-web-five.vercel.app",
      github: "https://github.com/CodeEbz/skybook-web",
      tech: ["React 19", "Spring Boot", "MySQL", "Spring Security", "JWT"],
      type: "major",
      role: "Lead Backend & Systems Engineer",
      image: "/images/skybook_mockup_1782742668418.png",
      features: [
        "Secure JWT authentication and role-based permissions",
        "Interactive flight scheduling and real-time seat selector",
        "Auto-generated PDF boarding passes and email notifications",
        "Responsive dashboard with custom analytics charts",
        "Spring Security path authorization"
      ],
      challenges: "Managing concurrent booking sessions where multiple users attempt to reserve the same seat simultaneously. Solved by implementing database pessimistic locking on flight seat reservations coupled with temporary seat holding timers in Spring Boot."
    },
    {
      title: "RC All Stars App",
      description: "A private weekly football session management platform. Features secure player check-ins, randomized team formation generator, interactive live match score console, goal/assist tracking, and real-time leaderboards.",
      longDescription: "Built for a private weekly football club, the RC All Stars App manages live player attendance, automatic balanced team matching, in-game stat recording (goals/assists), and calculates real-time league leaderboards. It turns casual pick-up games into a structured, trackable mini-league.",
      link: "https://football-all-stars.vercel.app",
      github: "https://github.com/CodeEbz",
      tech: ["React 18", "FastAPI", "SQLite", "SQLAlchemy", "JWT"],
      type: "major",
      role: "Solo Full Stack Developer",
      image: "/images/football_mockup_1782742682460.png",
      features: [
        "FastAPI websocket connections for live score updates",
        "Balanced team generation algorithm based on player rating stats",
        "Detailed player profile statistics (Goal/Assist ratio, Win Rate)",
        "Admin match console with timer and real-time event logger",
        "Fully relational SQLite/SQLAlchemy schema"
      ],
      challenges: "Synchronizing live score and timer updates across multiple spectator phones during active games. Solved by building a lightweight WebSocket subscription server in FastAPI that broadcasted state changes immediately upon event commits."
    },
    {
      title: "Lebon Facilities",
      description: "A premium facility management platform equipped with an interactive service booking system, scheduling, and request routing, designed to optimize resource allocation and client requests.",
      longDescription: "Lebon Facilities is a high-end service management platform built for facilities management companies. Clients can submit service request tickets (plumbing, electrical, cleaning), track assignment of technicians in real-time, view invoice quotes, and book facility maintenance schedules through a clean dashboard.",
      link: "https://lebon-facilities.vercel.app/",
      github: "https://github.com/CodeEbz/lebon-facilities",
      tech: ["React", "Node.js", "Express.js", "CSS"],
      type: "major",
      role: "Full Stack Developer",
      image: "/images/facilities_mockup_1782742698287.png",
      features: [
        "Role-based control panel (Client, Technician, Administrator)",
        "Dynamic calendar schedule interface for booking maintenance slots",
        "Real-time ticket updates and notifications via Express.js",
        "Sleek and polished design using custom CSS variables",
        "Asset tracking and maintenance history logs"
      ],
      challenges: "Designing a clean scheduling component that prevents booking overlaps without resorting to heavy library dependencies. Solved by building a lightweight scheduling validator in Node.js checking SQL time overlaps before confirming booking requests."
    },
    {
      title: "Tech Dev Social",
      description: "A collaborative social platform designed specifically for developers. Allows teams to chat, share project repositories, sync state in real time, and coordinate development tasks.",
      longDescription: "Tech Dev Social is a real-time collaborative platform where developers can chat, form team project groups, and collaborate on code edits in a shared environment. It integrates Discord-style messaging channels with GitHub repo syncing, letting dev teams organize tasks and collaborate closely.",
      link: "https://techdevsocial.vercel.app/home",
      github: "https://github.com/CodeEbz",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      type: "major",
      role: "Frontend & Web Socket Engineer",
      image: "/images/social_mockup_1782742711088.png",
      features: [
        "Real-time multi-room chat powered by Socket.io",
        "Collaborative text editor widget showing peer cursor positions",
        "GitHub repository file explorer integration",
        "Active user presence and status indicators",
        "Secure account creation and MongoDB profile storage"
      ],
      challenges: "Conflict resolution in the collaborative text editor widget when multiple users type simultaneously. Solved by implementing a simplified Operation Transformation (OT) algorithm via socket room broadcasting and character indexing updates."
    },
    {
      title: "Modern To-Do App",
      description: "A sleek and interactive task manager featuring multiple categorizations, search filters, state transitions, and persistent storage.",
      longDescription: "A beautiful task management web application created to demonstrate highly polished state transitions, tag filters, task priorities, and local storage persistence. Features a fully-custom styling library built from scratch.",
      link: "https://modern-todo-app-two-mu.vercel.app",
      github: "https://github.com/CodeEbz/modern-todo-app",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      type: "beginner",
      role: "Solo Developer",
      image: "/images/todo_mockup_1782742726854.png",
      features: [
        "Dynamic filtering by categories (Work, Personal, Urgent)",
        "Interactive progress ring indicating completed items",
        "Add, edit, delete, and toggle tasks with high fidelity animations",
        "Persistent state syncing to localStorage",
        "Clean glassmorphism light and dark modes"
      ],
      challenges: "Making Framer Motion layout animations smooth when elements are dynamically filtered or sorted. Solved by using popLayout mode on AnimatePresence and layout props on container cards."
    },
    {
      title: "Ticket Generator",
      description: "My foundational project - an event ticket generation system using HTML5 Canvas API to render and export customized event tickets on-the-fly.",
      longDescription: "This was my foundational project, designed to master HTML5 Canvas API and DOM manipulations. The Ticket Generator allows event organizers to dynamically create custom themed tickets, overlay user information, and download the high-resolution ticket as an image.",
      link: "https://neeza-ticket-generator.netlify.app",
      github: "https://github.com/CodeEbz/Ticket-Generator",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      type: "beginner",
      role: "Solo Developer",
      image: "/images/ticket_mockup_placeholder.png",
      features: [
        "Interactive HTML5 Canvas drawing surface",
        "Custom field overlay tools (change fonts, color values, images)",
        "Dynamic image processing and template rendering",
        "Instantly exportable as PNG/JPEG files",
        "Clean responsive interface layout"
      ],
      challenges: "Handling image upload sizes and scaling them down to fit the canvas layout without losing crisp ticket detail. Solved by off-screen canvas pre-rendering and resizing algorithms before drawing final tickets."
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode />,
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Backend & Databases",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "MongoDB", "MySQL", "SQLite", "REST APIs", "JWT"]
    },
    {
      title: "Tools & Deployments",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "Vercel", "Netlify", "Fly.io", "Socket.io"]
    }
  ];

  const filteredProjects = projects.filter(project => project.type === projectFilter);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container nav">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Chinaza Ebenezer
          </motion.div>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Available for full-time roles & freelance</span>
            <h1>Hi, I'm <span className="name">Chinaza Ebenezer</span></h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-desc">
              Building premium, scalable web applications with React, FastAPI, Spring Boot, and modern cloud technologies. Focused on writing clean code and creating exceptional user experiences.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Let's Talk</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/CodeEbz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ngweeyi-chinaza-154714247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/DEV_NEEZA" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about alt-bg">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>My journey, background, and passion for technology.</p>
          </div>
          <div className="about-content">
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="about-text">
                <p>
                  I'm a dedicated Full Stack Developer with experience building end-to-end applications. From crafting high-performance, responsive React interfaces to constructing robust REST APIs in FastAPI and Spring Boot, I thrive at the intersection of logical backend engineering and pixel-perfect user interface design.
                </p>
                <p>
                  My developer journey ranges from building browser-based tools like the Ticket Generator using the HTML Canvas API, to designing e-commerce hubs with automated WhatsApp Business integration, and deploying scalable live session dashboards on Vercel and Fly.io. I am highly adaptable, eager to solve complex problems, and constantly expanding my technical capabilities.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Production Apps</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Frameworks Mastered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Committed to Quality</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>My Projects</h2>
            <p>Explore a selected showcase of my major full-stack work and foundational projects.</p>
          </div>
          
          <div className="projects-filter">
            <button 
              className={`filter-btn ${projectFilter === 'major' ? 'active' : ''}`}
              onClick={() => setProjectFilter('major')}
            >
              Major Projects
            </button>
            <button 
              className={`filter-btn ${projectFilter === 'beginner' ? 'active' : ''}`}
              onClick={() => setProjectFilter('beginner')}
            >
              Beginner Projects
            </button>
          </div>

          <motion.div 
            className="projects-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  <div className="project-header">
                    <span className={`project-badge ${project.type}`}>
                      {project.type === 'major' ? 'Major' : 'Beginner'}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag tech-more">+{project.tech.length - 3} more</span>
                    )}
                  </div>
                  <div className="project-links">
                    <button 
                      onClick={() => setSelectedProject(project)} 
                      className="project-link-btn"
                    >
                      Explore Case Study
                    </button>
                    <div className="project-links-right">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub">
                          <FaGithub />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="Live Demo">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills alt-bg">
        <div className="container">
          <div className="section-header">
            <h2>Skills & Technologies</h2>
            <p>The tech stack and modern tools I leverage to build functional applications.</p>
          </div>
          <div className="skills-container">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="skills-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{category.icon} {category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-container">
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Get In Touch</h3>
              <p>Have an interesting project or looking to add an adaptable developer to your team? Let's build something exceptional together.</p>
              <div className="contact-info">
                <a href="mailto:ebzchin@gmail.com" className="contact-item">
                  <FaEnvelope /> ebzchin@gmail.com
                </a>
                <a href="tel:09168674402" className="contact-item">
                  <FaPhone /> 09168674402
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Chinaza Ebenezer. All rights reserved.</p>
        </div>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-card"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study details"
              >
                <FaTimes />
              </button>

              <div className="modal-scroll-area">
                <div className="modal-hero-container">
                  <img 
                    src={selectedProject.image} 
                    alt={`${selectedProject.title} mockup`} 
                    className="modal-hero-image"
                  />
                  <div className="modal-hero-overlay">
                    <span className={`project-badge ${selectedProject.type}`}>
                      {selectedProject.type === 'major' ? 'Major Project' : 'Beginner Project'}
                    </span>
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-role">{selectedProject.role}</p>
                  </div>
                </div>

                <div className="modal-details-content">
                  <div className="modal-details-main">
                    <div className="modal-section">
                      <h4>About the Project</h4>
                      <p className="modal-long-desc">{selectedProject.longDescription}</p>
                    </div>

                    <div className="modal-section">
                      <h4>Key Features</h4>
                      <ul className="modal-features-list">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-section">
                      <h4>Technical Challenge & Solution</h4>
                      <div className="challenge-box">
                        <p>{selectedProject.challenges}</p>
                      </div>
                    </div>
                  </div>

                  <div className="modal-details-sidebar">
                    <div className="modal-sidebar-card">
                      <h4>Technologies</h4>
                      <div className="modal-tech-stack">
                        {selectedProject.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-sidebar-card">
                      <h4>Links</h4>
                      <div className="modal-action-links">
                        {selectedProject.github && (
                          <a 
                            href={selectedProject.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-secondary modal-btn"
                          >
                            <FaGithub /> View Repository
                          </a>
                        )}
                        {selectedProject.link && (
                          <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-primary modal-btn"
                          >
                            <FaExternalLinkAlt /> Open Live App
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;