import { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import NextSteps from "../components/NextSteps.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Icon from "../components/Icon.jsx";
import NotFound from "./NotFound.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { useFavorites } from "../hooks/useFavorites.jsx";
import { PRODUCTS, SHOP_FILTERS } from "../data.js";

const COUNTS = PRODUCTS.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), { all: PRODUCTS.length });

/* Shop state lives in the URL, so every view can be bookmarked and shared:
     /shop                        all products
     /shop/category/packages      one category (path)
     ?q=herbal&sort=az&saved=1    search, sort and "saved only" (query string) */
export default function Shop() {
  const { category = "all" } = useParams();
  const cat = SHOP_FILTERS.find((f) => f.key === category);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const { ids } = useFavorites();
  const [open, setOpen] = useState(false);

  const q = params.get("q") || "";
  const sort = params.get("sort") || "featured";
  const saved = params.get("saved") === "1";
  const search = params.toString() ? `?${params.toString()}` : "";

  usePageMeta(cat ? (cat.key === "all" ? "Shop" : cat.label) : "Page not found", cat?.blurb);

  // Mobile filter drawer: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    let out = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (saved && !ids.includes(p.slug)) return false;
      return !term || `${p.name} ${p.tag} ${p.summary}`.toLowerCase().includes(term);
    });
    if (sort === "az") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") out = [...out].sort((a, b) => b.name.localeCompare(a.name));
    return out;
  }, [category, q, sort, saved, ids]);

  if (!cat) return <NotFound />;

  const update = (patch) => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => (v === "" || v === false || v == null ? next.delete(k) : next.set(k, v === true ? "1" : v)));
    setParams(next, { replace: true });
  };
  const clearAll = () => navigate("/shop", { replace: true });

  const chips = [];
  if (cat.key !== "all") chips.push({ label: cat.label, remove: () => navigate({ pathname: "/shop", search }) });
  if (q.trim()) chips.push({ label: `“${q.trim()}”`, remove: () => update({ q: "" }) });
  if (saved) chips.push({ label: "Saved only", remove: () => update({ saved: false }) });

  const isAll = cat.key === "all";

  return (
    <>
      <section className="shop-banner">
        <div className="shop-banner__inner">
          <Breadcrumbs items={isAll ? [{ label: "Shop" }] : [{ label: "Shop", to: "/shop" }, { label: cat.label }]} />
          <h1>{isAll ? "Explore products and resources with purpose." : cat.label}</h1>
          <p>
            {cat.blurb} {isAll && "Prices, stock, ingredients and shipping terms will be confirmed before any purchase journey is enabled."}
          </p>
        </div>
      </section>

      <section className="shop-body" id="catalogue">
        <div className="shop-layout">
          {open && <button type="button" className="filters-backdrop" aria-label="Close filters" onClick={() => setOpen(false)} />}

          <aside className={`filters ${open ? "is-open" : ""}`} aria-label="Product filters">
            <div className="filters__head">
              <h2>Filters</h2>
              <button type="button" className="filters__close" aria-label="Close filters" onClick={() => setOpen(false)}>
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="filters__block">
              <h3>Category</h3>
              <ul className="cat-list">
                {SHOP_FILTERS.map((f) => (
                  <li key={f.key}>
                    <NavLink
                      to={{ pathname: f.key === "all" ? "/shop" : `/shop/category/${f.key}`, search }}
                      end
                      className="cat-list__link"
                      onClick={() => setOpen(false)}
                    >
                      <span>{f.label}</span>
                      <em>{COUNTS[f.key] ?? 0}</em>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filters__block">
              <h3>Your list</h3>
              <button type="button" className={`saved-toggle ${saved ? "is-on" : ""}`} aria-pressed={saved} onClick={() => update({ saved: !saved })}>
                <Icon name="heart" size={16} />
                <span>Saved items</span>
                <em>{ids.length}</em>
              </button>
            </div>

            <div className="filters__foot">
              <button type="button" className="btn btn--outline btn--sm" onClick={clearAll}>Clear all</button>
              <button type="button" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
                Show {list.length} {list.length === 1 ? "result" : "results"}
              </button>
            </div>
          </aside>

          <div className="shop-results">
            <div className="results-bar">
              <p className="results-bar__count" aria-live="polite">
                <strong>{list.length}</strong> {list.length === 1 ? "product" : "products"}
                {!isAll && <> in {cat.label}</>}
              </p>
              <div className="results-search input-icon">
                <Icon name="search" size={18} />
                <label htmlFor="shop-search" className="sr-only">Search products</label>
                <input id="shop-search" type="search" placeholder="Search products…" value={q} onChange={(e) => update({ q: e.target.value })} />
              </div>
              <div className="results-bar__actions">
                <button type="button" className="filter-btn" aria-expanded={open} aria-controls="catalogue" onClick={() => setOpen(true)}>
                  <Icon name="filter" size={16} /> Filters
                  {chips.length > 0 && <span className="filter-btn__badge">{chips.length}</span>}
                </button>
                <div className="sort">
                  <label htmlFor="shop-sort">Sort</label>
                  <select id="shop-sort" value={sort} onChange={(e) => update({ sort: e.target.value === "featured" ? "" : e.target.value })}>
                    <option value="featured">Featured</option>
                    <option value="az">Name: A–Z</option>
                    <option value="za">Name: Z–A</option>
                  </select>
                </div>
              </div>
            </div>

            {chips.length > 0 && (
              <div className="active-chips" aria-label="Active filters">
                {chips.map((c) => (
                  <button key={c.label} type="button" className="active-chip" onClick={c.remove} aria-label={`Remove filter ${c.label}`}>
                    {c.label} <Icon name="close" size={12} />
                  </button>
                ))}
                <button type="button" className="active-chips__clear" onClick={clearAll}>Clear all</button>
              </div>
            )}

            {list.length ? (
              <div className="pgrid">
                {list.map((p) => <ProductCard key={p.slug} product={p} />)}
              </div>
            ) : (
              <div className="empty">
                <h3>{saved && !ids.length ? "No saved items yet" : "No products match"}</h3>
                <p>
                  {saved && !ids.length
                    ? "Tap the heart on any product to save it here. Your list is stored on this device only."
                    : "Try a different search or remove a filter."}
                </p>
                <button type="button" className="btn btn--outline btn--sm" onClick={clearAll}>Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="assurance">
        <div>
          <span className="kicker">A responsible shopping experience</span>
          <h2>Clear information before a purchase.</h2>
          <p>
            Before the shop goes live, every product needs an accurate name, photograph, ingredients or materials, package contents, size, current price, stock status, shipping terms and appropriate disclaimers. Health-related product claims will be reviewed and not presented as proven treatments.
          </p>
        </div>
        <ul className="assurance__points">
          {["Verified product information", "Transparent pricing and availability", "Clear shipping and returns information", "Appropriate health and safety disclaimers"].map((t) => (
            <li key={t}><Icon name="check" size={16} /> {t}</li>
          ))}
        </ul>
      </section>

      <NextSteps
        title="Not sure where to begin?"
        items={[
          { title: "Start with wellness", text: "Explore the ministry's approach", to: "/wellness" },
          { title: "Learn first", text: "Explore videos and interviews", to: "/teachings" },
          { title: "Ask about coaching", text: "Explore personal guidance", to: "/coaching" },
        ]}
      />
    </>
  );
}
