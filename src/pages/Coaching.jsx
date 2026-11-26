import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import NextSteps from "../components/NextSteps.jsx";
import Callout from "../components/Callout.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { COACHING_FORMATS as FORMATS, HEALTH_DISCLAIMER, IMAGES, SITE } from "../data.js";

const COVERS = [
  "Your personal health and wellness goals",
  "Learning resources chosen for where you are now",
  "Practical food guidance for everyday life",
];

const FAQ = [
  { q: "How long are sessions?", a: "Earlier ministry listings referred to 30-minute and one-hour consultations. Current options will be confirmed before booking opens." },
  { q: "What does it cost?", a: "Rates are being confirmed with the ministry and are not published yet." },
  { q: "Is coaching medical advice?", a: HEALTH_DISCLAIMER },
  { q: "How do I book?", a: "Online booking is not active yet. Send an enquiry below and we will reply with the next steps." },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function EnquiryForm() {
  const [values, setValues] = useState({ name: "", email: "", format: "video", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function onSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) return;
    // TODO: send to your backend / form service.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <Icon name="check" size={22} />
        <h3>{SITE.preview ? "Preview only — nothing was sent." : "Thank you — enquiry received."}</h3>
        <p>
          {SITE.preview
            ? "This form is not connected yet, so no message left your browser."
            : "We will reply to your email with the next steps."}
        </p>
        <button type="button" className="btn btn--outline btn--sm" onClick={() => { setSent(false); setValues({ name: "", email: "", format: "video", message: "" }); }}>
          Start over
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="c-name">Your name</label>
        <input id="c-name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby="c-name-err" />
        <p id="c-name-err" className="field__error">{errors.name}</p>
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby="c-email-err" />
        <p id="c-email-err" className="field__error">{errors.email}</p>
      </div>
      <div className="field">
        <label htmlFor="c-format">Preferred format</label>
        <select id="c-format" value={values.format} onChange={set("format")}>
          <option value="phone">Phone</option>
          <option value="video">Video</option>
          <option value="zoom">Zoom</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-message">What would you like support with? <span className="muted">(optional)</span></label>
        <textarea id="c-message" rows="4" value={values.message} onChange={set("message")} />
      </div>
      <button type="submit" className="btn btn--primary">Send enquiry <Icon name="arrow" size={16} /></button>
    </form>
  );
}

export default function Coaching() {
  usePageMeta("Coaching", "Individual health-and-wellness coaching with The Minister of Wellness, by phone, video or Zoom.");
  return (
    <>
      <PageHero
        kicker="Personal wellness support"
        title="Coaching with purpose."
        image={IMAGES.minister}
        alt="Nathaniel Jordan holding fruit"
        actions={
          <>
            <a className="btn btn--gold" href="#enquire">Send an enquiry</a>
            <Link className="btn btn--ghost" to="/about">Meet the ministry</Link>
          </>
        }
      >
        Individual health-and-wellness consultations by phone, video or Zoom: guidance for your next step, grounded in faith and practical food education.
      </PageHero>

      <section className="section">
        <span className="kicker">Ways to meet</span>
        <h2>Choose the format that suits you.</h2>
        <ul className="cards-3">
          {FORMATS.map((f, i) => (
            <li key={f.title} className="card-numbered">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="split split--tint">
        <div>
          <span className="kicker">What we talk about</span>
          <h2>Guidance for your next step.</h2>
          <ul className="checklist">
            {COVERS.map((c) => (
              <li key={c}><Icon name="check" size={18} /> {c}</li>
            ))}
          </ul>
          <Callout title="Important">
            Rates, availability, credentials and booking terms will be confirmed with the ministry before launch. {HEALTH_DISCLAIMER}
          </Callout>
        </div>
        <div className="split__image"><img src={IMAGES.media} alt="Minister of Wellness teaching" loading="lazy" /></div>
      </section>

      <section className="section section--two" id="enquire">
        <div>
          <span className="kicker">Get in touch</span>
          <h2>Send an enquiry.</h2>
          <p className="lede">Tell us a little about what you’re hoping for and we’ll reply with next steps.</p>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <EnquiryForm />
      </section>

      <NextSteps
        title="Prefer to learn first?"
        items={[
          { title: "Explore wellness", text: "Understand the ministry's approach", to: "/wellness" },
          { title: "Teachings", text: "Videos, interviews and podcasts", to: "/teachings" },
          { title: "Shop resources", text: "Browse ministry product categories", to: "/shop" },
        ]}
      />
    </>
  );
}
