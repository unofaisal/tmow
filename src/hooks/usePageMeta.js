import { useEffect } from "react";

const BASE = "The Minister of Wellness";

// Gives every route its own tab title and meta description (the HTML shell only has one).
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Faith, Food & Whole-Person Wellness`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}
