import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import { IMAGES, NAV } from "../data.js";

// Hover-to-open only applies to real desktop pointers; touch and small screens use the toggle button.
const canHover = () => window.matchMedia("(min-width: 851px) and (hover: hover)").matches;

const linkClass = ({ isActive }) => (isActive ? "is-active" : undefined);

function MegaItem({ item, open, onOpen, onScheduleClose, onToggle }) {
  const panelId = `mega-${item.label.toLowerCase()}`;
  const m = item.mega;
  return (
    <li
      className={`nav-item ${open ? "is-open" : ""}`}
      onMouseEnter={() => canHover() && onOpen()}
      onMouseLeave={() => canHover() && onScheduleClose()}
    >
      <div className="nav-item__top">
        <NavLink to={item.to} className={linkClass}>
          {item.label}
        </NavLink>
        <button
          type="button"
          className="mega-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Close" : "Open"} ${item.label} menu`}
          onClick={onToggle}
        >
          <Icon name="chevron" size={16} />
        </button>
      </div>
      <div className="mega-wrap" id={panelId}>
        <div className="mega">
          <div className="mega__intro">
            <span className="kicker">{m.kicker}</span>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
            <Link className="mega__cta" to={item.to}>
              {m.cta} <Icon name="arrow" size={14} />
            </Link>
          </div>
          <ul className="mega__links">
            {m.links.map((l) => (
              <li key={l.title}>
                <NavLink to={l.to} end className={linkClass}>
                  <strong>{l.title}</strong>
                  <small>{l.text}</small>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState(null);
  const ref = useRef(null);
  const timer = useRef(null);
  const { pathname } = useLocation();

  const cancelClose = () => clearTimeout(timer.current);
  const open = (key) => {
    cancelClose();
    setOpenKey(key);
  };
  // A short delay lets the pointer cross the gap between the link and the panel.
  const scheduleClose = () => {
    cancelClose();
    timer.current = setTimeout(() => setOpenKey(null), 160);
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenKey(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setMobileOpen(false);
      }
    };
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenKey(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <header className="site-header" ref={ref}>
      <div className="site-header__bar">
        <Link className="brand" to="/" aria-label="The Minister of Wellness, home">
          <img src={IMAGES.logo} alt="The Minister of Wellness" width="235" height="58" />
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={24} />
        </button>

        <nav id="primary-nav" className={`site-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <ul>
            {NAV.map((item) =>
              item.mega ? (
                <MegaItem
                  key={item.label}
                  item={item}
                  open={openKey === item.label}
                  onOpen={() => open(item.label)}
                  onScheduleClose={scheduleClose}
                  onToggle={() => setOpenKey((k) => (k === item.label ? null : item.label))}
                />
              ) : (
                <li key={item.label} className="nav-item">
                  <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
            <li className="nav-item">
              <Link className="nav-give" to="/give">
                <Icon name="heart" size={14} /> Give
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
