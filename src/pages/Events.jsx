import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { SOCIALS } from "../data.js";

const WAYS = [
  { title: "Get updates by email", text: "Join the list and hear about seminars and ministry news first.", cta: "Subscribe below", href: "#connect-title", internal: false },
  { title: "Watch in the meantime", text: "Explore the video series, interviews and podcasts.", cta: "Explore teachings", to: "/teachings" },
  { title: "Book a conversation", text: "Individual coaching by phone, video or Zoom.", cta: "Explore coaching", to: "/coaching" },
];

export default function Events() {
  usePageMeta("Events & Updates", "Seminars, community learning and ministry updates from The Minister of Wellness.");
  const youtube = SOCIALS.find((s) => s.icon === "youtube");
  return (
    <>
      <Breadcrumbs items={[{ label: "Teachings", to: "/teachings" }, { label: "Events & Updates" }]} />
      <section className="section section--narrow center-block">
        <span className="kicker">Events &amp; updates</span>
        <h1 className="page-title">Seminars, learning and ministry news.</h1>
        <p className="lede">
          No events are scheduled here yet. When dates are confirmed they will appear on this page, with details and sign-up information.
        </p>
      </section>

      <section className="section section--tight">
        <ul className="ways">
          {WAYS.map((w) => (
            <li key={w.title}>
              {w.to ? (
                <Link to={w.to} className="way">
                  <b>{w.title}</b>
                  <span>{w.text}</span>
                  <em>{w.cta} <Icon name="arrow" size={14} /></em>
                </Link>
              ) : (
                <a href={w.href} className="way">
                  <b>{w.title}</b>
                  <span>{w.text}</span>
                  <em>{w.cta} <Icon name="arrow" size={14} /></em>
                </a>
              )}
            </li>
          ))}
          {youtube && (
            <li>
              <a href={youtube.href} className="way" target="_blank" rel="noopener noreferrer">
                <b>Follow on YouTube</b>
                <span>New teachings and announcements are shared on the ministry's channel.</span>
                <em>Open YouTube <Icon name="external" size={13} /></em>
              </a>
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
