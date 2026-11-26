import Icon from "./Icon.jsx";

const VIDEO_TYPES = new Set(["Video series", "Educational video", "Interview"]);

// The whole card is one link (stretched via CSS) that opens the original publisher in a new tab.
export default function TeachingCard({ t, size = "default" }) {
  return (
    <article className={`tcard tcard--${size}`}>
      <div className="tcard__media">
        <img src={t.img} alt="" loading="lazy" />
        <span className="tcard__type">{t.type}</span>
        {VIDEO_TYPES.has(t.type) && (
          <span className="tcard__play" aria-hidden="true">
            <Icon name="play" size={20} />
          </span>
        )}
      </div>
      <div className="tcard__body">
        <h3>
          <a className="tcard__link" href={t.href} target="_blank" rel="noopener noreferrer">
            {t.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </h3>
        <p>{t.text}</p>
        <span className="tcard__cta">
          {t.cta} <Icon name="external" size={13} />
        </span>
      </div>
    </article>
  );
}
