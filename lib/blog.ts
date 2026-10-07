export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: "Automation" | "AgriTech" | "AI" | "Career" | "Programming"
  tags: string[]
  image: string
  imageAlt: string
}

/** Minutes to read, at ~220 words per minute. */
export function readTime(post: Pick<BlogPost, "content">) {
  const words = post.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-rpa",
    title: "Getting started with RPA: what I learned at Agribank",
    excerpt: "How I picked processes to automate with Power Automate and UiPath, and what I'd check before building a bot.",
    date: "2025-06-15",
    category: "Automation",
    tags: ["RPA", "Power Automate", "UiPath"],
    image: "/images/blog/rpa-automation.jpg",
    imageAlt: "Engineers watching process dashboards on a wall of screens",
    content: `
      <p>During my internship at the Agricultural Bank of Namibia I built automations with Power Automate and UiPath. By the end, they had cut manual processes by about 75%. Most of that came from choosing the right processes, not from clever bots.</p>

      <h2>What RPA is</h2>
      <p>Robotic process automation is software that does what a person does at a keyboard: opens an application, reads a field, copies it somewhere else, clicks submit. It works best on tasks that follow fixed rules and happen often.</p>

      <h2>How I chose what to automate</h2>
      <ul>
        <li><strong>Frequency.</strong> A task done fifty times a week is worth more than one done twice a month.</li>
        <li><strong>Rules.</strong> If a person has to make a judgement call every time, a bot will struggle.</li>
        <li><strong>Stable screens.</strong> UI-driven bots break when the application changes, so I preferred systems with APIs or connectors.</li>
      </ul>

      <h2>Power Automate or UiPath</h2>
      <p>Power Automate was the quicker choice when the work lived in Microsoft 365 and could use built-in connectors. UiPath earned its place when I had to drive an application that had no connector, and needed more control over exceptions.</p>

      <h2>What I'd check before building</h2>
      <ol>
        <li>Write the process down step by step with the person who does it today.</li>
        <li>List the exceptions. They decide how much work the bot really is.</li>
        <li>Agree what happens when the bot fails, and who gets told.</li>
        <li>Test with real cases before it goes live, and keep the people who use it involved.</li>
      </ol>

      <p>The same approach carried into the Freshworks workflows I set up for user access requests and approvals.</p>
    `,
  },
  {
    slug: "agritech-namibia-future",
    title: "Why AgriSense starts with a photo",
    excerpt: "Smallholder farmers in Namibia need affordable tools. A phone camera is already in their pocket.",
    date: "2025-05-20",
    category: "AgriTech",
    tags: ["AgriTech", "Namibia", "AgriSense"],
    image: "/images/blog/agritech-namibia.jpg",
    imageAlt: "Aerial view of crop rows on a farm",
    content: `
      <p>Namibia has a semi-arid climate and erratic rainfall, and many farmers still manage disease by experience and observation. That works until a disease spreads faster than anyone can recognise it.</p>

      <h2>The constraint is cost</h2>
      <p>Precision agriculture often assumes sensors, drones or specialist equipment. For a smallholder farmer that is out of reach. I wanted AgriSense, my honours thesis, to start from something a farmer already has: a phone that can take a picture of a leaf.</p>

      <h2>What a photo can tell you</h2>
      <p>Many diseases show up on leaves before they show up in the harvest. Early blight and septoria on tomatoes, for example, leave visible marks. A trained model can learn to recognise those marks and flag them early.</p>

      <h2>What the photo can't tell you</h2>
      <p>Whether to act depends on conditions: soil moisture, temperature, rainfall. AgriSense pairs the detection with soil and weather data from public APIs, so the advice reflects the farm and the week, not just the image.</p>

      <h2>What's next</h2>
      <p>IoT sensors and better accessibility features are planned. They come later because the photo-first version has to work on its own before more hardware is added.</p>
    `,
  },
  {
    slug: "machine-learning-crop-diseases",
    title: "How AgriSense detects tomato leaf diseases",
    excerpt: "A plain-language look at the YOLOv8 changes in my thesis: CBAM attention and a BiRepGFPN feature pyramid.",
    date: "2025-04-10",
    category: "AI",
    tags: ["YOLOv8", "Computer vision", "Deep learning"],
    image: "/images/blog/machine-learning-crops.jpg",
    imageAlt: "Close-up of green plant leaves",
    content: `
      <p>AgriSense uses an object detector to find diseased areas on tomato leaves. I started from YOLOv8, a fast single-pass detector, and changed two parts of it.</p>

      <h2>Why YOLOv8</h2>
      <p>A detector that runs in one pass is quick enough to be useful on modest hardware. That matters for a tool meant to be affordable.</p>

      <h2>CBAM: where to look</h2>
      <p>The Convolutional Block Attention Module teaches the network which feature channels and which image regions matter most. On a leaf, that helps it focus on a lesion instead of the veins or soil behind it.</p>

      <h2>BiRepGFPN: combining scales</h2>
      <p>Disease spots can be tiny or large. A feature pyramid lets the network combine fine detail with wider context. The Bi-directional Reparameterized Generalized Feature Pyramid Network passes information both ways between scales, which helps with small lesions.</p>

      <h2>From detection to advice</h2>
      <p>A detection on its own isn't advice. AgriSense combines it with soil and weather API data in a decision support platform, so the farmer sees what was found and what conditions make it worse.</p>

      <h2>Limits</h2>
      <p>I validated the system with simulation and limited field data. That is encouraging, not conclusive. More images from real farms, in real light, are the next step.</p>
    `,
  },
  {
    slug: "digital-transformation-banking",
    title: "What a bank internship taught me about internal tools",
    excerpt: "Requirements, testing and the unglamorous work of replacing manual workflows.",
    date: "2025-03-25",
    category: "Career",
    tags: ["Internship", "Requirements", "Testing"],
    image: "/images/blog/digital-banking.jpg",
    imageAlt: "Team at desks in a modern office",
    content: `
      <p>My internship at the Agricultural Bank of Namibia ran from February to July 2025. I built a user access management system, wrote automations and managed requirements for a website revamp. Four things stuck with me.</p>

      <h2>1. The requirement behind the request</h2>
      <p>People ask for a feature. What they need is usually a problem solved. Asking "what happens today?" and watching someone do the task showed me steps nobody had mentioned.</p>

      <h2>2. Manual workflows hide in plain sight</h2>
      <p>The access management system replaced manual steps that had grown up over time. Digitising them improved efficiency by up to 80%. Most of the gain came from removing hand-offs.</p>

      <h2>3. Testing is part of delivery</h2>
      <p>I ran system tests and supported user acceptance testing. Letting the real users try a tool before launch caught problems I would not have thought to look for.</p>

      <h2>4. Communication is the project</h2>
      <p>Business and technical teams use different words for the same thing. A lot of my time went on translating between them and writing things down so that nobody had to rely on memory.</p>
    `,
  },
  {
    slug: "python-automation-scripts",
    title: "Three small Python scripts that save time",
    excerpt: "Rename files by date, merge CSV files and find duplicates, using only the standard library.",
    date: "2025-02-18",
    category: "Programming",
    tags: ["Python", "Scripting"],
    image: "/images/blog/python-automation.jpg",
    imageAlt: "Code editor with Python on a monitor",
    content: `
      <p>You don't need a framework to automate small jobs. These three scripts use only Python's standard library.</p>

      <h2>1. Prefix files with their modified date</h2>
      <pre><code>from datetime import datetime
from pathlib import Path

folder = Path("downloads")
for path in folder.iterdir():
    if path.is_file():
        stamp = datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d")
        path.rename(path.with_name(f"{stamp}_{path.name}"))</code></pre>
      <p>Run it twice and the prefix is added twice, so check for an existing date first if you plan to reuse it.</p>

      <h2>2. Merge CSV files with the same columns</h2>
      <pre><code>import csv
from pathlib import Path

files = sorted(Path("reports").glob("*.csv"))
with open("merged.csv", "w", newline="", encoding="utf-8") as out:
    writer = None
    for file in files:
        with open(file, newline="", encoding="utf-8") as src:
            reader = csv.DictReader(src)
            if writer is None:
                writer = csv.DictWriter(out, fieldnames=reader.fieldnames)
                writer.writeheader()
            writer.writerows(reader)</code></pre>

      <h2>3. Find duplicate files by content</h2>
      <pre><code>import hashlib
from collections import defaultdict
from pathlib import Path

seen = defaultdict(list)
for path in Path("photos").rglob("*"):
    if path.is_file():
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        seen[digest].append(path)

for paths in seen.values():
    if len(paths) > 1:
        print("Duplicates:", *paths, sep="\\n  ")</code></pre>
      <p>This reads each file fully, which is fine for photos and documents but slow for very large files.</p>
    `,
  },
  {
    slug: "project-management-tech",
    title: "Running requirements for a website revamp",
    excerpt: "What I did as project manager on the Agribank website revamp, and what I'd repeat.",
    date: "2025-01-30",
    category: "Career",
    tags: ["Project management", "Requirements"],
    image: "/images/blog/project-management.jpg",
    imageAlt: "Team planning with sticky notes on a wall",
    content: `
      <p>As an intern at the Agricultural Bank of Namibia I gathered and documented the requirements for a website revamp, then coordinated the business and technical teams as project manager. This is what I'd repeat.</p>

      <h2>Write requirements in plain language</h2>
      <p>If a business owner can't read a requirement and say "yes, that's what I meant", it's not finished. I wrote them as short statements of what a visitor or staff member needs to be able to do.</p>

      <h2>Keep one list</h2>
      <p>Requirements scattered across emails and chat get lost. One shared list, with an owner for each item, meant there was always an answer to "did we agree to that?".</p>

      <h2>Confirm before you build</h2>
      <p>I walked stakeholders through the list before development started. Changes at that point cost a conversation. Changes after build cost rework.</p>

      <h2>Report status plainly</h2>
      <p>Done, in progress, blocked, and who needs to act. Short, regular updates kept everyone aligned without extra meetings.</p>
    `,
  },
]

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug)
export const blogCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))]
