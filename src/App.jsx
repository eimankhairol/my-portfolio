import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with ML-driven insights and predictive analytics.",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Distributed Task Queue System",
      description: "High-performance message queue handling 10M+ tasks daily with automatic scaling.",
      tech: ["Go", "Redis", "Kubernetes", "gRPC"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile E-Commerce Platform",
      description: "Cross-platform shopping app with AR try-on features and seamless checkout.",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    "JavaScript/TypeScript", "Python", "Go", "React", "Node.js", 
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes"
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </header>

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
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
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
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 pb-8">
          <p>© 2026 Your Name. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}