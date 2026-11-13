export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-base text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
