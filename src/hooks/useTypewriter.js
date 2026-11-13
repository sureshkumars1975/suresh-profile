import { useEffect, useState } from "react";

const reducedMotion =
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function useTypewriter(words, { type = 100, erase = 50, hold = 2000 } = {}) {
  if (reducedMotion) return words.join(" · ");
  // eslint-disable-next-line react-hooks/rules-of-hooks -- reducedMotion is constant for the page's lifetime
  return useTyping(words, type, erase, hold);
}

function useTyping(words, type, erase, hold) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? erase : type;
    if (!deleting && text === word) delay = hold;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, type, erase, hold]);

  return text;
}
