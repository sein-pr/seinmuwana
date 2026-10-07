"use client"

import { useState } from "react"
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react"
import { Check, FileText, Keyboard, Mail, Table2, UserCheck, Workflow } from "lucide-react"
import { Section } from "@/components/layout/section"
import { SplitHeading } from "@/components/motion/split-heading"
import { CountUp } from "@/components/motion/count-up"

const how = [
  {
    title: "Map it",
    body: "Sit with the people who do the work and write the process down step by step, including the exceptions. That list decides what is worth building.",
  },
  {
    title: "Build and test it with them",
    body: "Build the smallest version that removes a step, then run system tests and user acceptance testing with the real users before it goes live.",
  },
  {
    title: "Automate and measure",
    body: "Replace the hand-offs with a workflow in Power Automate, UiPath or a purpose-built app, then compare the process before and after.",
  },
]

const nodes = [
  { id: "form", icon: FileText, label: "Paper or form request", keep: true, tested: true },
  { id: "mail", icon: Mail, label: "Forwarded by email", keep: false, tested: false },
  { id: "sheet", icon: Table2, label: "Logged in a spreadsheet", keep: false, tested: false },
  { id: "approve", icon: UserCheck, label: "Approved by hand", keep: true, tested: true },
  { id: "type", icon: Keyboard, label: "Typed into the system", keep: false, tested: false },
]

function Visual({ active }: { active: number }) {
  const reduce = useReducedMotion()
  const automated = active === 2
  const list = automated ? nodes.filter((n) => n.keep) : nodes

  return (
    <div className="rounded-lg border border-white/10 bg-[#1d1d1d] p-5">
      <p className="text-sm text-white/60">{["Process as it runs today", "Tested with the people who use it", "After automation"][active]}</p>
      <LayoutGroup>
        <ul className="mt-4 space-y-2">
          <AnimatePresence initial={false} mode="popLayout">
            {list.map((node) => (
              <motion.li
                key={node.id}
                layout={reduce ? false : "position"}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  {automated ? <Workflow className="h-4 w-4" aria-hidden="true" /> : <node.icon className="h-4 w-4" aria-hidden="true" />}
                </span>
                <span className="flex-1 text-base text-white">
                  {automated ? (node.id === "form" ? "Request submitted" : "Automatic approval") : node.label}
                </span>
                {active === 1 && node.tested && (
                  <motion.span
                    initial={reduce ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22 }}
                    className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground"
                  >
                    <Check className="h-3 w-3" aria-hidden="true" />
                    Tested
                  </motion.span>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </LayoutGroup>

      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
        <div>
          <p className="tabular text-3xl font-extrabold text-white">
            {automated ? <CountUp to={80} prefix="up to " suffix="%" /> : "–"}
          </p>
          <p className="text-sm text-white/60">efficiency gain, access system</p>
        </div>
        <div>
          <p className="tabular text-3xl font-extrabold text-white">
            {automated ? <CountUp to={75} prefix="~" suffix="%" /> : "–"}
          </p>
          <p className="text-sm text-white/60">fewer manual processes, RPA</p>
        </div>
      </div>
    </div>
  )
}

export function HowSection() {
  const [active, setActive] = useState(0)

  return (
    <Section tone="dark" className="py-20 sm:py-28">
      <SplitHeading text="How I work through it" inView className="max-w-2xl text-4xl text-white sm:text-[3.5rem] sm:leading-[1.08]" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="lg:order-1">
          {how.map((step, i) => (
            <motion.div
              key={step.title}
              onViewportEnter={() => setActive(i)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
              className={`border-t border-white/15 py-10 transition-opacity duration-300 lg:min-h-[44vh] ${active === i ? "opacity-100" : "lg:opacity-45"}`}
            >
              <h3 className="font-label text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-3 max-w-md text-lg leading-[1.6] text-white/75">{step.body}</p>
              {/* Small screens can't pin a side panel, so each step carries its own picture. */}
              <div className="mt-6 lg:hidden">
                <Visual active={i} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="order-1 hidden lg:order-2 lg:block">
          <div className="sticky top-28">
            <Visual active={active} />
          </div>
        </div>
      </div>
    </Section>
  )
}
