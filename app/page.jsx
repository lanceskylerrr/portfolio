"use client"
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Linkedin, Github, Mail, Figma, FileDown } from "lucide-react";
import { ShootingStarsAndStarsBackground } from "@/components/ui/shooting-stars";

const sections = ["About", "Skills", "Experience", "Portfolio", "Contact"];

const skills = [
  { category: "Design & Diagramming Tools", items: ["Figma", "Boardmix", "Lucidchart"] },
  { category: "Media & Creative Tools", items: ["Adobe Photoshop", "Adobe Premiere", "CapCut", "Canva"] },
  { category: "Tech Stack", items: ["Java", "PHP", "C#","CSS","React", "Javascript"] },
];

const experiences = [
  {
    role: "UI / UX Designer",
    company: "Creciendo Philippines",
    period: "2024 - 2025",
    description: "Designed system flow diagrams and end-to-end UI/UX for finance, accounting, and web portal systems, improving workflow clarity, data accuracy, and usability across student, parent, and teacher platforms.",
  },
  {
    role: "Web Developer",
    company: "RomeCita Garden Resort",
    period: "2023 - 2024",
    description: "Designed and developed a marketing website for a local resort, applying UI/UX principles to create an engaging and informative user experience.",
  },
  {
    role: "Documentation & UI / UX Designer",
    company: "Sched-NU: Class & Room Scheduling System for National University Baliwag",
    period: "2023-2024",
    description: "Led project documentation and planning, designed the system UI using Figma, analyzed processes through flow diagrams and architecture, conducted testing and QA, and collaborated on overall system structure without handling backend development.",
  },
];

const projects = [
  {
    title: "SCHED-NU: Class and Room Scheduling System",
    description: "A scheduling system designed to streamline class and room allocation, minimize conflicts, and improve scheduling efficiency within an academic environment.",
    image: "/schednu.png",
    tags: ["Figma","Boardmix", "System Analysis", "UI/UX Design"],
  },
  {
    title: "Centhesys: Enterprise Resource Planning System ",
    description: "A finance and accounting system module designed to manage chart of accounts efficiently, ensuring organized financial records and accurate transaction classification.",
    image: "/centhesys.png",
    tags: ["Figma", "Boardmix", "UI/UX Design"],
  },
  {
    title: "Tinkerbell Student-Teacher-Parent Portal",
    description: "A web-based portal built to centralize communication and information access for students, teachers, and parents using role-based features and a user-focused interface.",
    image: "/tinkerbell.png",
    tags: ["Figma", "Boardmix", "UI/UX Design"],
  },
  {
    title: "RomeCita Garen Resort Marketing Website",
    description: "A marketing website developed for a local resort, focusing on presenting services and information clearly while supporting dynamic content through database integration.",
    image: "/romecita.jpg",
    tags: ["HTML", "CSS", "Bootstrap","MySQL"],
  },
];

