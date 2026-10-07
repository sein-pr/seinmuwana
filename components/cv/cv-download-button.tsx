"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cv } from "@/lib/cv"

export function CvDownloadButton({ className }: { className?: string }) {
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)

  async function onClick() {
    setBusy(true)
    setFailed(false)
    try {
      // Loaded on demand: the PDF engine is large and only needed here.
      const [{ pdf }, { CvDocument, registerCvFonts }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./cv-document"),
      ])
      registerCvFonts(window.location.origin)
      const blob = await pdf(<CvDocument cv={cv} />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Sein_Muwana_CV.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (error) {
      console.error("CV PDF generation failed", error)
      setFailed(true)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={className}>
      <Button onClick={onClick} disabled={busy} size="lg" aria-describedby={failed ? "cv-error" : undefined}>
        {busy ? (
          <>
            <Loader2 className="animate-spin motion-reduce:animate-none" aria-hidden="true" />
            Preparing PDF…
          </>
        ) : (
          <>
            <Download aria-hidden="true" />
            Download PDF
          </>
        )}
      </Button>
      <p id="cv-error" role="alert" className="mt-2 min-h-5 text-sm text-destructive">
        {failed ? "The PDF couldn't be created. Try again, or email me for a copy." : ""}
      </p>
    </div>
  )
}
