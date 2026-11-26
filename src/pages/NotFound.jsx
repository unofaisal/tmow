import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";

export default function NotFound() {
  usePageMeta("Page not found");
  return (
    <section className="section section--narrow center-block">
      <span className="kicker">404</span>
      <h1 className="page-title">We couldn’t find that page.</h1>
      <p className="lede">The link may be out of date or the page may have moved. Here are some good places to start.</p>
      <div className="actions-row actions-row--center">
        <Link className="btn btn--primary" to="/">Back to home</Link>
        <Link className="btn btn--outline" to="/shop">Visit the shop</Link>
        <Link className="btn btn--outline" to="/teachings">Explore teachings</Link>
      </div>
    </section>
  );
}
