"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Globe,
  Briefcase, 
  GraduationCap,
  Code2,
  Award,
  Languages
} from "lucide-react"
import { downloadCVFromBack4App } from "@/lib/pdf-generator"

const experience = [
  {
    title: "Software Developer Intern",
    company: "Agricultural Bank of Namibia",
    period: "Feb 2025 - July 2025",
    responsibilities: [
      "Developed a user access application digitizing manual data workflows, improving operational efficiency",
      "Built automation bots using Power Automate and UIPath, reducing manual workload in internal processes",
      "Gathered and detailed software requirements for a website revamp project",
      "Served as project manager for the website revamp, coordinating cross-functional teams",
      "Implemented IT management tools like FreshWorks to automate user access requests and approvals",
      "Provided daily ad hoc support to business and ICT teams",
    ],
  },
  {
    title: "Student Assistant",
    company: "University of Namibia",
    period: "Jan 2025 - Feb 2025",
    responsibilities: [
      "Managed registration of senior and new students, ensuring accurate data entry",
      "Collaborated closely with the ICT team to integrate student data into the system",
      "Led the ICT registration team, overseeing process improvements and team coordination",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Computer Science Honours",
    institution: "University of Namibia",
    period: "Graduating March 2026",
    description: "Research project: \"AgriSense: A crop and disease monitoring system using affordable technology\" - focused on improving the agricultural sector through accessible AgriTech.",
  },
  {
    degree: "Grade 12 NSSCH Certificate",
    institution: "Caprivi Senior Secondary School",
    period: "March 2020",
    description: "Graduated with 37 points.",
  },
]

const skills = {
  programming: ["C#", "Java", "Python", "HTML", "CSS", "JavaScript", "PHP", "Dart", "Flutter"],
  technical: ["Full-Stack Development", "Artificial Intelligence", "Quality Assurance", "Software Development & Maintenance"],
  tools: ["Power Automate", "UIPath", "FreshWorks"],
  soft: ["Problem-Solving", "Project Management", "Team Collaboration", "Leadership"],
}

const languages = [
  {
    name: "English",
    level: "Fluent",
    proficiency: 100,
    flag: "🇬🇧",
  },
  {
    name: "Oshiwambo",
    level: "Intermediate",
    proficiency: 65,
    flag: "🇳🇦",
  },
  {
    name: "Afrikaans",
    level: "Beginner",
    proficiency: 30,
    flag: "🇿🇦",
  },
]

const references = [
  {
    name: "Ms Rachel Nawa",
    title: "Business System Analyst",
    company: "Agribank",
    email: "rnawa@agribank.com.na",
    phone: "0612074276",
  },
  {
    name: "Dr Nalina Suresh",
    title: "Senior Lecturer",
    company: "University of Namibia",
    email: "nsuresh@unam.na",
    phone: "+264 812229533",
  },
]

export default function CVPage() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPDF = async () => {
    setIsGenerating(true)
    try {
      await downloadCVFromBack4App()
    } catch (error) {
      console.error('Error downloading PDF:', error)
      alert('Failed to download CV. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="bg-background py-16 sm:py-24">
      <div id="cv-content" className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 
              className="text-4xl font-bold text-foreground sm:text-5xl"
            >
              Sein M Muwana
            </h1>
            <p className="mt-2 text-xl text-muted-foreground font-medium">Software Engineer</p>
            
            <div className="mt-6 space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>P.O BOX 1689, Windhoek, Namibia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+264 81 478 1478</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:seinprince2@gmail.com" className="hover:text-foreground">
                  seinprince2@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <a 
                  href="https://seinmuwana.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  seinmuwana.netlify.app
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a 
                  href="https://www.linkedin.com/in/sein-muwana-2ab319299/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  linkedin.com/in/sein-muwana
                </a>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="gap-2 shrink-0 cursor-pointer"
            onClick={handleDownloadPDF}
            disabled={isGenerating}
          >
            <Download className="h-4 w-4" />
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </Button>
        </div>

        {/* Summary */}
        <section className="border-b border-border py-8">
          <h2 
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <Award className="h-5 w-5 text-primary" />
            Professional Summary
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dedicated Software Engineer with expertise in C#, Java, Python, full-stack web development, 
            and Artificial Intelligence. Proven ability to leverage technology to improve processes 
            and deliver impactful solutions through software development, process automation, and 
            digital transformation projects. Strong organizational skills, adaptability, and commitment 
            to excellence, capable of driving innovation and efficiency in team environments.
          </p>
        </section>

        {/* Experience */}
        <section className="border-b border-border py-8">
          <h2 
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <Briefcase className="h-5 w-5 text-primary" />
            Work Experience
          </h2>
          
          <div className="mt-6 space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-muted-foreground font-medium">{job.company}</p>
                <ul className="mt-3 space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-border py-8">
          <h2 
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </h2>
          
          <div className="mt-6 space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-muted-foreground font-medium">{edu.institution}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-b border-border py-8">
          <h2 
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <Code2 className="h-5 w-5 text-primary" />
            Skills
          </h2>
          
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-medium text-foreground">Programming Languages</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Technical Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Tools & Platforms</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Soft Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="border-b border-border py-8">
          <h2 
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <Languages className="h-5 w-5 text-primary" />
            Languages
          </h2>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {languages.map((lang) => (
              <div 
                key={lang.name}
                className="rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{lang.name}</h3>
                    <p className="text-xs text-muted-foreground">{lang.level}</p>
                  </div>
                </div>
                
                {/* Proficiency Bar */}
                <div className="relative">
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div 
                      className="h-2 rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Fluent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section className="py-8">
          <h2 
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            References
          </h2>
          
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {references.map((ref, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-4">
                <h3 className="font-semibold text-foreground">{ref.name}</h3>
                <p className="text-sm text-muted-foreground">{ref.title}, {ref.company}</p>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p>Email: {ref.email}</p>
                  <p>Phone: {ref.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
