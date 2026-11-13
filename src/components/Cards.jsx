import { useEffect, useRef } from "react";
import { BookMarked, Building2, Calendar, FileBadge, FileText, ChevronLeft, ChevronRight, ExternalLink, Quote, Users, X } from "lucide-react";
import { thumbOf } from "../data/profile";

export function PublicationCard({ pub }) {
  return (
    <article className="reveal flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm">
        <span className="flex items-center gap-1.5 font-semibold text-indigo-600">
          <Calendar className="h-4 w-4" aria-hidden /> {pub.year}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">{pub.type}</span>
      </div>
      <h3 className="mb-3 text-lg leading-snug font-semibold text-slate-900">
        {pub.link ? (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-indigo-300 decoration-2 underline-offset-4 transition-colors hover:text-indigo-700 hover:underline"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>
      {pub.authors && (
        <p className="mb-2 flex items-start gap-1.5 text-sm text-slate-600">
          <Users className="mt-0.5 h-4 w-4 shrink-0 opacity-70" aria-hidden /> {pub.authors}
        </p>
      )}
      <p className="mb-4 flex items-start gap-1.5 text-sm text-slate-500 italic">
        <BookMarked className="mt-0.5 h-4 w-4 shrink-0 opacity-70" aria-hidden /> {pub.venue}
      </p>
      <div className="mt-auto flex items-center justify-between text-sm">
        {pub.citedBy !== undefined ? (
          <span className="flex items-center gap-1.5 text-slate-500">
            <Quote className="h-4 w-4" aria-hidden /> Cited by {pub.citedBy}
          </span>
        ) : (
          <span />
        )}
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read paper: ${pub.title}`}
            className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-3 py-1.5 font-medium text-indigo-700 transition hover:bg-indigo-100"
          >
            {pub.link.includes("doi.org") ? "Read paper (DOI)" : "Read paper"} <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}

export function CertificateCard({ cert, onOpen }) {
  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
      <button onClick={onOpen} className="overflow-hidden bg-slate-100" aria-label={`Enlarge certificate: ${cert.title}`}>
        <img
          src={thumbOf(cert.image)}
          alt=""
          loading="lazy"
          decoding="async"
          width="800"
          height="618"
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 leading-snug font-semibold text-slate-900">{cert.title}</h3>
        <p className="text-sm text-slate-600">{cert.issuer}</p>
        <p className="mb-3 text-sm text-slate-500">{cert.date}</p>
        <div className="mt-auto text-sm">
          {cert.verify && (
            <a
              href={cert.verify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-600 hover:underline"
            >
              Verify Certificate <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          )}
          {cert.certId && <p className="text-slate-500">Certificate ID: {cert.certId}</p>}
        </div>
      </div>
    </article>
  );
}

export function GalleryCard({ item, onOpen }) {
  return (
    <button
      onClick={onOpen}
      aria-label={`Open photo: ${item.title}`}
      className="reveal group relative block overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left shadow-sm"
    >
      <img
        src={thumbOf(item.src)}
        alt=""
        loading="lazy"
        decoding="async"
        width="800"
        height="600"
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-5 pt-12">
        <h3 className="font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-slate-200">{item.description}</p>
      </div>
    </button>
  );
}

/**
 * Full-screen image viewer.
 * items: [{ src, title, description }], index: number | null
 */
export function Lightbox({ items, index, onClose, onIndex }) {
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const open = index !== null && index !== undefined;
  const count = items.length;
  const go = (d) => onIndex((index + d + count) % count);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!open) return null;
  const item = items[index];
  const navBtn =
    "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 focus-visible:bg-white/25";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
        if (count > 1 && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/25"
      >
        <X className="h-6 w-6" />
      </button>

      {count > 1 && (
        <>
          <button onClick={(e) => (e.stopPropagation(), go(-1))} aria-label="Previous image" className={`${navBtn} left-3 hidden sm:block`}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={(e) => (e.stopPropagation(), go(1))} aria-label="Next image" className={`${navBtn} right-3 hidden sm:block`}>
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full max-w-5xl flex-col items-center">
        <img
          key={item.src}
          src={item.src}
          alt={item.title}
          className="max-h-[78vh] w-auto rounded-xl bg-slate-800 object-contain"
        />
        <figcaption className="mt-3 text-center text-white">
          <p className="font-semibold">{item.title}</p>
          {item.description && <p className="text-sm text-slate-300">{item.description}</p>}
          {count > 1 && (
            <p className="mt-1 text-xs text-slate-400">
              {index + 1} / {count}
            </p>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

/** Academic profile card. Accepts `link` (whole card clickable) or `links` (several labelled links). */
export function ProfileCard({ profile, className = "" }) {
  const base = `flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-md ${className}`;
  const heading = (
    <h4 className="mb-2 flex items-center justify-between gap-2 text-lg font-semibold text-slate-900">
      {profile.title}
      {profile.link && <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-indigo-600" aria-hidden />}
    </h4>
  );
  const text = <p className="text-sm text-slate-600">{profile.description}</p>;

  if (profile.link) {
    return (
      <a href={profile.link} target="_blank" rel="noopener noreferrer" className={`group ${base}`}>
        {heading}
        {text}
      </a>
    );
  }
  return (
    <div className={base}>
      {heading}
      {text}
      <ul className="mt-4 space-y-1.5">
        {profile.links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
            >
              {l.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PatentCard({ patent }) {
  const dates = [
    patent.filed && `Filed ${patent.filed}`,
    patent.published && `Published ${patent.published}`,
    patent.granted && `Granted ${patent.granted}`,
  ].filter(Boolean);
  const statusCls = {
    Granted: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Published: "bg-indigo-50 text-indigo-700 border-indigo-200",
    Filed: "bg-amber-50 text-amber-700 border-amber-200",
  }[patent.status];

  return (
    <article className="reveal flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50">
          <FileBadge className="h-6 w-6 text-indigo-600" aria-hidden />
        </span>
        <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${statusCls}`}>{patent.status}</span>
      </div>
      <h3 className="mb-3 text-lg leading-snug font-semibold text-slate-900">{patent.title}</h3>
      <div className="space-y-1.5 text-sm">
        <div className="flex gap-2">
          <span className="text-slate-500">Application No.</span>
          <span className="font-mono font-medium text-slate-800">{patent.applicationNo}</span>
        </div>
        <div className="flex items-start gap-1.5 text-slate-600">
          <Building2 className="mt-0.5 h-4 w-4 shrink-0 opacity-70" aria-hidden />
          <span>
            {patent.office}
            {patent.journal && ` · ${patent.journal}`}
          </span>
        </div>
        {patent.coInventors && (
          <div className="flex items-start gap-1.5 text-slate-600">
            <Users className="mt-0.5 h-4 w-4 shrink-0 opacity-70" aria-hidden />
            <span>Co-inventor: {patent.coInventors}</span>
          </div>
        )}
      </div>
      <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-4">
        {dates.length > 0 && (
          <p className="flex items-start gap-1.5 text-sm font-medium text-indigo-600">
            <Calendar className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {dates.join(" · ")}
          </p>
        )}
        {patent.pdf && (
          <a
            href={patent.pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View PDF of patent application ${patent.applicationNo}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
          >
            <FileText className="h-4 w-4" aria-hidden /> View PDF
          </a>
        )}
      </div>
    </article>
  );
}
