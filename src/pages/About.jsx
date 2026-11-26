import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import NextSteps from "../components/NextSteps.jsx";
import Callout from "../components/Callout.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { IMAGES } from "../data.js";

const FOCUS = [
  { n: "01", title: "Veganism", text: "A plant-focused approach to food, presented by the ministry as part of its spiritual message." },
  { n: "02", title: "Environmentalism", text: "Care for the natural world, connected by the ministry to faith and personal responsibility." },
  { n: "03", title: "Humanitarism", text: "Compassion in action: outreach that brings hope and health to communities in need." },
];

export default function About() {
  usePageMeta("Our Story", "The story and mission of The Minister of Wellness: faith, food and humanitarian service led by Nathaniel Jordan.");
  return (
    <>
      <PageHero
        kicker="Our story"
        title="Food is spiritual. Health is salvational."
        image={IMAGES.portrait}
        alt="Nathaniel Jordan, The Minister of Wellness"
        actions={
          <>
            <Link className="btn btn--gold" to="/teachings">Explore the teachings</Link>
            <Link className="btn btn--ghost" to="/give">Support the mission</Link>
          </>
        }
      >
        The Minister of Wellness is a faith-informed ministry of food education, coaching and humanitarian service, led by Nathaniel Jordan.
      </PageHero>

      <section className="section">
        <span className="kicker">What we stand for</span>
        <h2>Three commitments, one message.</h2>
        <p className="lede">
          The ministry’s message brings together food, faith and service: veganism, environmentalism and humanitarism.
        </p>
        <ul className="cards-3">
          {FOCUS.map((f) => (
            <li key={f.n} className="card-numbered">
              <span>{f.n}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
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
            On the health-coaching page of the original ministry website, Nathaniel Jordan describes drawing on his own experience with weight and food habits, including a personal starting point in 2010. He presents that experience as part of the perspective he brings to coaching and ministry education.
          </p>
          <p>
            He has also shared his story in interviews, including the Exam Room Podcast episode “From Satanic American Diet to Minister of Wellness.”
          </p>
          <div className="actions-row">
            <Link className="btn btn--primary" to="/teachings">Hear it in his words</Link>
            <Link className="text-link" to="/coaching">Explore coaching →</Link>
          </div>
        </div>
      </section>

      <section className="split">
        <div>
          <span className="kicker">Humanitarian outreach</span>
          <h2>Wellness that reaches beyond the self.</h2>
          <p>
            The ministry’s outreach work aims to bring hope, health and compassion to communities in need. Your support helps sustain that work.
          </p>
          <Link className="btn btn--primary" to="/give">Support the mission</Link>
        </div>
        <div className="split__image"><img src={IMAGES.children} alt="Children at a ministry outreach event" loading="lazy" /></div>
      </section>

      <section className="section section--narrow">
        <Callout title="Story content under review">
          This page is built from the original ministry website. Biographical details, credentials and outreach figures will be confirmed with the ministry before launch.
        </Callout>
      </section>

      <NextSteps
        title="Continue your journey."
        items={[
          { title: "Explore wellness", text: "Understand the ministry's approach", to: "/wellness" },
          { title: "Learn", text: "Videos, interviews and podcasts", to: "/teachings" },
          { title: "Personal coaching", text: "Explore individual guidance", to: "/coaching" },
        ]}
      />
    </>
  );
}
