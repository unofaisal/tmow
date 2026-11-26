import { Link, NavLink, useParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import NextSteps from "../components/NextSteps.jsx";
import Callout from "../components/Callout.jsx";
import Icon from "../components/Icon.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TeachingCard from "../components/TeachingCard.jsx";
import NotFound from "./NotFound.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { TEACHINGS, TEACHING_GROUPS } from "../data.js";

const SERIES_URL = TEACHINGS[0].href;
const countFor = (g) => (g.types ? TEACHINGS.filter((t) => g.types.includes(t.type)).length : TEACHINGS.length);

// One component, four routes: /teachings, /teachings/video-series, /teachings/interviews-podcasts, /teachings/messages
export default function Teachings() {
  const { group = "all" } = useParams();
  const g = TEACHING_GROUPS.find((x) => x.slug === group);
  usePageMeta(g ? (g.slug === "all" ? "Teachings" : g.label) : "Page not found", g?.intro);
  if (!g) return <NotFound />;

  const shown = g.types ? TEACHINGS.filter((t) => g.types.includes(t.type)) : TEACHINGS;

  return (
    <>
      <PageHero
        kicker={g.kicker}
        title={g.title}
        image={g.img}
        actions={
          <>
            <a className="btn btn--gold" href={SERIES_URL} target="_blank" rel="noopener noreferrer">
              Watch the video series <Icon name="external" size={15} />
            </a>
            <Link className="btn btn--ghost" to="/wellness">Explore wellness</Link>
          </>
        }
      >
        {g.intro}
      </PageHero>

      <section className="section">
        <SectionHeader kicker="Featured from the ministry" title="Explore the message library.">
          Titles are drawn from the original ministry website and its linked media. Links open the original publisher or programme; this site does not host or claim ownership of third-party media.
        </SectionHeader>

        <nav className="tabs" aria-label="Teaching formats">
          {TEACHING_GROUPS.map((x) => (
            <NavLink key={x.slug} to={x.slug === "all" ? "/teachings" : `/teachings/${x.slug}`} end className="tab">
              {x.label} <em>{countFor(x)}</em>
            </NavLink>
          ))}
        </nav>

        <ul className="tgrid">
          {shown.map((t) => (
            <li key={t.id}><TeachingCard t={t} /></li>
          ))}
        </ul>

        <Callout title="A note on health claims">
          Teaching titles are shown as published by the ministry. They express the ministry’s message and are not guarantees of health outcomes. Speak with a qualified health professional about your own situation.
        </Callout>
      </section>

      <NextSteps
        title="Put learning into practice."
        items={[
          { title: "Explore wellness", text: "Understand the ministry's approach", to: "/wellness" },
          { title: "Personal coaching", text: "Explore individual guidance", to: "/coaching" },
          { title: "Shop resources", text: "Browse books and resources", to: "/shop/category/books" },
        ]}
      />
    </>
  );
}
