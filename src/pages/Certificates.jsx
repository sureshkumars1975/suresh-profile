import usePageTitle from "../hooks/usePageTitle";
import { useState } from "react";
import { certificates, certificateSlides } from "../data/profile";
import BackHome from "../components/BackHome";
import SectionHeading from "../components/SectionHeading";
import { CertificateCard, Lightbox } from "../components/Cards";

export default function Certificates() {
  usePageTitle("Certificates");
  const [open, setOpen] = useState(null);
  return (
    <main className="mx-auto max-w-7xl px-5 pt-24 pb-24 lg:px-8">
      <BackHome />
      <SectionHeading
        title="Professional Certifications"
        subtitle="Cloud computing, database and development certifications."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <CertificateCard key={c.title} cert={c} onOpen={() => setOpen(i)} />
        ))}
      </div>
      <Lightbox items={certificateSlides} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
    </main>
  );
}
