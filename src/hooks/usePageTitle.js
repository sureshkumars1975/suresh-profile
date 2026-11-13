import { useEffect } from "react";
import { profile } from "../data/profile";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${profile.name}` : `${profile.name} - Professor & Researcher`;
  }, [title]);
}
