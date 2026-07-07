/**
 * Fixed, full-page background: a subtle grid texture and one faint blue glow.
 * Kept intentionally restrained for a clean, professional feel.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-40" />

      {/* single faint glow, top */}
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[130px]" />
    </div>
  );
}
