import usePageTitle from "../hooks/usePageTitle";
import { useMemo, useState } from "react";
import { Calendar, Search } from "lucide-react";
import { academicProfiles, patents, events, publications, researchAreas } from "../data/profile";
import BackHome from "../components/BackHome";
import SectionHeading from "../components/SectionHeading";
import { PatentCard, PublicationCard, ProfileCard } from "../components/Cards";

const TYPES = ["All", ...new Set(publications.map((p) => p.type))];
const SORTS = {
  newest: (a, b) => b.year - a.year || (b.citedBy ?? 0) - (a.citedBy ?? 0),
  oldest: (a, b) => a.year - b.year,
  cited: (a, b) => (b.citedBy ?? 0) - (a.citedBy ?? 0) || b.year - a.year,
};

export default function Publications() {
  usePageTitle("Publications");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("newest");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications
      .filter((p) => type === "All" || p.type === type)
      .filter((p) => !q || `${p.title} ${p.authors} ${p.venue} ${p.year}`.toLowerCase().includes(q))
      .sort(SORTS[sort]);
  }, [query, type, sort]);

  const citations = publications.reduce((n, p) => n + (p.citedBy ?? 0), 0);
  const years = publications.map((p) => p.year);

  return (
    <main className="mx-auto max-w-7xl px-5 pt-24 pb-24 lg:px-8">
      <BackHome />
      <SectionHeading
        title="Research & Publications"
        subtitle="Research contributions, academic profiles and program involvement."
      />

      <div className="reveal mb-14 grid grid-cols-3 gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center">
        <div>
          <p className="text-3xl font-bold text-slate-900">{publications.length}</p>
          <p className="text-sm text-slate-500">Publications</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-slate-900">{citations}</p>
          <p className="text-sm text-slate-500">Citations (Google Scholar)</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-slate-900">
            {Math.min(...years)}–{Math.max(...years)}
          </p>
          <p className="text-sm text-slate-500">Active years</p>
        </div>
      </div>

      <section className="mb-14">
        <h3 className="mb-5 text-2xl font-bold text-slate-900">Research Areas</h3>
        <div className="flex flex-wrap gap-3">
          {researchAreas.map((r) => (
            <span key={r} className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm text-indigo-700">
              {r}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="mb-5 text-2xl font-bold text-slate-900">Publications</h3>

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search publications</span>
            <Search className="absolute top-3 left-3.5 h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, author, venue or year…"
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pr-4 pl-11 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none"
            />
          </label>
          <div className="flex gap-2" role="group" aria-label="Filter by type">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                aria-pressed={type === t}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  type === t ? "bg-indigo-600 text-white" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort publications"
            className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="cited">Most cited</option>
          </select>
        </div>

        <p className="mb-4 text-sm text-slate-500">
          Showing {list.length} of {publications.length}
        </p>
        {list.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {list.map((p) => (
              <PublicationCard key={p.title} pub={p} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
            No publications match your search.
          </p>
        )}
      </section>

      <section id="patents" className="mb-16 scroll-mt-24">
        <h3 className="mb-5 text-2xl font-bold text-slate-900">Patents</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patents.map((p) => (
            <PatentCard key={p.applicationNo} patent={p} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="mb-5 text-2xl font-bold text-slate-900">Academic Profiles</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicProfiles.map((a) => (
            <ProfileCard key={a.title} profile={a} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-5 text-2xl font-bold text-slate-900">Programs & Events</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <div key={e.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                <Calendar className="h-4 w-4" /> {e.date}
              </p>
              <h4 className="mb-2 text-lg font-semibold text-slate-900">{e.title}</h4>
              <p className="text-sm text-slate-600">{e.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
