import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav className="flex gap-5">
          <Link to="/publications" className="hover:text-indigo-600">Publications</Link>
          <Link to="/certificates" className="hover:text-indigo-600">Certificates</Link>
          <Link to="/gallery" className="hover:text-indigo-600">Gallery</Link>
          {profile.cv && (
            <a href={profile.cv} download className="hover:text-indigo-600">
              CV
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
