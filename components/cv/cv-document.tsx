import { Document, Page, Text, View, Font, StyleSheet, Link } from "@react-pdf/renderer"
import type { CV } from "@/lib/cv"

const VIOLET = "#9671ff"
const INK = "#1d1d1d"
const MUTED = "#5c5c5c"
const RULE = "#d2d2d2"

let registered = false
export function registerCvFonts(origin: string) {
  if (registered) return
  Font.register({
    family: "Inter",
    fonts: [
      { src: `${origin}/fonts/inter-latin-400-normal.woff`, fontWeight: 400 },
      { src: `${origin}/fonts/inter-latin-600-normal.woff`, fontWeight: 600 },
      { src: `${origin}/fonts/inter-latin-800-normal.woff`, fontWeight: 800 },
    ],
  })
  // Keep words whole; the default hyphenation splits names and tool names.
  Font.registerHyphenationCallback((word) => [word])
  registered = true
}

const s = StyleSheet.create({
  page: { fontFamily: "Inter", fontSize: 9, lineHeight: 1.4, color: INK, paddingTop: 36, paddingBottom: 30, paddingHorizontal: 44 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingBottom: 12, borderBottomWidth: 2, borderBottomColor: VIOLET },
  name: { fontSize: 28, fontWeight: 800, letterSpacing: -0.6, lineHeight: 1.05 },
  role: { fontSize: 11, color: MUTED, marginTop: 4 },
  contact: { alignItems: "flex-end", fontSize: 8.5, color: MUTED, lineHeight: 1.55 },
  link: { color: MUTED, textDecoration: "none" },
  section: { marginTop: 12 },
  h2: { fontSize: 8.5, fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase", color: INK, marginBottom: 6, paddingBottom: 3, borderBottomWidth: 0.75, borderBottomColor: RULE },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  title: { fontSize: 10, fontWeight: 600 },
  period: { fontSize: 8.5, color: MUTED },
  org: { fontSize: 9, color: MUTED, marginBottom: 3 },
  item: { marginBottom: 7 },
  bullet: { flexDirection: "row", marginBottom: 2 },
  dot: { width: 9, color: MUTED },
  bulletText: { flex: 1 },
  skillRow: { flexDirection: "row", marginBottom: 3 },
  skillLabel: { width: 84, fontWeight: 600 },
  skillValue: { flex: 1 },
  two: { flexDirection: "row", gap: 24 },
  col: { flex: 1 },
  ref: { marginBottom: 4 },
})

export function CvDocument({ cv }: { cv: CV }) {
  return (
    <Document title={`${cv.name} CV`} author={cv.name} subject="Curriculum vitae">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <View>
            <Text style={s.name}>{cv.name}</Text>
            <Text style={s.role}>{cv.title}</Text>
          </View>
          <View style={s.contact}>
            <Link src={`mailto:${cv.email}`} style={s.link}>{cv.email}</Link>
            <Link src={cv.phoneHref} style={s.link}>{cv.phone}</Link>
            <Text>{cv.location}</Text>
            <Link src={cv.websiteHref} style={s.link}>{cv.website}</Link>
            <Link src={cv.linkedinHref} style={s.link}>{cv.linkedin}</Link>
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Profile</Text>
          <Text>{cv.profile}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Experience</Text>
          {cv.experience.map((job) => (
            <View key={job.title} style={s.item} wrap={false}>
              <View style={s.row}>
                <Text style={s.title}>{job.title}</Text>
                <Text style={s.period}>{job.period}</Text>
              </View>
              <Text style={s.org}>{job.org}</Text>
              {job.points.map((p) => (
                <View key={p} style={s.bullet}>
                  <Text style={s.dot}>•</Text>
                  <Text style={s.bulletText}>{p}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section} break>
          <Text style={s.h2}>Education</Text>
          {cv.education.map((e) => (
            <View key={e.title} style={s.item} wrap={false}>
              <View style={s.row}>
                <Text style={s.title}>{e.title}</Text>
                <Text style={s.period}>{e.period}</Text>
              </View>
              <Text style={s.org}>{`${e.org}  ·  ${e.note}`}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h2}>Skills</Text>
          {cv.skills.map((k) => (
            <View key={k.label} style={s.skillRow}>
              <Text style={s.skillLabel}>{k.label}</Text>
              <Text style={s.skillValue}>{k.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={[s.section, s.two]} wrap={false}>
          <View style={s.col}>
            <Text style={s.h2}>Languages</Text>
            {cv.languages.map((l) => (
              <Text key={l}>{l}</Text>
            ))}
          </View>
          <View style={[s.col, { flex: 2.2 }]}>
            <Text style={s.h2}>References</Text>
            {cv.references.map((r) => (
              <View key={r.name} style={s.ref}>
                <Text>
                  <Text style={{ fontWeight: 600 }}>{r.name}</Text>
                  <Text style={{ color: MUTED }}>{`  ·  ${r.role}`}</Text>
                </Text>
                <Link src={`mailto:${r.email}`} style={s.link}>{r.email}</Link>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}
