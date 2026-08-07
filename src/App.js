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
  FaTimes,
  FaSearch,
  FaFileDownload,
  FaPaperPlane,
  FaArrowUp,
  FaCheck,
  FaCopy,
  FaGraduationCap,
  FaBriefcase,
  FaEye,
  FaBars,
  FaExpand,
  FaArrowRight
} from 'react-icons/fa';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'about' | 'projects' | 'skills' | 'contact'
  const [projectFilter, setProjectFilter] = useState('all'); // 'all' | 'major' | 'beginner'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false); // Lightbox for profile picture
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  // Lock scroll when any modal is open
  useEffect(() => {
    if (selectedProject || showResumeModal || showImageModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject, showResumeModal, showImageModal]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setShowResumeModal(false);
        setShowImageModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    triggerToast(`Copied ${label} to clipboard!`);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      triggerToast('Please complete all required fields.');
      return;
    }
    setFormSubmitted(true);
    triggerToast('Thank you! Your message has been sent successfully.');
    setTimeout(() => {
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const projects = [
    {
      title: "QuickBite",
      description: "A fast, modern full-stack food delivery and restaurant discovery platform. Features dynamic restaurant menus, real-time cart state management, customizable meals, instant order placement, and owner management dashboard.",
      longDescription: "QuickBite is an end-to-end food ordering and restaurant discovery platform built to streamline culinary commerce. Users can search restaurants by cuisine, filter dishes by diet/price, build custom orders with live item add-ons, calculate dynamic totals, and track order fulfillment in real time. Restaurant owners are equipped with an administrative dashboard to manage inventory, update menu pricing, and process kitchen orders instantaneously.",
      link: "https://quickbite-food.vercel.app",
      github: "https://github.com/CodeEbz/QuickBite",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "CSS Modules"],
      type: "major",
      role: "Full Stack Developer (Solo Creator)",
      image: "/images/quickbite_mockup.png",
      featured: true,
      features: [
        "Real-time food menu search with instant category filters",
        "Dynamic cart management with persistent item state",
        "Customizable order options (add-ons, spice levels, custom notes)",
        "Real-time order status tracking console",
        "Vendor portal for menu administration and kitchen workflow"
      ],
      challenges: "Synchronizing complex meal configurations and real-time order status updates between customer checkout screens and kitchen display panels. Solved by architecting an event-driven Express backend with optimized WebSocket state broadcasting."
    },
    {
      title: "Nee Commerce",
      description: "A revolutionary e-commerce platform that bridges WhatsApp Business catalogs with seamless online shopping. Allows customers to browse products, sync items, and submit orders directly linked to WhatsApp.",
      longDescription: "Nee Commerce was born out of a need to streamline sales workflows for WhatsApp-reliant small businesses. Traditionally, managing catalogs and sales manually over text is tedious. This web application transforms WhatsApp Business catalogs into dynamic, interactive e-commerce sites where users can browse, build orders, and submit structured carts back to the merchant's WhatsApp in a single click.",
      link: "https://nee-commerce-project.vercel.app",
      github: "https://github.com/CodeEbz/Nee-Commerce-Project",
      tech: ["React", "JavaScript", "WhatsApp API", "CSS3"],
      type: "major",
      role: "Full Stack Developer (Solo Creator)",
      image: "/images/nee_commerce_mockup_1782742652962.png",
      featured: true,
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
      longDescription: "SkyBook Airlines is an enterprise-grade full-stack flight reservation system. It provides customers with interactive flight search capability, real-time seat selection, reservation booking management, and profile history. It features a robust administration console for managing airplanes, flights, and check-ins.",
      link: "https://skybook-web-five.vercel.app",
      github: "https://github.com/CodeEbz/skybook-web",
      tech: ["React 19", "Spring Boot", "MySQL", "Spring Security", "JWT"],
      type: "major",
      role: "Lead Backend & Systems Engineer",
      image: "/images/skybook_mockup_1782742668418.png",
      featured: true,
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
      featured: false,
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
      tech: ["React", "Node.js", "Express.js", "CSS3"],
      type: "major",
      role: "Full Stack Developer",
      image: "/images/facilities_mockup_1782742698287.png",
      featured: false,
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
      featured: false,
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
      tech: ["React", "JavaScript", "CSS3", "Local Storage"],
      type: "beginner",
      role: "Solo Developer",
      image: "/images/todo_mockup_1782742726854.png",
      featured: false,
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
      featured: false,
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
      title: "Frontend Engineering",
      icon: <FaLaptopCode />,
      skills: [
        { name: "React / React 19", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & Canvas API", level: "Expert" },
        { name: "CSS3 / Glassmorphism", level: "Expert" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "Responsive Design", level: "Expert" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: <FaServer />,
      skills: [
        { name: "Node.js & Express", level: "Advanced" },
        { name: "Spring Boot (Java)", level: "Intermediate" },
        { name: "FastAPI (Python)", level: "Advanced" },
        { name: "MongoDB & Mongoose", level: "Advanced" },
        { name: "MySQL & SQLite", level: "Advanced" },
        { name: "REST APIs & WebSockets", level: "Expert" },
        { name: "JWT & Spring Security", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Tooling",
      icon: <FaTools />,
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Vercel & Netlify", level: "Advanced" },
        { name: "Fly.io & Cloud Deployment", level: "Intermediate" },
        { name: "Socket.io", level: "Advanced" },
        { name: "Postman & API Testing", level: "Advanced" },
        { name: "VS Code & Antigravity IDE", level: "Expert" }
      ]
    }
  ];

  // Filtering projects
  const filteredProjects = projects.filter(project => {
    const matchesType = projectFilter === 'all' ? true : project.type === projectFilter;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25, ease: "easeIn" } }
  };

  return (
    <div className="App">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            className="toast-notification"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <FaCheck className="toast-icon" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Navigation with Top-Left Profile Picture Avatar */}
      <header className="header">
        <div className="container nav">
          <motion.div 
            className="logo-container"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            {/* Top Left Profile Photo Avatar Badge */}
            <div 
              className="top-left-avatar-chip" 
              onClick={(e) => { e.stopPropagation(); setShowImageModal(true); }}
              title="Click to view Chinaza's headshot"
            >
              <img src="/images/profile.jpg" alt="Chinaza Ebenezer" className="top-avatar-img" />
              <span className="top-avatar-online-dot"></span>
            </div>
            <span className="logo-text">Chinaza Ebenezer</span>
          </motion.div>

          {/* Desktop Nav Tabs */}
          <div className="nav-right">
            <div className="nav-tabs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`nav-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div className="active-pill" layoutId="activePill" />
                  )}
                </button>
              ))}
            </div>

            <button 
              className="resume-nav-btn"
              onClick={() => setShowResumeModal(true)}
              aria-label="View Resume"
            >
              <FaFileDownload /> Resume
            </button>

            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark/light theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button 
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="mobile-drawer-links">
                {['home', 'about', 'projects', 'skills', 'contact'].map(tab => (
                  <button
                    key={tab}
                    className={`mobile-nav-link ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(tab);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
                <button 
                  className="mobile-resume-btn"
                  onClick={() => { setShowResumeModal(true); setMobileMenuOpen(false); }}
                >
                  <FaFileDownload /> View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          {/* HOME PAGE */}
          {activeTab === 'home' && (
            <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <section className="hero">
                <div className="container hero-wrapper">
                  
                  {/* Hero Intro Header with Top-Left Headshot Card */}
                  <motion.div 
                    className="hero-header-card"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div 
                      className="hero-profile-chip" 
                      onClick={() => setShowImageModal(true)}
                      title="Click to view full image"
                    >
                      <div className="hero-chip-avatar-wrapper">
                        <img src="/images/profile.jpg" alt="Chinaza Ebenezer" className="hero-chip-img" />
                        <div className="hero-chip-overlay">
                          <FaExpand />
                        </div>
                      </div>
                      <div className="hero-chip-info">
                        <span className="hero-chip-name">Chinaza Ebenezer</span>
                        <span className="hero-chip-role">Full Stack Developer</span>
                      </div>
                      <span className="status-dot-inline" title="Available for work"></span>
                    </div>

                    <span className="badge">
                      <span className="status-dot"></span>
                      Available for Remote, Full-time & Contract
                    </span>
                  </motion.div>

                  <motion.div 
                    className="hero-text-side"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <h1>Building Exceptional <span className="name">Web Applications</span> & Scalable Systems</h1>
                    <p className="hero-desc">
                      Specialized in crafting pixel-perfect React frontends and robust REST API backends using Node.js, FastAPI, and Spring Boot. Solo creator of <strong>QuickBite</strong>, <strong>Nee Commerce</strong>, and high-performance software tools.
                    </p>

                    <div className="hero-actions">
                      <button className="btn-primary" onClick={() => setActiveTab('projects')}>
                        Explore All Projects <FaArrowRight style={{ marginLeft: '8px', fontSize: '0.9rem' }} />
                      </button>
                      <button className="btn-secondary" onClick={() => setActiveTab('contact')}>
                        Get In Touch
                      </button>
                      <button className="btn-outline-resume" onClick={() => setShowResumeModal(true)}>
                        <FaFileDownload /> Resume
                      </button>
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
                      <a href="mailto:ebzchin@gmail.com" aria-label="Email">
                        <FaEnvelope />
                      </a>
                    </div>
                  </motion.div>

                </div>
              </section>

              {/* Featured Highlight Section */}
              <section className="featured-strip alt-bg">
                <div className="container">
                  <div className="section-header">
                    <h2>Featured Major Projects</h2>
                    <p>Explore direct live app demos, open-source repositories, and technical case studies.</p>
                  </div>

                  <div className="featured-grid">
                    {projects.filter(p => p.featured).map(project => (
                      <motion.div 
                        key={project.title}
                        className="featured-card"
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="featured-img-box">
                          <img src={project.image} alt={project.title} />
                          <span className="project-badge major">Major Project</span>
                        </div>
                        
                        <div className="featured-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          
                          <div className="tech-stack">
                            {project.tech.map((t, idx) => (
                              <span key={idx} className="tech-tag">{t}</span>
                            ))}
                          </div>

                          {/* Direct Links Bar on Card */}
                          <div className="card-action-bar">
                            {project.link && (
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="card-btn card-btn-primary"
                              >
                                <FaExternalLinkAlt /> Live Demo
                              </a>
                            )}
                            {project.github && (
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="card-btn card-btn-secondary"
                              >
                                <FaGithub /> GitHub
                              </a>
                            )}
                            <button 
                              className="card-btn card-btn-outline" 
                              onClick={() => setSelectedProject(project)}
                            >
                              <FaEye /> Details
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                    <button className="btn-primary" onClick={() => setActiveTab('projects')}>
                      View All {projects.length} Projects in Gallery &rarr;
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ABOUT PAGE */}
          {activeTab === 'about' && (
            <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <section className="about-page">
                <div className="container">
                  <div className="section-header">
                    <h2>About Me</h2>
                    <p>My background, technical journey, and software development philosophy.</p>
                  </div>

                  <div className="about-hero-card">
                    <div 
                      className="about-photo-wrapper clickable-photo" 
                      onClick={() => setShowImageModal(true)}
                      title="Click to expand headshot"
                    >
                      <img src="/images/profile.jpg" alt="Chinaza Ebenezer" className="about-photo" />
                      <div className="about-photo-tag">
                        <span>Chinaza Ebenezer</span>
                        <FaExpand style={{ fontSize: '0.85rem' }} />
                      </div>
                    </div>

                    <div className="about-bio">
                      <h3>Passionate Full Stack Engineer</h3>
                      <p>
                        I am a software developer dedicated to building scalable, user-first web applications. With hands-on expertise spanning modern React frontend architectures to multi-tiered backend APIs built with FastAPI, Spring Boot, and Node.js, I build complete web applications from concept to deployment.
                      </p>
                      <p>
                        My portfolio features major applications like <strong>QuickBite</strong> (a real-time food delivery and ordering system), <strong>Nee Commerce</strong> (WhatsApp Business catalog checkout system), and <strong>SkyBook Airlines</strong> (full-stack flight booking system). I pride myself on clean code structure, quick adaptability, and elegant UI design.
                      </p>

                      <div className="about-quick-facts">
                        <div className="fact-item">
                          <FaBriefcase className="fact-icon" />
                          <div>
                            <strong>Specializations</strong>
                            <span>Full-Stack Engineering & Web Architecture</span>
                          </div>
                        </div>
                        <div className="fact-item">
                          <FaGraduationCap className="fact-icon" />
                          <div>
                            <strong>Core Stack</strong>
                            <span>React, Node.js, FastAPI, Spring Boot, SQL/NoSQL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Stats Counter */}
                  <div className="about-stats-grid">
                    <div className="stat-card">
                      <div className="stat-num">8+</div>
                      <div className="stat-name">Completed Projects</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-num">4+</div>
                      <div className="stat-name">Backend Frameworks</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-num">100%</div>
                      <div className="stat-name">Commitment to Quality</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-num">24/7</div>
                      <div className="stat-name">Problem Solving Mindset</div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* PROJECTS PAGE */}
          {activeTab === 'projects' && (
            <motion.div key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <section className="projects-page">
                <div className="container">
                  <div className="section-header">
                    <h2>Projects Gallery</h2>
                    <p>Filter, search, and explore my full-stack web applications and software builds.</p>
                  </div>

                  {/* Search and Category Filter Toolbar */}
                  <div className="projects-toolbar">
                    <div className="search-bar-wrapper">
                      <FaSearch className="search-icon" />
                      <input 
                        type="text" 
                        placeholder="Search by project name or technology (e.g. QuickBite, React, FastAPI)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="projects-search-input"
                      />
                      {searchQuery && (
                        <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                          <FaTimes />
                        </button>
                      )}
                    </div>

                    <div className="projects-filter-pills">
                      {[
                        { id: 'all', label: 'All Projects' },
                        { id: 'major', label: 'Major Projects' },
                        { id: 'beginner', label: 'Beginner Projects' }
                      ].map(filter => (
                        <button
                          key={filter.id}
                          className={`filter-btn ${projectFilter === filter.id ? 'active' : ''}`}
                          onClick={() => setProjectFilter(filter.id)}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Projects Grid */}
                  <motion.div className="projects-grid" layout>
                    <AnimatePresence mode="popLayout">
                      {filteredProjects.map((project) => (
                        <motion.div 
                          key={project.title}
                          className="project-card"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.35 }}
                          layout
                        >
                          <div className="project-card-image-wrapper">
                            <img src={project.image} alt={`${project.title} mockup`} />
                            <span className={`project-badge ${project.type}`}>
                              {project.type === 'major' ? 'Major' : 'Beginner'}
                            </span>
                          </div>

                          <div className="project-card-body">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="tech-stack">
                              {project.tech.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                              ))}
                            </div>

                            {/* Direct Links Bar */}
                            <div className="card-action-bar">
                              {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="card-btn card-btn-primary"
                                >
                                  <FaExternalLinkAlt /> Live Demo
                                </a>
                              )}
                              {project.github && (
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="card-btn card-btn-secondary"
                                >
                                  <FaGithub /> GitHub
                                </a>
                              )}
                              <button 
                                className="card-btn card-btn-outline" 
                                onClick={() => setSelectedProject(project)}
                              >
                                <FaEye /> Details
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {filteredProjects.length === 0 && (
                    <div className="no-projects-found">
                      <p>No projects found matching "{searchQuery}".</p>
                      <button className="btn-secondary" onClick={() => { setSearchQuery(''); setProjectFilter('all'); }}>
                        Reset Filters
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </motion.div>
          )}

          {/* SKILLS PAGE */}
          {activeTab === 'skills' && (
            <motion.div key="skills" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <section className="skills-page">
                <div className="container">
                  <div className="section-header">
                    <h2>Skills & Technologies</h2>
                    <p>The tech stack, frameworks, and modern tools I leverage to build web applications.</p>
                  </div>

                  <div className="skills-container">
                    {skillCategories.map((category, index) => (
                      <motion.div 
                        key={category.title}
                        className="skills-category-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <h3>{category.icon} {category.title}</h3>
                        <div className="skills-interactive-list">
                          {category.skills.map((skill, i) => (
                            <div key={i} className="skill-pill">
                              <span className="skill-pill-name">{skill.name}</span>
                              <span className="skill-pill-level">{skill.level}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* CONTACT PAGE */}
          {activeTab === 'contact' && (
            <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <section className="contact-page">
                <div className="container">
                  <div className="section-header">
                    <h2>Get In Touch</h2>
                    <p>Have an interesting project or looking for a talented software engineer? Send a message below.</p>
                  </div>

                  <div className="contact-grid">
                    {/* Contact Direct Cards */}
                    <div className="contact-direct-column">
                      <div className="contact-info-card">
                        <FaEnvelope className="contact-card-icon" />
                        <h4>Email Address</h4>
                        <p>ebzchin@gmail.com</p>
                        <button 
                          className="copy-btn" 
                          onClick={() => copyToClipboard('ebzchin@gmail.com', 'Email')}
                        >
                          <FaCopy /> Copy Email
                        </button>
                      </div>

                      <div className="contact-info-card">
                        <FaPhone className="contact-card-icon" />
                        <h4>Phone Number</h4>
                        <p>+234 916 867 4402</p>
                        <button 
                          className="copy-btn" 
                          onClick={() => copyToClipboard('09168674402', 'Phone Number')}
                        >
                          <FaCopy /> Copy Phone
                        </button>
                      </div>

                      <div className="contact-info-card">
                        <FaGithub className="contact-card-icon" />
                        <h4>GitHub Profile</h4>
                        <p>github.com/CodeEbz</p>
                        <a 
                          href="https://github.com/CodeEbz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="copy-btn"
                        >
                          <FaExternalLinkAlt /> Visit Profile
                        </a>
                      </div>
                    </div>

                    {/* Interactive Form */}
                    <div className="contact-form-column">
                      <form className="contact-form" onSubmit={handleContactSubmit}>
                        <h3>Send a Direct Message</h3>
                        
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input 
                            type="text" 
                            id="name" 
                            required 
                            placeholder="John Doe"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Your Email *</label>
                          <input 
                            type="email" 
                            id="email" 
                            required 
                            placeholder="john@example.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <input 
                            type="text" 
                            id="subject" 
                            placeholder="Project Proposal / Job Opportunity"
                            value={contactForm.subject}
                            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="message">Message *</label>
                          <textarea 
                            id="message" 
                            rows="5" 
                            required 
                            placeholder="Tell me about your project or inquiry..."
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          ></textarea>
                        </div>

                        <button type="submit" className="btn-primary form-submit-btn" disabled={formSubmitted}>
                          <FaPaperPlane /> {formSubmitted ? 'Sending...' : 'Send Message'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            className="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Chinaza Ebenezer (CodeEbz). Built with React & Framer Motion.</p>
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
                aria-label="Close details"
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
                      <h4>Key Features & Workflows</h4>
                      <ul className="modal-features-list">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-section">
                      <h4>Engineering Challenge & Solution</h4>
                      <div className="challenge-box">
                        <p>{selectedProject.challenges}</p>
                      </div>
                    </div>
                  </div>

                  <div className="modal-details-sidebar">
                    <div className="modal-sidebar-card">
                      <h4>Technologies Used</h4>
                      <div className="modal-tech-stack">
                        {selectedProject.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-sidebar-card">
                      <h4>Project Links</h4>
                      <div className="modal-action-links">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Picture Lightbox Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div 
            className="modal-overlay image-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageModal(false)}
          >
            <motion.div 
              className="image-lightbox-card"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setShowImageModal(false)}>
                <FaTimes />
              </button>
              
              <div className="lightbox-image-box">
                <img src="/images/profile.jpg" alt="Chinaza Ebenezer Headshot" className="lightbox-full-img" />
              </div>

              <div className="lightbox-caption">
                <h3>Chinaza Ebenezer</h3>
                <p>Full Stack Software Developer</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div 
              className="modal-card resume-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setShowResumeModal(false)}>
                <FaTimes />
              </button>

              <div className="resume-modal-header">
                <h2>Chinaza Ebenezer - Software Engineer</h2>
                <p>Full Stack Web Developer | React, Node.js, FastAPI, Spring Boot</p>
              </div>

              <div className="modal-scroll-area resume-modal-body">
                <div className="resume-section">
                  <h3>Summary</h3>
                  <p>Dedicated Full Stack Software Developer with proven expertise in building modern, performant web applications. Skilled in React frontend architectures, REST API backend microservices, database management, and cloud deployments.</p>
                </div>

                <div className="resume-section">
                  <h3>Core Competencies</h3>
                  <div className="resume-skills-list">
                    <span>React / JavaScript</span>
                    <span>Node.js / Express</span>
                    <span>FastAPI / Python</span>
                    <span>Spring Boot / Java</span>
                    <span>MongoDB & SQL</span>
                    <span>REST APIs & WebSockets</span>
                  </div>
                </div>

                <div className="resume-section">
                  <h3>Featured Projects</h3>
                  <ul>
                    <li><strong>QuickBite</strong>: Full-stack food ordering platform with real-time state tracking.</li>
                    <li><strong>Nee Commerce</strong>: WhatsApp Business catalog shopping & checkout routing tool.</li>
                    <li><strong>SkyBook Airlines</strong>: Enterprise flight booking system with Spring Security & JWT.</li>
                  </ul>
                </div>
              </div>

              <div className="resume-modal-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a 
                  href="/resume.pdf" 
                  download="Chinaza_Ebenezer_Resume.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary" 
                >
                  <FaFileDownload /> Download PDF Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;