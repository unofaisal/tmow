import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import PageHero from "../components/PageHero.jsx";
import NextSteps from "../components/NextSteps.jsx";
import Callout from "../components/Callout.jsx";
import Icon from "../components/Icon.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TeachingCard from "../components/TeachingCard.jsx";
import ProductCard from "../components/ProductCard.jsx";
import NotFound from "./NotFound.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { HEALTH_DISCLAIMER, PRODUCTS, SHOP_FILTERS, TEACHINGS, WELLNESS_TOPICS } from "../data.js";

// /wellness/nutrition, /wellness/journey, /wellness/education: each topic pulls in its own teachings and products.
export default function WellnessTopic() {
  const { topic } = useParams();
  const t = WELLNESS_TOPICS.find((x) => x.slug === topic);
  usePageMeta(t ? t.title : "Page not found", t?.intro);
  if (!t) return <NotFound />;

  const teachings = t.teachings.map((id) => TEACHINGS.find((x) => x.id === id)).filter(Boolean);
  const products = PRODUCTS.filter((p) => t.categories.includes(p.category)).slice(0, 4);
  const categoryLinks = SHOP_FILTERS.filter((f) => t.categories.includes(f.key));
  const others = WELLNESS_TOPICS.filter((x) => x.slug !== t.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Wellness", to: "/wellness" }, { label: t.title }]} />
      <PageHero
        kicker={t.kicker}
        title={t.headline}
        image={t.img}
        alt={t.alt}
        actions={
          <>
            <Link className="btn btn--gold" to="/coaching">Talk about coaching</Link>
            <a className="btn btn--ghost" href="#teachings">See related teachings</a>
          </>
        }
      >
        {t.intro}
      </PageHero>

      <section className="section section--two">
        <div>
          <SectionHeader kicker={t.tagline} title="What this covers" />
          <ul className="checklist">
            {t.points.map((p) => (
              <li key={p}><Icon name="check" size={18} /> {p}</li>
            ))}
          </ul>
        </div>
        <Callout title="Please note">{HEALTH_DISCLAIMER}</Callout>
      </section>

      <section className="section" id="teachings">
        <SectionHeader
          kicker="Go deeper"
          title="From the teachings"
          action={<Link className="text-link" to="/teachings">All teachings →</Link>}
        />
        <ul className="tgrid">
          {teachings.map((x) => (
            <li key={x.id}><TeachingCard t={x} /></li>
          ))}
        </ul>
      </section>

      {products.length > 0 && (
        <section className="section">
          <SectionHeader
            kicker="In the shop"
            title="Related products"
            action={
              <div className="link-row">
                {categoryLinks.map((c) => (
                  <Link key={c.key} className="text-link" to={`/shop/category/${c.key}`}>{c.label} →</Link>
                ))}
              </div>
            }
          />
          <div className="pgrid">
            {products.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}

      <NextSteps
        title="Keep exploring wellness."
        items={[
          ...others.map((o) => ({ title: o.title, text: o.tagline, to: `/wellness/${o.slug}` })),
          { title: "Personal coaching", text: "Explore individual guidance", to: "/coaching" },
        ]}
      />
    </>
  );
}
