// Consistent heading block for every section: kicker, title, optional intro and a right-hand action.
export default function SectionHeader({ kicker, title, id, children, action, center = false, light = false }) {
  return (
    <header className={`sec-head ${center ? "sec-head--center" : ""} ${light ? "sec-head--light" : ""}`.trim()}>
      <div>
        {kicker && <span className="kicker">{kicker}</span>}
        <h2 id={id}>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {action}
    </header>
  );
}
