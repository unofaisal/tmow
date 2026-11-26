const PATHS = {
  leaf: "M20 4c-9 0-14 4-14 10 0 2 .6 3.6 1.6 4.8C9 14 12 11 16 9c-3 2.5-5.5 5.5-7 9.5 1 .3 2 .5 3 .5 6 0 8-6 8-15z",
  book: "M4 5.5C4 4.7 4.7 4 5.5 4H11c.6 0 1 .2 1 .2s.4-.2 1-.2h5.5c.8 0 1.5.7 1.5 1.5v12c0 .8-.7 1.5-1.5 1.5H13c-.6 0-1 .3-1 .3s-.4-.3-1-.3H5.5C4.7 19 4 18.3 4 17.5v-12z",
  heart: "M12 20s-7-4.4-9.3-9C1.2 7.8 3 5 6 5c2 0 3.3 1 4 2.2h.1C10.8 6 12.1 5 14 5c3 0 4.8 2.8 3.3 6C19 15.6 12 20 12 20z",
  play: "M8 5v14l11-7z",
  facebook: "M14 8.5V7c0-.7.3-1 1-1h2V3h-2.5C12 3 11 4.7 11 6.7V8.5H9V12h2v9h3v-9h2.5l.5-3.5h-3z",
  youtube: "M21 8.2c-.2-1-.9-1.7-1.8-1.9C17.6 6 12 6 12 6s-5.6 0-7.2.3C3.9 6.5 3.2 7.2 3 8.2 2.7 9.8 2.7 12 2.7 12s0 2.2.3 3.8c.2 1 .9 1.7 1.8 1.9C6.4 18 12 18 12 18s5.6 0 7.2-.3c.9-.2 1.6-.9 1.8-1.9.3-1.6.3-3.8.3-3.8s0-2.2-.3-3.8zM10 15V9l5 3z",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.2 6.3a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z",
  linkedin: "M5 9h3v10H5zM6.5 4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM10 9h2.9v1.4c.5-.9 1.6-1.6 3.1-1.6 3 0 3.5 2 3.5 4.5V19h-3v-5c0-1.2 0-2.6-1.6-2.6S13 12.7 13 14v5h-3z",
};

// Stroke-style icons
const STROKES = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  check: "M5 12.5l4.5 4.5L19 7.5",
  chevron: "M6 9l6 6 6-6",
  filter: "M4 6h16M7 12h10M10 18h4",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16-4-4",
  external: "M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
};

export default function Icon({ name, size = 20, className = "" }) {
  const stroke = name in STROKES;
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth={stroke ? 2 : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={stroke ? STROKES[name] : PATHS[name]} />
    </svg>
  );
}
