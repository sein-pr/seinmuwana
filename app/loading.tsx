export default function Loading() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-20" role="status" aria-label="Loading page">
      <div className="h-12 w-2/3 max-w-xl animate-pulse rounded bg-fog motion-reduce:animate-none" />
      <div className="mt-6 h-5 w-full max-w-2xl animate-pulse rounded bg-fog motion-reduce:animate-none" />
      <div className="mt-3 h-5 w-5/6 max-w-xl animate-pulse rounded bg-fog motion-reduce:animate-none" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}
