import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import NextSteps from "../components/NextSteps.jsx";
import Callout from "../components/Callout.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { GIVING_METHODS, IMAGES, SITE } from "../data.js";

const STEWARDSHIP = [
  "Legal recipient name and organisational status",
  "Donation purpose and use of funds",
  "Whether contributions are tax-deductible, and where",
  "Recurring donation terms, refunds and cancellations",
  "Privacy practices and the donor receipt process",
];

export default function Give() {
  usePageMeta("Give", "Support the mission of The Minister of Wellness: faith-informed wellness education, community service and outreach.");
  return (
    <>
      <PageHero
        kicker="Support the mission"
        title="Help make wellness education and service possible."
        image={IMAGES.children}
        alt="Children at a ministry outreach event"
        actions={
          <>
            <a className="btn btn--gold" href="#ways-to-give">Explore giving methods</a>
            <Link className="btn btn--ghost" to="/about">Learn about the mission</Link>
          </>
        }
      >
        Your support helps sustain the ministry’s work in faith-informed wellness education, community service and sharing practical resources. Every contribution is an expression of partnership in that mission.
      </PageHero>

      <section className="section" id="ways-to-give">
        <span className="kicker">Giving options</span>
        <h2>Ways to support</h2>
        <p className="lede">
          {SITE.preview
            ? "The original website referenced the following ways to give. They are shown here for continuity only; none is connected or available for payment in this preview."
            : "The following ways to give are available."}
        </p>
        <ul className="card-grid card-grid--give">
          {GIVING_METHODS.map((m) => (
            <li key={m.title}>
              <article className="giving-card">
                <span className="tag">{m.type}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                {SITE.preview && <span className="giving-card__status">Not active in preview</span>}
              </article>
            </li>
          ))}
        </ul>
        {SITE.preview && (
          <Callout title="Preview only — no donations can be submitted here.">
            Payment links, account identifiers, mailing addresses, recurring-gift settings, receipts and confirmation emails will be added only after ownership, security, tax and operational details are verified and approved.
          </Callout>
        )}
      </section>

      <section className="split split--tint">
        <div>
          <span className="kicker">Transparency &amp; stewardship</span>
          <h2>Clear information before every contribution.</h2>
          <p>Before this page accepts donations, the ministry should confirm:</p>
          <ul className="checklist">
            {STEWARDSHIP.map((s) => <li key={s}><Icon name="check" size={18} /> {s}</li>)}
          </ul>
          <p className="muted">No tax-deductibility representation is made here.</p>
        </div>
        <div className="split__image"><img src={IMAGES.outreach} alt="The Minister of Wellness serving the community" loading="lazy" /></div>
      </section>

      <NextSteps
        title="More ways to take part."
        items={[
          { title: "Learn", text: "Explore teachings", to: "/teachings" },
          { title: "Coaching", text: "Explore personal guidance", to: "/coaching" },
          { title: "Our story", text: "Learn about the mission", to: "/about" },
        ]}
      />
    </>
  );
}
