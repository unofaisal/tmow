import { Link } from "react-router-dom";

// "Where to next?" strip at the bottom of inner pages. items: [{ title, text, to }]
export default function NextSteps({ title, items }) {
  return (
    <section className="next" aria-labelledby="next-title">
      <h2 id="next-title">{title}</h2>
      <ul>
        {items.map((it) => (
          <li key={it.title}>
            <Link to={it.to}>
              <b>{it.title}</b>
              <span>{it.text} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
