import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ProductCard from "../components/ProductCard.jsx";
import TeachingCard from "../components/TeachingCard.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { COACHING_FORMATS, HOME_PRODUCT_SLUGS, IMAGES, PRODUCTS, START_PATHS, TEACHINGS } from "../data.js";

/* Page order: promise → where to start → learn → who → coaching → shop → give → community. */

function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero__img" src={IMAGES.hero} alt="Nathaniel Jordan, The Minister of Wellness" />
        <div className="hero__copy">
          <p className="eyebrow">Nathaniel Jordan · Health Expert</p>
          <h1 id="hero-title">The Minister of Wellness</h1>
          <p className="hero__lead">
            Food IS Spiritual, Health IS Salvational. Veganism, Environmentalism, Humanitarism.
          </p>
          <figure className="hero__quote">
            <blockquote>
              “Your Creator COMMANDS you to cease from being a CARNIVOROUS man of CONTENTION to a HERBIVOROUS man of PEACE”
            </blockquote>
            <figcaption>— OAHSPE Bible</figcaption>
          </figure>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/about">
              Learn About Our Mission <Icon name="arrow" size={16} />
            </Link>
            <Link className="btn btn--ghost" to="/teachings">Watch a teaching</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StartHere() {
  return (
    <section className="section" aria-labelledby="start-title">
      <SectionHeader id="start-title" center kicker="Body · Mind · Spirit" title="Wellness for the whole person.">
        Eat well, learn deeply and serve others. Choose the path that fits where you are today.
      </SectionHeader>
      <ul className="paths">
        {START_PATHS.map((p) => (
          <li key={p.title}>
            <Link className="path" to={p.to}>
              <img src={p.img} alt="" loading="lazy" />
              <span className="path__body">
                <b>{p.title}</b>
                <span>{p.text}</span>
                <em>{p.cta} <Icon name="arrow" size={14} /></em>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FeaturedTeachings() {
  const [lead] = TEACHINGS;
  const side = ["meat", "jesus-way", "exam-room"].map((id) => TEACHINGS.find((t) => t.id === id)).filter(Boolean);
  return (
    <section className="section section--tight" aria-labelledby="teach-title">
      <SectionHeader
        id="teach-title"
        kicker="Learn"
        title="Featured teachings"
        action={<Link className="text-link" to="/teachings">View all teachings →</Link>}
      />
      <div className="featured-teaching">
        <TeachingCard t={lead} size="feature" />
        <ul className="tlist">
          {side.map((t) => (
            <li key={t.id}><TeachingCard t={t} size="row" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Minister() {
  return (
    <section className="split split--tint" aria-labelledby="minister-title">
      <div className="split__image">
        <img src={IMAGES.minister} alt="Nathaniel Jordan holding fruit" loading="lazy" />
      </div>
      <div>
        <span className="kicker">Meet the minister · Nathaniel Jordan</span>
        <h2 id="minister-title">Food is spiritual. Health is salvational.</h2>
        <p>
          The Minister of Wellness is a faith-informed ministry of food education, coaching and humanitarian service, led by Nathaniel Jordan.
        </p>
        <p>
          He describes drawing on his own experience with weight and food habits, including a personal starting point in 2010, as part of the perspective he brings to ministry education.
        </p>
        <div className="actions-row">
          <Link className="btn btn--primary" to="/about">Read our story</Link>
          <Link className="text-link" to="/wellness/journey">The wellness journey →</Link>
        </div>
      </div>
    </section>
  );
}

function CoachingBand() {
  return (
    <section className="band" aria-labelledby="coach-title">
      <div className="band__inner">
        <div>
          <span className="kicker kicker--light">Health coaching</span>
          <h2 id="coach-title">Personalized guidance for lasting health and wellness.</h2>
          <p>Individual consultations by phone, video or Zoom, covering your goals, learning resources and practical food guidance.</p>
          <div className="actions-row">
            <Link className="btn btn--gold" to="/coaching#enquire">Send an enquiry</Link>
            <Link className="btn btn--ghost" to="/coaching">How coaching works</Link>
          </div>
        </div>
        <ul className="band__cards">
          {COACHING_FORMATS.map((f, i) => (
            <li key={f.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{f.title}</b>
              <em>{f.text}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const items = HOME_PRODUCT_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);
  return (
    <section className="section" aria-labelledby="shop-title">
      <SectionHeader
        id="shop-title"
        kicker="Shop"
        title="Featured products"
        action={<Link className="text-link" to="/shop">Shop all products →</Link>}
      >
        Products and resources selected to support a more intentional lifestyle.
      </SectionHeader>
      <div className="pgrid">
        {items.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  );
}

function OutreachBanner() {
  return (
    <section className="banner" style={{ backgroundImage: `url("${IMAGES.outreach}")` }} aria-labelledby="outreach-title">
      <div className="banner__inner">
        <span className="kicker kicker--light">Humanitarian outreach</span>
        <h2 id="outreach-title">True wellness reaches beyond the self.</h2>
        <p>Together, we can bring hope, health and compassion to communities in need.</p>
        <Link className="btn btn--gold" to="/give">
          Support the Mission <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="section" aria-label="Events and community">
      <div className="community">
        <article className="community__card">
          <span className="kicker">Events &amp; community</span>
          <h3>Seminars, learning and ministry updates</h3>
          <p>Dates will be announced here. Join the list below to hear first.</p>
          <Link className="text-link" to="/events">Explore events →</Link>
        </article>
        <figure className="testimonial">
          <span className="testimonial__mark" aria-hidden="true">“</span>
          <blockquote>This ministry encourages me to be intentional about my health and my faith.</blockquote>
          <figcaption>— Community reflection</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(null, "Explore faith-informed wellness education, coaching, teachings and the humanitarian mission of The Minister of Wellness.");
  return (
    <>
      <Hero />
      <StartHere />
      <FeaturedTeachings />
      <Minister />
      <CoachingBand />
      <FeaturedProducts />
      <OutreachBanner />
      <Community />
    </>
  );
}
