import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackHome() {
  return (
    <Link
      to="/"
      className="mb-10 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-indigo-600"
    >
      <ArrowLeft className="h-4 w-4" /> Back to Home
    </Link>
  );
}