// Timeline Navigation
const TimelineNav = ({ activeSection, onSectionClick }) => {
  return (
    <div className="hidden md:flex fixed left-4 lg:left-12 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-6 lg:gap-10">
      {/* Enhanced vertical line with gradient */}
      <div className="absolute w-0.5 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20" />

      {sections.map((section, Home) => (
        <button
          key={section}
          onClick={() => onSectionClick(Home)}
          className="group relative z-10 flex items-center transition-all duration-300 hover:scale-125"
        >
          {/* Horizontal line connecting to bullet */}
          <div
            className={cn(
              "absolute left-0 w-4 lg:w-6 h-px transition-all duration-300",
              activeSection === Home
                ? "bg-gradient-to-r from-white/30 to-white/60"
                : "bg-white/20 group-hover:bg-white/50 group-hover:w-6 lg:group-hover:w-8"
            )}
          />

          <span
            className={cn(
              "absolute left-12 lg:left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm lg:text-base font-light tracking-wider whitespace-nowrap text-white/90 group-hover:scale-110",
              activeSection === Home ? "opacity-100" : ""
            )}
          >
            {section}
          </span>

          {/* Bullet with white gradient */}
          <div className="relative">
            <div
              className={cn(
                "w-4 h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-300 relative overflow-hidden",
                activeSection === Home ? "scale-125 lg:scale-150" : "scale-100 group-hover:scale-125 lg:group-hover:scale-150"
              )}
              style={{
                background: activeSection === Home
                  ? "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)"
                  : "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)"
              }}
            >
              {/* Inner glow effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-full transition-all duration-300",
                  activeSection === Home
                    ? "bg-white/40 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                    : "bg-white/20 group-hover:bg-white/40 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                )}
              />
            </div>
            {/* Outer ring */}
            <div
              className={cn(
                "absolute inset-0 rounded-full border-2 transition-all duration-300",
                activeSection === Home
                  ? "border-white/60 scale-150"
                  : "border-white/30 scale-100 group-hover:border-white/60 group-hover:scale-150"
              )}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 max-w-4xl w-full">
        <div className="relative">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/20 animate-float relative bg-gradient-to-br from-primary/20 to-secondary/40">
            <Image
              src="/profile.jpg"
              alt="Lance Skyler Cao"
              fill
              className="object-cover"
              style={{ objectPosition: "center 10%" }}
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-primary/10 pointer-events-none" style={{
            animation: "disperse 4s ease-in-out infinite",
            transform: "scale(1.15)"
          }} />
          <div className="absolute inset-0 rounded-full border border-primary/5 pointer-events-none" style={{
            animation: "disperse 4s ease-in-out infinite 0.5s",
            transform: "scale(1.3)"
          }} />
        </div>

        <div className="text-center md:text-left space-y-4 sm:space-y-6 w-full">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase">Hello, Im</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight">
              Lance Skyler <span className="font-normal text-primary">Cao</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto md:mx-0 text-justify sm:text-left">
            An entry-level IT professional with a solid understanding of technology, strong problem-solving skills, and a genuine passion for innovation. Reliable when tackling new challenges, eager to take on added responsibilities, and committed to continuous learning to support career growth and long-term professional success.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <div className="w-12 h-px bg-primary/50 self-center" />
            <span className="text-sm text-muted-foreground tracking-wider">UI / UX Designer & Front-End Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
      <div className="max-w-4xl w-full">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extralight mt-2">Skills</h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {skills.map((skillGroup, groupHome) => (
            <div key={skillGroup.category} className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-light tracking-wider text-primary/80 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, Home) => (
                  <div
                    key={skill}
                    className="group relative"
                    style={{ animationDelay: `${(groupHome * 5 + Home) * 0.1}s` }}
                  >
                    {/* Gradient border wrapper on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-[2px] -z-10"
                      style={{
                        background: groupHome === 0
                          ? "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))"
                          : groupHome === 1
                          ? "linear-gradient(135deg, rgba(236,72,153,0.8), rgba(59,130,246,0.8))"
                          : "linear-gradient(135deg, rgba(34,197,94,0.8), rgba(59,130,246,0.8))"
                      }}
                    >
                      <div className="w-full h-full rounded-lg bg-background/95" />
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:-translate-y-1 relative z-10">
                      {/* Gradient background on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                        style={{
                          background: groupHome === 0
                            ? "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))"
                            : groupHome === 1
                            ? "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(59,130,246,0.1))"
                            : "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1))"
                        }}
                      />
                      <div className="w-3 h-3 rounded-full bg-primary border border-primary/50 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-100 relative z-10" />
                      <span className="font-light tracking-wide group-hover:text-primary group-hover:font-normal transition-all duration-100 relative z-10">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
      <div className="max-w-3xl w-full">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">Journey</span>
          <h2 className="text-3xl md:text-4xl font-extralight mt-2">Work Experience</h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="relative flex justify-center">
          <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-white/30 -translate-x-1/2 top-0" style={{ height: 'calc(100% - 2rem)' }} />

          <div className="space-y-8 sm:space-y-12 pt-6 pb-6">
            {experiences.map((exp, Home) => (
              <div
                key={Home}
                className={`group relative flex flex-col md:flex-row gap-6 sm:gap-8 items-center ${Home % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Horizontal line connecting to bullet */}
                <div className="absolute left-0 md:left-1/2 w-12 h-0.5 bg-primary/50 group-hover:bg-gradient-to-r group-hover:from-primary/80 group-hover:to-primary/40 md:-translate-x-1/2 z-10 transition-all duration-300 group-hover:w-16" />
                {/* Bullet with gradient border on hover */}
                <div 
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] rounded-full p-[2px] opacity-0 group-hover:opacity-100"
                  style={{
                    background: Home === 0 
                      ? "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))"
                      : Home === 1
                      ? "linear-gradient(135deg, rgba(236,72,153,0.8), rgba(59,130,246,0.8))"
                      : "linear-gradient(135deg, rgba(34,197,94,0.8), rgba(59,130,246,0.8))"
                  }}
                >
                  <div className="w-4 h-4 rounded-full bg-background border-2 border-transparent" />
                </div>
                {/* Default bullet */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 z-10 transition-all duration-300 group-hover:opacity-0" />

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 transition-all duration-300 group-hover:scale-105 ${Home % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <span className="text-xs sm:text-sm text-primary/70 tracking-wider group-hover:text-primary transition-colors duration-300">{exp.period}</span>
                  <h3 className="text-lg sm:text-xl font-light mt-2 group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-light mt-1 group-hover:text-muted-foreground/90 transition-colors duration-300">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 font-light mt-4 leading-relaxed text-justify sm:text-left md:text-justify group-hover:text-muted-foreground/90 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const PortfolioSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
      <div className="max-w-5xl w-full">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-extralight mt-2">Featured Projects</h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, Home) => (
            <div
              key={Home}
              className="group relative overflow-hidden rounded-xl bg-secondary/30 border border-border/30 transition-all duration-500"
            >
              {/* Gradient border wrapper on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl p-[2px] -z-10"
                style={{
                  background: Home === 0
                    ? "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))"
                    : Home === 1
                    ? "linear-gradient(135deg, rgba(236,72,153,0.8), rgba(59,130,246,0.8))"
                    : Home === 2
                    ? "linear-gradient(135deg, rgba(34,197,94,0.8), rgba(59,130,246,0.8))"
                    : "linear-gradient(135deg, rgba(251,191,36,0.8), rgba(59,130,246,0.8))"
                }}
              >
                <div className="w-full h-full rounded-xl bg-background/95" />
              </div>
              {/* Gradient background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                style={{
                  background: Home === 0
                    ? "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05))"
                    : Home === 1
                    ? "linear-gradient(135deg, rgba(236,72,153,0.05), rgba(59,130,246,0.05))"
                    : Home === 2
                    ? "linear-gradient(135deg, rgba(34,197,94,0.05), rgba(59,130,246,0.05))"
                    : "linear-gradient(135deg, rgba(251,191,36,0.05), rgba(59,130,246,0.05))"
                }}
              />
              <div className="aspect-video overflow-hidden relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8 z-20">
                <h3 className="text-xl font-light mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-light">{project.title}</h3>
                <div className="flex gap-2 mt-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
      <div className="max-w-2xl w-full">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-extralight mt-2">Contact Me</h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <p className="text-center text-muted-foreground font-light leading-relaxed mb-12 max-w-md mx-auto">
          Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <a
            href="https://linkedin.com/in/lanceskyler"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full sm:w-48 h-40 sm:h-48 rounded-lg border border-border/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Gradient border wrapper on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-[2px] -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(147,51,234,0.8))"
              }}
            >
              <div className="w-full h-full rounded-lg bg-background/95" />
            </div>
            {/* Gradient background on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))"
              }}
            />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="text-center relative z-10">
              <p className="text-sm sm:text-base font-light tracking-wide group-hover:text-primary group-hover:font-normal transition-all duration-300">LinkedIn</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-1 group-hover:text-muted-foreground transition-colors">Lance Skyler Cao</p>
            </div>
          </a>

          <a
            href="https://github.com/lanceskylerrr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full sm:w-48 h-40 sm:h-48 rounded-lg border border-border/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Gradient border wrapper on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-[2px] -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.8), rgba(59,130,246,0.8))"
              }}
            >
              <div className="w-full h-full rounded-lg bg-background/95" />
            </div>
            {/* Gradient background on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(59,130,246,0.1))"
              }}
            />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="text-center relative z-10">
              <p className="text-sm sm:text-base font-light tracking-wide group-hover:text-primary group-hover:font-normal transition-all duration-300">GitHub</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-1 group-hover:text-muted-foreground transition-colors">View my projects</p>
            </div>
          </a>

          <a
            href="mailto:lanceskylercao@gmail.com"
            className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full sm:w-48 h-40 sm:h-48 rounded-lg border border-border/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Gradient border wrapper on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-[2px] -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.8), rgba(59,130,246,0.8))"
              }}
            >
              <div className="w-full h-full rounded-lg bg-background/95" />
            </div>
            {/* Gradient background on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1))"
              }}
            />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="text-center relative z-10">
              <p className="text-sm sm:text-base font-light tracking-wide group-hover:text-primary group-hover:font-normal transition-all duration-300">Email</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-1 group-hover:text-muted-foreground transition-colors break-all">lanceskylercao@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Additional rectangle boxes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto">
          {/* Figma Portfolio Link */}
          <a
            href="https://www.figma.com/design/XHFBedBsqoEHMt5vLJbVNr/Portfolio?node-id=2-4166&t=dkfl83BGajl1KAsw-1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full sm:w-48 h-28 sm:h-32 rounded-lg border border-border/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Gradient border wrapper on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-[2px] -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(251,191,36,0.8), rgba(59,130,246,0.8))"
              }}
            >
              <div className="w-full h-full rounded-lg bg-background/95" />
            </div>
            {/* Gradient background on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              style={{
                background: "linear-gradient(135deg, rgba(251,191,36,0.1), rgba(59,130,246,0.1))"
              }}
            />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
              <Figma className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="text-center relative z-10">
              <p className="text-sm sm:text-base font-light tracking-wide group-hover:text-primary group-hover:font-normal transition-all duration-300">Figma Portfolio</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-1 group-hover:text-muted-foreground transition-colors">View my designs</p>
            </div>
          </a>

          {/* Download CV */}
          <a
            href="/CV_Cao Lance Skyler B..pdf"
            download
            className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full sm:w-48 h-28 sm:h-32 rounded-lg border border-border/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Gradient border wrapper on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-[2px] -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.8), rgba(59,130,246,0.8))"
              }}
            >
              <div className="w-full h-full rounded-lg bg-background/95" />
            </div>
            {/* Gradient background on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(59,130,246,0.1))"
              }}
            />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
              <FileDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="text-center relative z-10">
              <p className="text-sm sm:text-base font-light tracking-wide group-hover:text-primary group-hover:font-normal transition-all duration-300">Download CV</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-1 group-hover:text-muted-foreground transition-colors">Get my resume</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((ref, Home) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(Home);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (Home) => {
    sectionRefs.current[Home]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground relative overflow-hidden">
      <ShootingStarsAndStarsBackground
        starColor="#ffffff"
        trailColor="#9ca3af"
        minSpeed={10}
        maxSpeed={10}
        minDelay={2000}
        maxDelay={5000}
        starDensity={0.0005}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        className="fixed inset-0 -z-10"
      />
      <TimelineNav
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <div ref={(el) => (sectionRefs.current[0] = el)}>
        <HeroSection />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)}>
        <SkillsSection />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)}>
        <ExperienceSection />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)}>
        <PortfolioSection />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)}>
        <ContactSection />
      </div>

      <footer className="py-12 text-center border-t border-border/20">
        <p className="text-sm text-muted-foreground font-light tracking-wider">
          © 2025 Lance Skyler Cao.
        </p>
      </footer>
    </div>
  );
};

export default Home;