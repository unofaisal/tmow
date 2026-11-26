// Shared "editorial" hero used by every inner page.
export default function PageHero({ kicker, title, children, actions, image, alt = "" }) {
  return (
    <section className="journey-hero">
      <div className="journey-hero__copy">
        <span className="kicker kicker--light">{kicker}</span>
        <h1>{title}</h1>
        <p>{children}</p>
        {actions && <div className="journey-actions">{actions}</div>}
      </div>
      <div className="journey-hero__image">
        <img src={image} alt={alt} />
      </div>
    </section>
  );
}
