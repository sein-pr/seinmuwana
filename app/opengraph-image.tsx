import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const alt = "Sein Muwana, software engineer in Windhoek"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const font = await readFile(path.join(process.cwd(), "public/fonts/inter-latin-800-normal.woff"))
  const regular = await readFile(path.join(process.cwd(), "public/fonts/inter-latin-400-normal.woff"))

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#ffffff",
          padding: 72,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#b4b4b4" }}>seinmuwana.netlify.app</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2, display: "flex" }}>
            Software that removes the busywork.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#d2d2d2" }}>
            Sein Muwana · Software engineer · Windhoek, Namibia
          </div>
        </div>
        <div style={{ display: "flex", width: 160, height: 8, borderRadius: 8, background: "#9671ff" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: font, weight: 800, style: "normal" },
      ],
    },
  )
}
