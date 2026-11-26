import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Newsletter from "./Newsletter.jsx";
import PreviewBanner from "./PreviewBanner.jsx";
import { SITE } from "../data.js";

export default function Layout() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  // New page: scroll to top and move focus to <main> so keyboard/screen-reader users start at the content.
  useEffect(() => {
    if (hash) {
      // The target lives in a lazily loaded page, so retry for a moment until it exists.
      let tries = 0;
      let raf;
      const go = () => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView();
        else if (tries++ < 40) raf = requestAnimationFrame(go);
      };
      go();
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0 });
    if (first.current) {
      first.current = false;
      return;
    }
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topline">
        <span>Faith • Wellness • Service</span>
        <span className="topline__tag">Living well. Serving with purpose.</span>
      </div>
      <Header />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<div className="page-loading" role="status">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Newsletter />
      <Footer />
      {SITE.preview && <PreviewBanner />}
    </>
  );
}
