import { Link } from "react-router-dom";
import { FOOTER, HEALTH_DISCLAIMER, IMAGES } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={IMAGES.logo} alt="The Minister of Wellness" width="170" height="65" loading="lazy" />
        <p>Faith-informed wellness education, coaching and service.</p>
        <Link className="footer__give" to="/give">Support the mission →</Link>
      </div>
      {FOOTER.map((col) => (
        <nav key={col.heading} aria-label={col.heading}>
          <b>{col.heading}</b>
          {col.links.map(([label, to]) =>
            to.startsWith("/") ? (
              <Link key={label} to={to}>{label}</Link>
            ) : (
              <a key={label} href={to}>{label}</a>
            )
          )}
        </nav>
      ))}
      <p className="footer__legal">
        © {new Date().getFullYear()} The Minister of Wellness Ministries. {HEALTH_DISCLAIMER}
      </p>
    </footer>
  );
}
