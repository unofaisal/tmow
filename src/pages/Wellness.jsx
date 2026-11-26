import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import NextSteps from "../components/NextSteps.jsx";
import Callout from "../components/Callout.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import SectionHeader from "../components/SectionHeader.jsx";
import { HEALTH_DISCLAIMER, IMAGES, WELLNESS_TOPICS } from "../data.js";

const PILLARS = [
  { n: "01", title: "Food & nourishment", text: "Explore the ministry's plant-focused food philosophy and its emphasis on intentional everyday choices.", cta: "Learn through teachings", to: "/teachings" },
  { n: "02", title: "Faith & purpose", text: "Discover how the ministry connects spiritual reflection, compassion and personal responsibility.", cta: "Explore faith and food", to: "/teachings" },
  { n: "03", title: "Education & support", text: "Use learning resources and coaching conversations to reflect on goals and build sustainable habits.", cta: "Explore coaching", to: "/coaching" },
];

export default function Wellness() {
  usePageMeta("Wellness", "Explore the Minister of Wellness approach to food, faith, lifestyle education and personal coaching.");
  return (
    <>
      <PageHero
        kicker="Faith · Food · Whole-person wellness"
        title="A healthier life begins with what we learn, choose and practice."
        image={IMAGES.food}
        alt="Food and wellness"
        actions={
          <>
            <Link className="btn btn--gold" to="/teachings">Explore the teachings</Link>
            <Link className="btn btn--ghost" to="/coaching">Explore coaching</Link>
          </>
        }
      >
        Explore the Minister of Wellness approach to food, faith, lifestyle education and personal growth, grounded in the ministry’s message that food is spiritual and health is salvational.
      </PageHero>

      <section className="section">
        <span className="kicker">The ministry’s approach</span>
        <h2>Wellness is a way of life.</h2>
        <p className="lede">
          The ministry describes wellness as continuous attention to health, and shares spiritual healing principles, food education and personal support as part of its approach.
        </p>
        <ul className="cards-3">
          {PILLARS.map((p) => (
            <li key={p.n} className="card-numbered">
              <span>{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link className="text-link" to={p.to}>{p.cta} →</Link>
            </li>
          ))}
        </ul>
        <Callout title="Please note">
          {HEALTH_DISCLAIMER} Personal beliefs and testimony shared here are not medical advice.
        </Callout>
      </section>

      <section className="section section--tight">
        <SectionHeader kicker="Explore by topic" title="Choose where to dive in." />
        <ul className="paths">
          {WELLNESS_TOPICS.map((t) => (
            <li key={t.slug}>
              <Link className="path" to={`/wellness/${t.slug}`}>
                <img src={t.img} alt="" loading="lazy" />
                <span className="path__body">
                  <b>{t.title}</b>
                  <span>{t.tagline}</span>
                  <em>Explore <Icon name="arrow" size={14} /></em>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="split split--tint">
        <div className="split__image"><img src={IMAGES.minister} alt="Nathaniel Jordan holding fruit" loading="lazy" /></div>
        <div>
          <span className="kicker">The minister · Nathaniel Jordan</span>
          <h2>A personal journey, shared through education.</h2>
          <p>
            Nathaniel Jordan describes drawing on his own experience with weight and food habits, including a personal starting point in 2010, as part of the perspective he brings to coaching and ministry education.
          </p>
          <p>Personal testimony, educational content and evidence-based health information are kept clearly distinct.</p>
          <Link className="text-link" to="/about">Read the ministry story →</Link>
        </div>
      </section>

      <section className="split">
        <div>
          <span className="kicker">Personal guidance</span>
          <h2>Take the next step with coaching.</h2>
          <p>
            The ministry offers health-and-wellness consultations by phone, video or Zoom, covering personal goals, learning resources and practical food guidance. Current rates and booking availability will be confirmed before they are published.
          </p>
          <Link className="btn btn--primary" to="/coaching">View coaching information</Link>
        </div>
        <div className="split__image"><img src={IMAGES.media} alt="Minister of Wellness teaching" loading="lazy" /></div>
      </section>

      <NextSteps
        title="Continue your wellness journey."
        items={[
          { title: "Learn", text: "Explore videos, sermons and interviews", to: "/teachings" },
          { title: "Explore the shop", text: "See the product categories", to: "/shop" },
          { title: "Support the mission", text: "Learn about the ministry's outreach", to: "/give" },
        ]}
      />
    </>
  );
}
