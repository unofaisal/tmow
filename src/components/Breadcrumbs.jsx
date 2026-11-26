import { Link } from "react-router-dom";

// items: [{ label, to? }]. The last item is the current page.
export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={it.label} className="breadcrumbs__item">
            {last ? <span aria-current="page">{it.label}</span> : <Link to={it.to}>{it.label}</Link>}
            {!last && <span aria-hidden="true">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
