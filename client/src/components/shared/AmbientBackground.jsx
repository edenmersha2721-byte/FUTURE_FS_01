/**
 * Fixed, full-page atmospheric background: grid texture + drifting gradient
 * blobs. Rendered once behind all content for depth.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-60" />

      {/* gradient blobs */}
      <div className="absolute -top-40 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-0 h-[32rem] w-[32rem] translate-x-1/3 rounded-full bg-violet-600/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] -translate-x-1/4 translate-y-1/4 rounded-full bg-blue-600/10 blur-[120px]" />
    </div>
  );
}
