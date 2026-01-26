import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, X, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        `${import.meta.env.BASE_URL}_GvV9L37g7K.blob.avif`,
        `${import.meta.env.BASE_URL}_UrU2R8hbGY.blob.avif`
      ],
      detailedDescription: "This project focuses on designing and implementing a scalable backend system to manage real-time device handover and monitoring across distributed IoT components. The system processes high-frequency telemetry data from multiple devices, tracks handover events between gateways, and maintains consistent device state in near real time. A Django-based backend and web dashboard were developed to ingest, process, and visualize live metrics such as signal strength, connectivity status, and handover history. The architecture emphasizes reliability, efficient data flow, and system stability under frequent updates, enabling effective monitoring and debugging of device behavior in a distributed environment. The project was recognized with 2nd Place at the International oneM2M Hackathon for its real-time handover design and system architecture.",
      features: ["Real-time device and gateway monitoring", "Device handover tracking across distributed nodes", "Live telemetry visualization and dashboards", "Backend APIs for device state and event management", "Scalable data ingestion for high-frequency updates"],
      links: [
        { label: "GitHub Repository", url: "https://github.com/eimankhairol/project1" },
        { label: "oneM2M Feature", url: "https://www.onem2m.org/membership/executive-viewpoints/985-international-hackathon-psu2025-scalable-iot-mobility" },
        { label: "Hackster Article", url: "https://www.hackster.io/540749/onem2m-hackathon-team-pennstatenitannylions-2025-9935d2"}
      ]
    },
  ];

  const skills = [
    "Python", "C++", "React", "Node.js", "Django", "Microsoft Azure AI/ML Services", "Git", 
    "SQL", "AWS", "Docker", "Streamlit", "Cisco CLI", "Linux"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Header/Hero */}
        <header className="min-h-screen flex flex-col justify-center mb-32">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Available for opportunities</span>
            </div>
            
            <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Eiman Khairol
            </h1>
            
            <p className="text-3xl text-slate-300 font-light">
              Computer Engineer
            </p>
            
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Final-year computer engineering student interested in web development, data-driven applications, 
              and cloud solutions, with additional skills in IT infrastructure and networking.
              Seeking opportunities starting May 2026 to apply programming expertise, problem-solving, and cross-functional collaboration to scalable, cost-efficient technology projects.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/eimankhairol" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/khairol-eimannajwan" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:khairoleiman03@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </header>

        {/* Work Experience Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-slate-200 mb-1">{exp.company}</p>
                        <p className="text-slate-400">{exp.location}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32">
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
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                      {project.images.length} photos
                    </div>
                  )}
                </div>
                
                <div className="relative p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className={`w-5 h-5 transition-all ${hoveredProject === idx ? 'translate-x-1 -translate-y-1' : ''}`} />
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-sm border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => {
                setSelectedProject(null);
                setCurrentImageIndex(0);
              }}
            >
              <div 
                className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Image Gallery */}
                <div className="relative h-96 overflow-hidden rounded-t-3xl">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setCurrentImageIndex(0);
                    }}
                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Navigation arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => 
                            prev === 0 ? selectedProject.images.length - 1 : prev - 1
                          );
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => 
                            prev === selectedProject.images.length - 1 ? 0 : prev + 1
                          );
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Image counter */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>

                      {/* Thumbnail dots */}
                      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex 
                                ? 'bg-cyan-400 w-8' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    {selectedProject.links ? (
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                          >
                            {link.label.includes("GitHub") ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all hover:scale-105 cursor-default"
              >
                <span className="text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-white/10 p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-8">
              Have a project in mind? Let's create something amazing.
            </p>
            <a
              href="mailto:khairoleiman03@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 pb-8">
          <p>© 2026 Eiman Khairol. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}