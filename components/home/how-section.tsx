"use client"

import { useState } from "react"
import { AnimatePresence, LayoutGroup, motion } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"
import { Bot, Check, FileText, Gauge, Keyboard, Mail, Table2, UserCheck } from "lucide-react"
import { Section } from "@/components/layout/section"
import { SplitHeading } from "@/components/motion/split-heading"
import { CountUp } from "@/components/motion/count-up"

const how = [
  {
    title: "Map it",
    body: "Sit with the people who prepare the report and write down every step, including the exceptions. The list shows which steps are worth removing.",
  },
  {
    title: "Build it and prove it",
    body: "Build the dashboard, then reconcile it line by line against the reports Finance already trusts. Fix the mapping until the numbers agree.",
  },
  {
    title: "Automate the refresh",
    body: "A robot pulls the data from SAP and SharePoint on a schedule, so the dashboard is live and managers present from it instead of from slides.",
  },
]

const nodes = [
  { id: "export", icon: FileText, label: "Export from SAP and SharePoint", keep: false },
  { id: "clean", icon: Table2, label: "Clean and merge in Excel", keep: false },
  { id: "reconcile", icon: UserCheck, label: "Reconcile against Finance's reports", keep: true },
  { id: "rebuild", icon: Keyboard, label: "Rebuild charts and slides", keep: false },
  { id: "redo", icon: Mail, label: "Redo when a number changes", keep: false },
]

function Visual({ active }: { active: number }) {
  const reduce = useReducedMotion()
  const automated = active === 2

  const after = [
    { id: "robot", icon: Bot, label: "A robot pulls SAP and SharePoint data on a schedule" },
    { id: "dash", icon: Gauge, label: "The dashboard refreshes. Managers present live." },
  ]

  return (
    <div className="rounded-lg border border-white/10 bg-[#1d1d1d] p-5">
      <p className="text-sm text-white/60">
        {["Today: five manual steps", "Reconciled against Finance's own reports", "After: two steps, no hand-offs"][active]}
      </p>
      <LayoutGroup>
        <ul className="relative mt-4 space-y-2">
          <AnimatePresence initial={false} mode="popLayout">
            {(automated ? after : nodes).map((node) => (
              <motion.li
                key={node.id}
                layout={reduce ? false : "position"}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center gap-3 rounded-lg bg-white/5 px-3 py-3"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <node.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="flex-1 text-base text-white">{node.label}</span>
                {active === 1 && node.id === "reconcile" && (
                  <motion.span
                    initial={reduce ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22, delay: 0.25 }}
                    className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground"
                  >
                    <Check className="h-3 w-3" aria-hidden="true" />
                    Matches
                  </motion.span>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
          {automated && !reduce && (
            <motion.span
              aria-hidden="true"
              className="absolute left-[1.7rem] top-[2.9rem] size-2 rounded-full bg-primary shadow-[0_0_12px_3px_rgba(150,113,255,0.7)]"
              animate={{ y: [0, 28, 28], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </ul>
      </LayoutGroup>

      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
        <div>
          <p className="tabular text-3xl font-extrabold text-white">{automated ? "Live" : "A week"}</p>
          <p className="text-sm text-white/60">{automated ? "dashboard at every meeting" : "of prep per meeting"}</p>
        </div>
        <div>
          <p className="tabular text-3xl font-extrabold text-white">
            {automated ? <CountUp to={75} prefix="~" suffix="%" /> : "–"}
          </p>
          <p className="text-sm text-white/60">less manual effort, RPA robots</p>
        </div>
      </div>
    </div>
  )
}

export function HowSection() {
  const [active, setActive] = useState(0)

  return (
    <Section tone="dark" className="py-20 sm:py-28">
      <SplitHeading text="How I took the week out" inView className="max-w-2xl text-4xl text-white sm:text-[3.5rem] sm:leading-[1.08]" />

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
