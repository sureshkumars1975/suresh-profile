import { useEffect } from "react";

/**
 * App-wide scroll reveal: adds `is-visible` to every `.reveal` element when it
 * enters the viewport. A MutationObserver picks up elements added later
 * (lazy-loaded routes, filtered lists), so pages don't need to opt in.
 */
export default function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.documentElement.classList.add("no-reveal");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    const scan = (root) => {
      if (root.nodeType !== 1) return;
      if (root.matches(".reveal:not(.is-visible)")) io.observe(root);
      root.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };
    scan(document.body);
    const mo = new MutationObserver((muts) => muts.forEach((m) => m.addedNodes.forEach(scan)));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
