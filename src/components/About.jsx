import { Link } from "react-router-dom";
import { Award, BookOpen, Briefcase, Download, ExternalLink, FileBadge, GraduationCap } from "lucide-react";
import { profile, links, education, experience, skills, publications, certificates, patents } from "../data/profile";
import SectionHeading from "./SectionHeading";

function TimelineCard({ when, title, subtitle }) {
  return (
    <div className="reveal rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="mb-1.5 text-sm font-semibold text-indigo-600">{when}</p>
      <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
      <p className="text-slate-600">{subtitle}</p>
    </div>
  );
}

export default function About() {
  const stats = [
    { Icon: BookOpen, value: publications.length, label: "Publications", note: "Research papers published", to: "/publications" },
    { Icon: FileBadge, value: patents.length, label: "Patents", note: "Published patent applications", to: "/#patents" },
    { Icon: Award, value: certificates.length, label: "Certificates", note: "Professional achievements", to: "/certificates" },
    { Icon: Briefcase, value: `${profile.stats.yearsExperience}+`, label: "Years of Experience", note: "In academia and research" },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading eyebrow="About" title="About Me" subtitle="Transforming ideas into digital experiences" />

      <div className="reveal mx-auto max-w-3xl text-center">
        <h3 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          <span className="text-gradient">Hello, I'm</span> {profile.name}
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{profile.about}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {profile.cv && (
            <a
              href={profile.cv}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-medium text-white shadow-md transition hover:scale-[1.03]"
            >
              <Download className="h-5 w-5" /> Download CV
            </a>
          )}
          <a
            href={links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 font-medium text-indigo-700 transition hover:bg-indigo-50"
          >
            <ExternalLink className="h-5 w-5" /> Google Scholar Profile
          </a>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ Icon, value, label, note, to }) => {
          const body = (
            <>
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                  <Icon className="h-7 w-7 text-indigo-600" />
                </span>
                <span className="text-4xl font-bold text-slate-900">{value}</span>
              </div>
              <p className="text-sm tracking-wider text-slate-500 uppercase">{label}</p>
              <p className="text-xs text-slate-400">{note}</p>
            </>
          );
          const cls =
            "reveal block rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg";
          return to ? (
            <Link key={label} to={to} className={cls}>
              {body}
            </Link>
          ) : (
            <div key={label} className={cls}>
              {body}
            </div>
          );
        })}
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
            <GraduationCap className="h-6 w-6 text-indigo-600" /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e) => (
              <TimelineCard key={e.degree} when={e.year} title={e.degree} subtitle={e.institution} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Briefcase className="h-6 w-6 text-indigo-600" /> Experience
          </h3>
          <div className="space-y-4">
            {experience.map((e) => (
              <TimelineCard key={e.period} when={e.period} title={e.position} subtitle={e.institution} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Skills</h3>
        <div className="reveal flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
