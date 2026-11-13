import usePageTitle from "../hooks/usePageTitle";
import { useState } from "react";
import { gallery } from "../data/profile";
import BackHome from "../components/BackHome";
import SectionHeading from "../components/SectionHeading";
import { GalleryCard, Lightbox } from "../components/Cards";

export default function Gallery() {
  usePageTitle("Gallery");
  const [open, setOpen] = useState(null);
  return (
    <main className="mx-auto max-w-7xl px-5 pt-24 pb-24 lg:px-8">
      <BackHome />
      <SectionHeading
        title="Achievement Gallery"
        subtitle="Showcasing moments of excellence and academic achievements."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((g, i) => (
          <GalleryCard key={g.src} item={g} onOpen={() => setOpen(i)} />
        ))}
      </div>
      <Lightbox items={gallery} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
    </main>
  );
}
