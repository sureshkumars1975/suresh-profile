import usePageTitle from "../hooks/usePageTitle";
import { Link } from "react-router-dom";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="text-gradient font-display text-7xl font-bold">404</p>
      <p className="mt-4 text-slate-600">This page doesn't exist.</p>
      <Link to="/" className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
        Back to Home
      </Link>
    </main>
  );
}
