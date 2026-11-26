import { useState } from "react";
import Icon from "./Icon.jsx";

// Dismissible so it never covers the footer. Delete this component when going live.
export default function PreviewBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="preview-banner" role="note">
      <span>Design preview • Sample content • No live payments</span>
      <button type="button" aria-label="Dismiss preview notice" onClick={() => setHidden(true)}>
        <Icon name="close" size={14} />
      </button>
    </div>
  );
}
