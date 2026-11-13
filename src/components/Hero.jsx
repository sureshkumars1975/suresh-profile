import { Link } from "react-router-dom";
import { BookOpen, Mail, Sparkles } from "lucide-react";
import { profile, links } from "../data/profile";
import useTypewriter from "../hooks/useTypewriter";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const socials = [
  { href: links.github, label: "GitHub", Icon: GithubIcon },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl space-y-7 px-5 py-16 lg:px-8">
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-5">
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-xs font-medium text-indigo-600 shadow-sm sm:text-sm">
              <Sparkles className="h-4 w-4" /> Ready to Innovate
            </span>

            <h1 className="reveal font-display text-5xl leading-[1.05] font-bold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl">
              {profile.firstLine}
              <br />
              <span className="text-gradient">{profile.secondLine}</span>
            </h1>

            <p
              className="reveal flex h-8 items-center text-xl font-light text-slate-600 md:text-2xl"
              aria-live="polite"
            >
              {role}
              <span className="caret ml-1 inline-block h-6 w-[3px] bg-indigo-500" />
            </p>
          </div>

          {/* Postage-stamp sized profile photo */}
          <figure className="reveal stamp-shadow shrink-0 -rotate-3 transition-transform duration-300 hover:rotate-0">
            <div className="stamp">
              <img
                src={profile.photo}
                alt={profile.name}
                width="413"
                height="444"
                className="aspect-[7/9] w-28 object-cover sm:w-36"
                fetchPriority="high"
              />
            </div>
          </figure>
        </div>

        <p className="reveal max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">{profile.tagline}</p>

        <div className="reveal flex flex-wrap gap-2.5">
          {profile.focus.map((f) => (
            <span key={f} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600">
              {f}
            </span>
          ))}
        </div>

        <div className="reveal flex flex-wrap gap-3">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:scale-[1.03] hover:shadow-lg"
          >
            <BookOpen className="h-4 w-4" /> Publications
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-medium text-indigo-700 transition hover:border-indigo-400 hover:bg-indigo-50"
          >
            <Mail className="h-4 w-4" /> Contact
          </Link>
        </div>

        <div className="reveal flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
