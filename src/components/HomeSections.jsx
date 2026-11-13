import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { academicProfiles, patents, certificates, certificateSlides, gallery, publications, researchAreas } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { CertificateCard, GalleryCard, Lightbox, PublicationCard, ProfileCard, PatentCard } from "./Cards";

function MoreLink({ to, children }) {
  return (
    <div className="mt-10 text-center">
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 font-medium text-indigo-700 transition hover:bg-indigo-50"
      >
        {children} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function ResearchPreview() {
  const top = [...publications].sort((a, b) => (b.citedBy ?? 0) - (a.citedBy ?? 0) || b.year - a.year).slice(0, 4);
  const totalCitations = publications.reduce((n, p) => n + (p.citedBy ?? 0), 0);

  return (
    <section id="research" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Research & Publications"
          subtitle="Research contributions, academic profiles and program involvement."
        />

        <div className="reveal mb-12 flex flex-wrap justify-center gap-3">
          {researchAreas.map((r) => (
            <span key={r} className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm text-indigo-700">
              {r}
            </span>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-2xl font-bold text-slate-900">Most cited work</h3>
          <p className="text-sm text-slate-500">
            {publications.length} publications · {totalCitations} citations on Google Scholar
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {top.map((p) => (
            <PublicationCard key={p.title} pub={p} />
          ))}
        </div>

        <div id="patents" className="mt-16 scroll-mt-24">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">Patents</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {patents.map((p) => (
              <PatentCard key={p.applicationNo} patent={p} />
            ))}
          </div>
        </div>

        <h3 className="mt-16 mb-6 text-2xl font-bold text-slate-900">Academic Profiles</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicProfiles.map((a) => (
            <ProfileCard key={a.title} profile={a} className="reveal" />
          ))}
        </div>

        <MoreLink to="/publications">View all publications</MoreLink>
      </div>
    </section>
  );
}

export function CertificatesPreview() {
  const [open, setOpen] = useState(null);
  return (
    <section id="certificates" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Certifications"
        title="Professional Certifications"
        subtitle="Cloud computing, database and development certifications."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.slice(0, 3).map((c, i) => (
          <CertificateCard key={c.title} cert={c} onOpen={() => setOpen(i)} />
        ))}
      </div>
      <MoreLink to="/certificates">View all {certificates.length} certificates</MoreLink>
      <Lightbox items={certificateSlides} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
    </section>
  );
}

export function GalleryPreview() {
  const [open, setOpen] = useState(null);
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Achievement Gallery"
          subtitle="Moments of excellence and academic achievements."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((g, i) => (
            <GalleryCard key={g.src} item={g} onOpen={() => setOpen(i)} />
          ))}
        </div>
        <MoreLink to="/gallery">Open full gallery</MoreLink>
        <Lightbox items={gallery} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
      </div>
    </section>
  );
}
