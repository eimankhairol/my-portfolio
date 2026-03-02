import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, X, ChevronLeft, ChevronRight, Briefcase, FileText, Menu, ChevronDown, User } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const [openExp, setOpenExp] = useState(null);
  const [showAllEdu, setShowAllEdu] = useState(false);
  const fullTitle = 'Computer Engineer';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const experiences = [
    {
      title: "Learning Assistant",
      company: "Penn State College of Engineering",
      location: "State College, Pennsylvania",
      period: "Jan 2026 - Present",
      logo: `${import.meta.env.BASE_URL}images-2.jpeg`,
      description: "Supported undergraduate computer engineering courses by assisting with grading, exam proctoring, and student learning support. Worked closely with course instructors to ensure consistent evaluation standards and to help students strengthen their understanding of core networking and systems concepts.",
      achievements: [
        "Assisted in grading programming assignments, quizzes, and exams, ensuring accuracy and consistency across multiple course sections",
        "Proctored midterm and final examinations while enforcing academic integrity policies",
        "Held office hours and provided one-on-one support to help students debug code and clarify networking fundamentals such as IP addressing, routing, and protocol behavior"
      ]
    },
    {
      title: "Network Engineering Intern",
      company: "CIMB Group Tech & Data",
      location: "Kuala Lumpur, Malaysia",
      period: "May 2025 - August 2025",
      logo: `${import.meta.env.BASE_URL}images.png`,
      description: "Worked with the Network Engineering team to support enterprise network infrastructure across banking systems. Gained hands-on exposure to network operations, documentation, and troubleshooting in a large-scale financial environment.",
      achievements: [
        "Assisted in configuring and maintaining routers and switches using Cisco CLI in a production banking network environment",
        "Documented network topology, IP addressing schemes, and device configurations for internal operational use",
        "Supported network troubleshooting and monitoring tasks, helping ensure system availability and reliability across critical services"
      ]
    }
  ];

  const projects = [
    {
      title: "IoT Handover & Device Monitoring System",
      description: "A scalable backend system for real-time device handover and monitoring in a distributed IoT environment. Designed to ingest high-frequency telemetry data, track device state changes, and provide live system visibility through a web dashboard.",
      tech: ["Python", "Django", "REST APIs", "PostgreSQL", "Cloud Deployment"],
      gradient: "from-purple-500 to-pink-500",
      images: [
        `${import.meta.env.BASE_URL}django-app-home-page.png`,
        `${import.meta.env.BASE_URL}_GvV9L37g7K.blob.jpg`,
        `${import.meta.env.BASE_URL}_UrU2R8hbGY.blob.jpg`
      ],
      detailedDescription: "This project focuses on designing and implementing a scalable backend system to manage real-time device handover and monitoring across distributed IoT components. The system processes high-frequency telemetry data from multiple devices, tracks handover events between gateways, and maintains consistent device state in near real time. A Django-based backend and web dashboard were developed to ingest, process, and visualize live metrics such as signal strength, connectivity status, and handover history. The architecture emphasizes reliability, efficient data flow, and system stability under frequent updates, enabling effective monitoring and debugging of device behavior in a distributed environment. The project was recognized with 2nd Place at the International oneM2M Hackathon for its real-time handover design and system architecture.",
      features: ["Real-time device and gateway monitoring", "Device handover tracking across distributed nodes", "Live telemetry visualization and dashboards", "Backend APIs for device state and event management", "Scalable data ingestion for high-frequency updates"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/BobFIV/PSU_CAPSTONE_F25" },
        { label: "oneM2M Feature", url: "https://www.onem2m.org/membership/executive-viewpoints/985-international-hackathon-psu2025-scalable-iot-mobility" },
        { label: "Hackster Article", url: "https://www.hackster.io/540749/onem2m-hackathon-team-pennstatenitannylions-2025-9935d2" }
      ]
    },
  ];

  const skills = [
    "Python", "C++", "React", "Node.js", "Django", "Microsoft Azure AI/ML Services", "Git",
    "SQL", "AWS", "Docker", "Streamlit", "Cisco CLI", "Linux"
  ];

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* Background blobs + grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay:'1.5s'}}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay:'3s'}}></div>
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* ─── NAVBAR ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/75 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/30' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-tight">
            EK
          </button>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="ml-3 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all">
              Get In Touch
            </button>
          </div>
          <button className="md:hidden p-2 text-slate-300 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">{link.label}</button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="mt-2 px-5 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-center">Get In Touch</button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm text-cyan-400">
            <Sparkles className="w-4 h-4" />
            Available for opportunities · May 2026
          </div>
          {/*}
 #        <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}me.jpg`}
              alt="Eiman Khairol"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/10 shadow-xl shadow-cyan-500/20"
            />
          </div>
          */}
          <div>
            <p className="text-2xl text-slate-400 mb-2 tracking-wide">Hi! I'm</p>
            <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight tracking-tight pb-2">
              Eiman Khairol
            </h1>
          </div>

          <p className="text-2xl md:text-3xl text-slate-300 font-light tracking-wide h-9">
            {typed}<span className="animate-pulse text-cyan-400 font-thin">|</span>
          </p>

          <p className="text-slate-400 text-lg flex items-center justify-center gap-2">
            🏛️ The Pennsylvania State University &nbsp;·&nbsp; Expected May 2026
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/15 hover:border-white/30 transition-all hover:scale-105"
            >
              <User className="w-5 h-5" />
              About Me
            </button>
          </div>
        </div>

        <button onClick={() => scrollToSection('about')} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </section>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ─── ABOUT ─── */}
        <section id="about" className="py-24 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <User className="w-8 h-8 text-cyan-400" />
          About Me
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-10 space-y-8">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-xl text-slate-300 leading-relaxed">
              Final-year computer engineering student at Penn State with a passion for{' '}
              <span className="text-cyan-400">web development</span>,{' '}
              <span className="text-cyan-400">data-driven applications</span>, and{' '}
              <span className="text-cyan-400">cloud solutions</span>.
              Outside of engineering, I also enjoy hiking, endurance sports, and music.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              I'm seeking full-time opportunities starting May 2026 where I can apply my programming expertise, problem-solving mindset, and collaborative nature to build scalable, cost-efficient technology.
            </p>
          </div>

          {/* Skill groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Languages", icon: "< />", skills: ["Python", "C++", "SQL"] },
              { label: "Frameworks & Tools", icon: "⚙️", skills: ["React", "Node.js", "Django", "Streamlit", "Docker"] },
              { label: "Cloud & Infra", icon: "☁️", skills: ["AWS", "Microsoft Azure AI/ML", "Linux", "Cisco CLI"] },
              { label: "Dev Tools", icon: "🛠️", skills: ["Git", "Vite"] },
            ].map((group, i) => (
              <div key={i} className="bg-white/5 rounded-xl border border-white/10 p-5">
                <h3 className="text-lg font-semibold mb-3 text-slate-200">{group.icon} &nbsp;{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s, j) => (
                    <span key={j} className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="pb-24 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-cyan-400">🎓</span>
        Education
      </h2>
      <div className="relative">

        <div className="flex-grow">
          {/* Penn State — always visible, clickable */}
          <div
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 cursor-pointer hover:bg-white/8 transition-all duration-300 mb-6"
            onClick={() => setShowAllEdu(!showAllEdu)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center flex-shrink-0">
                  <img src={`${import.meta.env.BASE_URL}psu-logo.jpg`} alt="Penn State" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-1">B.S. Computer Engineering Minoring in Cybsersecurity Analytics</h3>
                  <p className="text-slate-200 text-lg">The Pennsylvania State University</p>
                  <p className="text-slate-400 text-sm">State College, Pennsylvania · 2022 – 2026</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Dean's List: Fall 2023, Spring 2023, Fall 2025 "].map((badge, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${showAllEdu ? 'rotate-180' : ''}`} />
            </div>
          </div>

          {/* Earlier education — only visible when expanded */}
          {showAllEdu && (
            <div className="space-y-4">
              {[
                { school: "INTEC Education College", degree: "American Degree Foundation Program", location: "Shah Alam, Malaysia", period: "2021 – 2022" },
                { school: "Sultan Mahmud Science School", degree: "Science Stream", location: "Terengganu, Malaysia", period: "2016 – 2020" },
                { school: "Sri Petaling Primary School", degree: "Primary Education", location: "Kuala Lumpur, Malaysia", period: "2011 – 2015" },
              ].map((edu, idx, arr) => (
                <div key={idx} className="relative flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-500 mt-1 flex-shrink-0"></div>
                    {idx < arr.length - 1 && <div className="w-0.5 bg-gradient-to-b from-slate-500 to-slate-700 flex-grow mt-1"></div>}
                  </div>
                  <div className="flex-grow bg-white/5 rounded-2xl border border-white/10 p-5 mb-2">
                    <h3 className="text-lg font-semibold text-slate-300">{edu.degree}</h3>
                    <p className="text-slate-200">{edu.school}</p>
                    <p className="text-slate-400 text-sm">{edu.location} · {edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="pb-24 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            Work Experience
          </h2>
          <div className="relative">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex gap-6 mb-6">
              
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1 z-10 flex-shrink-0"></div>
                {idx < experiences.length - 1 && (
                  <div className="w-0.5 bg-gradient-to-b from-cyan-400 to-slate-700 flex-grow mt-1"></div>
                )}
              </div>

              {/* Card */}
              <div
                className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/8 transition-all duration-300 cursor-pointer mb-2"
                onClick={() => setOpenExp(openExp === idx ? null : idx)}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center flex-shrink-0">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-2xl font-semibold text-cyan-400">{exp.title}</h3>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full">Current</span>
                        )}
                      </div>
                      <p className="text-slate-200 text-lg">{exp.company}</p>
                      <p className="text-slate-400 text-sm">{exp.location} · {exp.period}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openExp === idx ? 'rotate-180' : ''}`} />
                </div>

                {/* Expandable bullets */}
                {openExp === idx && (
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="pb-24 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-cyan-400" />
            Featured Projects
          </h2>
          <div className="grid gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative h-48 overflow-hidden">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">{project.images.length} photos</div>
                  )}
                </div>
                <div className="relative p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <ExternalLink className={`w-5 h-5 transition-all ${hoveredProject === idx ? 'translate-x-1 -translate-y-1' : ''}`} />
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-sm border border-white/10">{tech}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => { setSelectedProject(null); setCurrentImageIndex(0); }}>
              <div className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10" onClick={(e) => e.stopPropagation()}>
                <div className="relative overflow-hidden rounded-t-3xl bg-slate-800">
                  <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <button onClick={() => { setSelectedProject(null); setCurrentImageIndex(0); }} className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all z-10"><X className="w-6 h-6" /></button>
                  {selectedProject.images.length > 1 && (
                    <>
                      <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(p => p === 0 ? selectedProject.images.length - 1 : p - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all"><ChevronLeft className="w-6 h-6" /></button>
                      <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(p => p === selectedProject.images.length - 1 ? 0 : p + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all"><ChevronRight className="w-6 h-6" /></button>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm">{currentImageIndex + 1} / {selectedProject.images.length}</div>
                      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, i) => <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }} className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-cyan-400 w-8' : 'bg-white/50 hover:bg-white/80'}`} />)}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.detailedDescription}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {selectedProject.features.map((f, i) => <li key={i} className="flex items-center gap-2 text-slate-300"><div className="w-2 h-2 bg-cyan-400 rounded-full"></div>{f}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => <span key={i} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">{t}</span>)}
                    </div>
                  </div>
                  <div className="pt-4 flex flex-wrap gap-3">
                    {selectedProject.links ? selectedProject.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                        {link.label.includes("GitHub") ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                        {link.label}
                      </a>
                    )) : (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                        <Github className="w-5 h-5" /> View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        
      </div>

      {/* ─── FOOTER ─── */}
      <footer id="contact" className="scroll-mt-20 border-t border-white/10 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center gap-8 text-center">
          <h2 className="text-3xl font-bold">Let's connect</h2>

          <a href="mailto:khairoleiman03@gmail.com" className="flex items-center gap-3 text-xl text-slate-300 hover:text-cyan-400 transition-colors group">
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            khairoleiman03@gmail.com
          </a>

          <div className="flex gap-4">
            <a href="https://github.com/eimankhairol" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/25 transition-all hover:scale-105">
              <Github className="w-5 h-5" />
              <span className="text-sm text-slate-300">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/khairol-eimannajwan" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/25 transition-all hover:scale-105">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm text-slate-300">LinkedIn</span>
            </a>
            <a href="mailto:khairoleiman03@gmail.com"
              className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/25 transition-all hover:scale-105">
              <Mail className="w-5 h-5" />
              <span className="text-sm text-slate-300">Email</span>
            </a>
          </div>

          <p className="text-slate-600 text-sm pt-4 border-t border-white/5 w-full">
            © 2026 Eiman Khairol · Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}