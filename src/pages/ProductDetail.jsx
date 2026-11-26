import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Callout from "../components/Callout.jsx";
import Icon from "../components/Icon.jsx";
import ProductCard, { FavoriteButton } from "../components/ProductCard.jsx";
import NotFound from "./NotFound.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { HEALTH_DISCLAIMER, PRODUCTS, SHOP_FILTERS } from "../data.js";

const TO_CONFIRM = [
  "Ingredients or materials",
  "Package contents and size",
  "Current price and stock status",
  "Shipping and returns terms",
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  usePageMeta(product ? product.name : "Product not found", product?.summary);

  if (!product) return <NotFound />;

  const category = SHOP_FILTERS.find((f) => f.key === product.category);
  const related = PRODUCTS.filter((p) => p.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Shop", to: "/shop" },
          { label: category?.label ?? "Products", to: `/shop/category/${product.category}` },
          { label: product.name },
        ]}
      />

      <section className="detail-hero">
        <div className={`detail-visual ${product.fit === "contain" ? "is-contain" : ""}`}>
          <img src={product.img} alt={product.alt} />
        </div>
        <div>
          <span className="kicker">{product.tag}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">{product.priceLabel}</p>
          <p>{product.summary}</p>
          <div className="detail-status">
            Online purchasing is not enabled yet. Product details are being verified with the ministry.
          </div>
          <div className="actions-row">
            <Link className="btn btn--primary" to="/coaching">Ask about this product <Icon name="arrow" size={16} /></Link>
            <FavoriteButton product={product} className="save-pill" />
          </div>
        </div>
      </section>

      <section className="section section--narrow">
        <h2>Product information</h2>
        <div className="faq">
          <details open>
            <summary>What the original listing says</summary>
            <p>{product.summary}</p>
          </details>
          <details>
            <summary>Details to be confirmed before launch</summary>
            <ul>{TO_CONFIRM.map((t) => <li key={t}>{t}</li>)}</ul>
          </details>
          <details>
            <summary>Health information</summary>
            <p>{HEALTH_DISCLAIMER}</p>
          </details>
        </div>
        <Callout title="No guarantees">
          Health-related statements describe the ministry’s message and are not presented as proven treatments.
        </Callout>
      </section>

      <section className="section">
        <h2>You may also like</h2>
        <div className="pgrid">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
