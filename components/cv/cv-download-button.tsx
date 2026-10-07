"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { downloadCVFromBack4App } from "@/lib/pdf-generator"

export function CvDownloadButton({ className }: { className?: string }) {
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)

  async function onClick() {
    setBusy(true)
    setFailed(false)
    try {
      await downloadCVFromBack4App()
    } catch {
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
        {failed ? "The PDF couldn't be downloaded. Try again, or email me for a copy." : ""}
      </p>
    </div>
  )
}
