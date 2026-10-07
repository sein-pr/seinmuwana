import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

// Blog post data - in a real app, this would come from a CMS or database
const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: string
  image: string
}> = {
  "getting-started-with-rpa": {
    title: "Getting Started with Robotic Process Automation",
    excerpt: "An introduction to RPA and how it can transform business processes.",
    content: `
      <p>Robotic Process Automation (RPA) is transforming how businesses handle repetitive tasks. During my internship at the Agricultural Bank of Namibia, I had the opportunity to implement RPA solutions that significantly improved operational efficiency.</p>
      
      <h2>What is RPA?</h2>
      <p>RPA refers to software technology that makes it easy to build, deploy, and manage software robots that emulate human actions interacting with digital systems and software. These robots can do things like understand what's on a screen, complete the right keystrokes, navigate systems, identify and extract data, and perform a wide range of defined actions.</p>
      
      <h2>Popular RPA Tools</h2>
      <p>Two of the most popular RPA tools I've worked with are:</p>
      <ul>
        <li><strong>Microsoft Power Automate</strong> - Excellent for organizations already using Microsoft 365, with seamless integration across Microsoft products.</li>
        <li><strong>UIPath</strong> - A powerful enterprise RPA platform with advanced capabilities for complex automation scenarios.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>If you're looking to get started with RPA, I recommend:</p>
      <ol>
        <li>Identify repetitive, rule-based processes in your organization</li>
        <li>Start with simple automations and gradually increase complexity</li>
        <li>Document processes thoroughly before automation</li>
        <li>Measure the impact of your automations</li>
      </ol>
      
      <p>RPA has the potential to free up valuable human time for more creative and strategic work. I'm excited to continue exploring this technology and its applications in various industries.</p>
    `,
    date: "2025-06-15",
    readTime: "5 min read",
    category: "Automation",
    tags: ["RPA", "Power Automate", "UIPath", "Automation"],
    author: "Sein Muwana",
    image: "/images/blog/rpa-automation.jpg",
  },
  "agritech-namibia-future": {
    title: "The Future of AgriTech in Namibia",
    excerpt: "Exploring how technology can revolutionize agriculture in Namibia.",
    content: `
      <p>Agriculture is the backbone of many African economies, including Namibia. Yet, our farmers often lack access to the technological tools that could help them increase yields, detect diseases early, and manage their resources more efficiently.</p>
      
      <h2>The Challenge</h2>
      <p>Namibian farmers face several challenges:</p>
      <ul>
        <li>Limited access to real-time crop health information</li>
        <li>Late detection of plant diseases</li>
        <li>Inefficient water and resource management</li>
        <li>High costs of existing agricultural technology</li>
      </ul>
      
      <h2>The Opportunity</h2>
      <p>This is where my research project, AgriSense, comes in. By combining affordable IoT sensors, machine learning, and mobile technology, we can create solutions that are:</p>
      <ul>
        <li><strong>Affordable</strong> - Using low-cost components accessible to smallholder farmers</li>
        <li><strong>Accessible</strong> - Mobile-friendly interfaces that work on basic smartphones</li>
        <li><strong>Practical</strong> - Solutions designed with local conditions in mind</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>I believe that technology has the potential to transform agriculture in Namibia and across Africa. By focusing on affordable, accessible solutions, we can help farmers improve their yields and contribute to food security in our region.</p>
    `,
    date: "2025-05-20",
    readTime: "7 min read",
    category: "AgriTech",
    tags: ["AgriTech", "Agriculture", "Namibia", "Innovation"],
    author: "Sein Muwana",
    image: "/images/blog/agritech-namibia.jpg",
  },
  "machine-learning-crop-diseases": {
    title: "Using Machine Learning to Detect Crop Diseases",
    excerpt: "A deep dive into how machine learning algorithms can be trained to identify crop diseases early.",
    content: `
      <p>Early detection of crop diseases is crucial for farmers to protect their yields and livelihoods. Machine learning offers a powerful solution for automated disease detection using images captured from smartphones or specialized cameras.</p>
      
      <h2>The Problem</h2>
      <p>Traditional disease detection relies on visual inspection by farmers or agricultural experts. This approach has several limitations:</p>
      <ul>
        <li>Requires expert knowledge that many farmers don't have</li>
        <li>Time-consuming for large farms</li>
        <li>Diseases may spread before detection</li>
        <li>Inconsistent accuracy between observers</li>
      </ul>
      
      <h2>Machine Learning Solution</h2>
      <p>Using convolutional neural networks (CNNs), we can train models to recognize disease patterns in crop images with high accuracy. The process involves:</p>
      <ol>
        <li>Collecting a dataset of healthy and diseased crop images</li>
        <li>Preprocessing and augmenting the data</li>
        <li>Training a CNN model (like ResNet or VGG)</li>
        <li>Deploying the model to a mobile application</li>
      </ol>
      
      <h2>AgriSense Implementation</h2>
      <p>In my AgriSense project, I'm implementing this approach with a focus on diseases common to Namibian crops. The goal is to provide farmers with a simple mobile app that can instantly diagnose plant health issues.</p>
    `,
    date: "2025-04-10",
    readTime: "8 min read",
    category: "AI",
    tags: ["Machine Learning", "Agriculture", "Python", "Computer Vision"],
    author: "Sein Muwana",
    image: "/images/blog/machine-learning-crops.jpg",
  },
  "digital-transformation-banking": {
    title: "Digital Transformation in Banking: Lessons from My Internship",
    excerpt: "Insights and experiences from implementing digital solutions at a major financial institution.",
    content: `
      <p>During my internship at the Agricultural Bank of Namibia, I had the opportunity to contribute to several digital transformation initiatives. Here are the key lessons I learned about modernizing processes in a traditional industry.</p>
      
      <h2>Understanding the Current State</h2>
      <p>Before implementing any digital solution, it's crucial to understand existing workflows. Many banks still rely heavily on paper-based processes and manual approvals. Mapping these processes helped identify bottlenecks and opportunities for automation.</p>
      
      <h2>Start Small, Think Big</h2>
      <p>Rather than attempting a complete overhaul, we started with smaller, manageable projects:</p>
      <ul>
        <li>Automating user access request workflows</li>
        <li>Digitizing document approval processes</li>
        <li>Implementing IT service management tools</li>
      </ul>
      
      <h2>Change Management is Key</h2>
      <p>Technology is only part of the equation. Helping staff adapt to new systems requires training, communication, and patience. Success depends on people embracing the change.</p>
      
      <h2>Measuring Impact</h2>
      <p>Every automation we implemented was measured against clear metrics: time saved, error reduction, and user satisfaction. This data helped justify further investments in digital transformation.</p>
    `,
    date: "2025-03-25",
    readTime: "6 min read",
    category: "Career",
    tags: ["Digital Transformation", "Banking", "Career", "Internship"],
    author: "Sein Muwana",
    image: "/images/blog/digital-banking.jpg",
  },
  "python-automation-scripts": {
    title: "Essential Python Scripts for Automation",
    excerpt: "A collection of useful Python scripts that can help automate everyday tasks.",
    content: `
      <p>Python's simplicity and extensive library ecosystem make it perfect for automation tasks. Here are some practical scripts I've developed and use regularly.</p>
      
      <h2>File Organization</h2>
      <p>Automatically organize files in a directory based on their extensions:</p>
      <pre><code>import os
import shutil
from pathlib import Path

def organize_files(directory):
    for file in Path(directory).iterdir():
        if file.is_file():
            ext = file.suffix[1:] or 'no_extension'
            dest = Path(directory) / ext
            dest.mkdir(exist_ok=True)
            shutil.move(str(file), str(dest / file.name))</code></pre>
      
      <h2>Batch Image Resizing</h2>
      <p>Resize multiple images for web optimization using Pillow.</p>
      
      <h2>Email Automation</h2>
      <p>Send automated email reports with attachments using smtplib.</p>
      
      <h2>Web Scraping</h2>
      <p>Extract data from websites using BeautifulSoup or Selenium for dynamic pages.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always include error handling</li>
        <li>Log important operations</li>
        <li>Use virtual environments</li>
        <li>Document your scripts</li>
      </ul>
    `,
    date: "2025-02-18",
    readTime: "10 min read",
    category: "Programming",
    tags: ["Python", "Automation", "Scripting", "Productivity"],
    author: "Sein Muwana",
    image: "/images/blog/python-automation.jpg",
  },
  "project-management-tech": {
    title: "Project Management for Tech Projects: A Practical Guide",
    excerpt: "Practical tips and strategies for managing software development projects effectively.",
    content: `
      <p>Managing software development projects requires a unique blend of technical understanding and people skills. Drawing from my experience leading the website revamp project at Agribank, here are practical strategies that work.</p>
      
      <h2>Clear Requirements Are Everything</h2>
      <p>Before writing a single line of code, invest time in gathering and documenting requirements. Use techniques like:</p>
      <ul>
        <li>Stakeholder interviews</li>
        <li>User story mapping</li>
        <li>Prototyping and wireframes</li>
        <li>Requirements workshops</li>
      </ul>
      
      <h2>Agile, But Practical</h2>
      <p>Pure Agile doesn't always fit every organization. Adapt the methodology to your context while keeping the core principles of iteration and feedback.</p>
      
      <h2>Communication Cadence</h2>
      <p>Establish regular touchpoints:</p>
      <ul>
        <li>Daily standups for the team</li>
        <li>Weekly status updates for stakeholders</li>
        <li>Sprint reviews/demos every 2 weeks</li>
      </ul>
      
      <h2>Risk Management</h2>
      <p>Identify risks early and have mitigation plans. Common risks in tech projects include scope creep, technical debt, and resource availability.</p>
      
      <h2>Tools I Recommend</h2>
      <p>Jira, Trello, or even simple spreadsheets can work—choose what your team will actually use consistently.</p>
    `,
    date: "2025-01-30",
    readTime: "6 min read",
    category: "Career",
    tags: ["Project Management", "Software Development", "Leadership"],
    author: "Sein Muwana",
    image: "/images/blog/project-management.jpg",
  },
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: "Post Not Found | Sein Muwana",
    }
  }
  
  return {
    title: `${post.title} | Sein Muwana`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="bg-background">
      {/* Back Button */}
      <div className="mx-auto max-w-4xl px-6 pt-8 lg:px-8">
        <Button asChild variant="ghost" className="-ml-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Hero Image with Tags */}
      <section className="pt-6 pb-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <div className="aspect-[21/9] relative">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            
            {/* Tags attached to bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-carbon px-3 py-1 text-sm font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          
          <h1 
            className="text-3xl font-bold text-foreground sm:text-4xl text-balance"
          >
            {post.title}
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article 
            className="prose prose-lg max-w-none text-foreground prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-foreground prose-a:underline prose-pre:bg-secondary prose-pre:text-secondary-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author Card */}
          <div className="mt-16 rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Sein Muwana"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Sein Muwana</h3>
                <p className="text-sm text-muted-foreground">
                  Software Engineer | AI & Automation Enthusiast
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              I&apos;m a software engineer based in Namibia, passionate about using technology to solve real-world problems. 
              Follow my journey as I explore AI, automation, and AgriTech.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 
            className="text-2xl font-bold text-foreground"
          >
            Enjoyed this article?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Check out more articles or get in touch to discuss these topics.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/blog">More Articles</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
