import { useState } from "react";
import { CheckCircle2, Loader2, Mail, MessageSquare, Phone, Send, User, XCircle } from "lucide-react";
import { profile, links } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./BrandIcons";

// FormSubmit AJAX endpoint (the first submission triggers a one-time activation email).
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

const channels = [
  { Icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: LinkedinIcon, label: "LinkedIn", value: "Connect on LinkedIn", href: links.linkedin },
];

const socials = [
  { Icon: LinkedinIcon, label: "LinkedIn", handle: "@suresh-kumar-s-srinivasan", href: links.linkedin, color: "#0A66C2" },
  { Icon: InstagramIcon, label: "Instagram", handle: "@suresh_.nalini", href: links.instagram, color: "#E4405F" },
  { Icon: GithubIcon, label: "GitHub", handle: "@sureshkumars1975", href: links.github, color: "#24292f" },
];

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-slate-50 p-4 pl-12 text-slate-800 placeholder-slate-400 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none disabled:opacity-50";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [honey, setHoney] = useState(""); // spam trap: humans never fill this
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (honey) return setStatus("sent"); // silently drop bots
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Portfolio message from ${form.name}`, _template: "table" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading eyebrow="Contact" title="Contact Me" subtitle="Feel free to reach out through any of these channels." />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="reveal rounded-3xl border border-slate-100 bg-white p-8 shadow-md">
            <h3 className="text-gradient mb-6 text-2xl font-semibold">Get in Touch</h3>
            <ul className="space-y-6">
              {channels.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="rounded-lg border border-indigo-100 bg-indigo-50 p-3">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-medium text-slate-900">{label}</p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="break-all text-slate-600 hover:text-indigo-600"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl border border-slate-100 bg-white p-8 shadow-md">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900">
              <span className="inline-block h-1 w-8 rounded-full bg-indigo-500" /> Connect With Me
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {socials.map(({ Icon, label, handle, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-slate-300 hover:bg-white"
                >
                  <Icon className="h-5 w-5 shrink-0" style={{ color }} />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-800">{label}</span>
                    <span className="block truncate text-xs text-slate-500">{handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal rounded-3xl border border-slate-100 bg-white p-8 shadow-md">
          <h3 className="text-gradient mb-2 text-3xl font-bold">Send a Message</h3>
          <p className="mb-8 text-slate-600">Have something to discuss? Send me a message and let's talk.</p>

          <form onSubmit={submit} className="space-y-5">
            <input
              type="text"
              name="_honey"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <label className="relative block">
              <span className="sr-only">Your name</span>
              <User className="absolute top-4 left-4 h-5 w-5 text-slate-400" />
              <input name="name" value={form.name} onChange={update} placeholder="Your Name" autoComplete="name" required maxLength={100} disabled={sending} className={inputCls} />
            </label>
            <label className="relative block">
              <span className="sr-only">Your email</span>
              <Mail className="absolute top-4 left-4 h-5 w-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="Your Email"
                autoComplete="email"
                required
                disabled={sending}
                className={inputCls}
              />
            </label>
            <label className="relative block">
              <span className="sr-only">Your message</span>
              <MessageSquare className="absolute top-4 left-4 h-5 w-5 text-slate-400" />
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                placeholder="Your Message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                disabled={sending}
                className={`${inputCls} resize-none`}
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 font-medium text-white shadow-md transition hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              {sending ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite">
              {status === "sent" && (
                <p className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" /> Your message has been sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">
                  <XCircle className="h-5 w-5" /> Something went wrong. Please try again or email directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
