import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { useFavorites } from "../hooks/useFavorites.jsx";

export function FavoriteButton({ product, className = "pcard__save" }) {
  const { has, toggle } = useFavorites();
  const saved = has(product.slug);
  return (
    <button
      type="button"
      className={`${className} ${saved ? "is-saved" : ""}`}
      aria-pressed={saved}
      aria-label={`${saved ? "Remove" : "Save"} ${product.name} ${saved ? "from" : "to"} favourites`}
      onClick={() => toggle(product.slug)}
    >
      <Icon name="heart" size={18} />
    </button>
  );
}

// The product name is a link stretched over the whole card (see .pcard__link), so the card is one big tap
// target while the heart button stays independently clickable.
export default function ProductCard({ product: p }) {
  const [broken, setBroken] = useState(false);
  const to = `/shop/${p.slug}`;
  return (
    <article className="pcard">
      <div className={`pcard__media ${p.fit === "contain" ? "is-contain" : ""}`}>
        {broken ? (
          <span className="pcard__fallback"><Icon name="leaf" size={40} /></span>
        ) : (
          <img src={p.img} alt="" loading="lazy" onError={() => setBroken(true)} />
        )}
        <span className="pcard__tag">{p.tag}</span>
        <FavoriteButton product={p} />
      </div>
      <div className="pcard__body">
        <h3>
          <Link className="pcard__link" to={to}>{p.name}</Link>
        </h3>
        <p className="pcard__price">{p.priceLabel}</p>
        <p className="pcard__summary">{p.summary}</p>
        <span className="pcard__cta">
          View details <Icon name="arrow" size={15} />
        </span>
      </div>
    </article>
  );
}
