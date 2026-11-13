import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import useReveal from "./hooks/useReveal";

// Sub-pages are split into their own chunks and loaded on demand.
const Publications = lazy(() => import("./pages/Publications"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center" role="status" aria-label="Loading">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
    </div>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-lg bg-indigo-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <div id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
