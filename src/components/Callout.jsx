// Small highlighted note: used for disclaimers and "to be confirmed" notices.
export default function Callout({ title, children, tone = "gold" }) {
  return (
    <aside className={`callout callout--${tone}`}>
      {title && <strong>{title}</strong>}
      <p>{children}</p>
    </aside>
  );
}
