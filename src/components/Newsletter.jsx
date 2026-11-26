import { useState } from "react";
import Icon from "./Icon.jsx";
import { SITE, SOCIALS } from "../data.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | loading | success

  async function onSubmit(e) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) return setStatus("error");
    setStatus("loading");
    // TODO: replace with a real call, e.g. await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) })
    await new Promise((r) => setTimeout(r, 500));
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="connect" aria-labelledby="connect-title">
      <div>
        <h2 id="connect-title">Stay Connected</h2>
        <p>Get inspiring health tips, ministry updates and more.</p>
      </div>

      <form onSubmit={onSubmit} noValidate>
        <div className="connect__row">
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            value={email}
            aria-invalid={status === "error"}
            aria-describedby="nl-msg"
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
          />
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </div>
        <p id="nl-msg" className={`connect__msg is-${status}`} role="status" aria-live="polite">
          {status === "error" && "Please enter a valid email address."}
          {status === "success" &&
            (SITE.preview ? (
              "Preview only — no email was collected or sent."
            ) : (
              <>
                <Icon name="check" size={14} /> Thank you — you’re on the list.
              </>
            ))}
        </p>
      </form>

      <div className="follow">
        <b>Follow Us</b>
        <ul>
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                <Icon name={s.icon} size={15} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
