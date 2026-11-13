import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const NAV = [
  { label: "Home", to: "/#home", id: "home" },
  { label: "About", to: "/#about", id: "about" },
  { label: "Research", to: "/#research", id: "research" },
  { label: "Certificates", to: "/#certificates", id: "certificates" },
  { label: "Gallery", to: "/#gallery", id: "gallery" },
  { label: "Contact", to: "/#contact", id: "contact" },
];

const ROUTE_ACTIVE = { "/publications": "research", "/certificates": "certificates", "/gallery": "gallery" };

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy on the home page; route-based highlight elsewhere.
  useEffect(() => {
    if (pathname !== "/") {
      setActive(ROUTE_ACTIVE[pathname] ?? "");
      return;
    }
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const linkCls = (id) =>
    `relative py-2 text-sm font-medium transition-colors ${
      active === id ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/#home" className="font-display text-xl font-bold text-indigo-700 hover:text-purple-600">
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <Link to={n.to} className={linkCls(n.id)}>
                {n.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 ${
                    active === n.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg p-2 text-slate-600 hover:text-indigo-600 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`fixed inset-x-0 top-16 bg-white shadow-lg transition-all duration-300 md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 pt-3 pb-6">
          {NAV.map((n) => (
            <li key={n.id}>
              <Link
                to={n.to}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-medium ${
                  active === n.id ? "bg-indigo-50 text-indigo-600" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
