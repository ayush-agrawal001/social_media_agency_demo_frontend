import Image from "next/image";

const services = [
  {
    number: "01",
    name: "Ad agency & content",
    description: "Ad films, product films, corporate videos, brand stories, social creatives, photography, motion graphics and VFX.",
  },
  {
    number: "02",
    name: "Production house",
    description: "Feature films, short films, music videos, documentaries and podcasts—from pre-production through post.",
  },
  {
    number: "03",
    name: "Branding",
    description: "Identity design, brand guidelines, positioning, campaign collateral, landing pages and complete website design.",
  },
  {
    number: "04",
    name: "Social media",
    description: "Strategy, content planning, community management, paid campaigns, analytics and reporting for purposeful growth.",
  },
];

const capabilities = [
  {
    title: "Product shoots",
    label: "Photography · Film",
    description: "Polished product imagery and films shaped for campaigns, catalogues and social feeds.",
    image: "/studio/camera-detail.webp",
    alt: "Cinema camera being prepared by a production crew",
  },
  {
    title: "Ad films",
    label: "Concept · Production",
    description: "End-to-end commercials built around a clear idea and crafted for the screen where they will live.",
    image: "/studio/hero-production.webp",
    alt: "Film crew recording an interview on set",
  },
  {
    title: "Social creatives",
    label: "Strategy · Content",
    description: "Platform-aware campaigns and content systems that keep brands clear, current and consistent.",
    image: "/studio/production-team.webp",
    alt: "Creative production team reviewing a camera on set",
  },
];

const process = [
  ["01", "Planning", "We understand the brief, audience and ambition, then shape the idea and the route to make it real."],
  ["02", "Organising", "People, production, timelines and every moving part come together under one clear plan."],
  ["03", "Executing", "We produce, refine and deliver the work with the craft and care the original vision deserves."],
];

const team = [
  ["Hardik Sahu", "Video producer · Filmmaker · Photographer"],
  ["Swapnil Mathew", "Product photographer · Cinematographer · Visual artist"],
  ["Sanjay Jain", "Filmmaker · Director · Producer"],
];

const instagramUrl = "https://www.instagram.com/cinemoon.studios?igsi=MXdnZTF0enpqN2Jn";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cinemoon Studios home">
          <Image className="wordmark-logo" src="/studio/cinemoon-logo.jpg" alt="" width={44} height={44} sizes="44px" />
          <span className="wordmark-copy"><strong>CINEMOON</strong><small>STUDIOS</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:info@cinemoonstudios.com?subject=New%20project%20enquiry">
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <Image className="hero-media" src="/studio/hero-production.webp" alt="A film crew recording an on-set interview" fill priority sizes="(max-width: 700px) 100vw, 1440px" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow gold-text">Ad agency · Production house</p>
          <h1>Ideas, framed<br /><em>to be felt.</em></h1>
          <p className="hero-intro">Films, brand stories and social content made with a clear point of view—and built to move people.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#work">Explore the studio <span aria-hidden="true">↘</span></a>
            <a className="text-link hero-link" href="mailto:info@cinemoonstudios.com">Start a project <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-seal" aria-label="Cinemoon Studios">
          <Image src="/studio/cinemoon-logo.jpg" alt="" width={72} height={72} sizes="72px" />
          <span>Independent creative studio</span>
        </div>
        <div className="hero-index" aria-hidden="true"><span>Raipur · Chhattisgarh</span><span>Scroll to discover</span></div>
      </section>

      <section className="studio-strip" aria-label="Cinemoon Studios disciplines">
        <span>Creative direction</span><span>Film production</span><span>Brand building</span><span>Social media</span>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span className="eyebrow">01 / About Cinemoon</span><span className="hairline" /></div>
        <div className="about-heading editorial-heading">
          <h2>Creative thinking.<br /><em>Beautifully made.</em></h2>
          <p>Cinemoon brings strategy, storytelling and production together to create work with both purpose and presence.</p>
        </div>
        <div className="about-editorial">
          <figure className="image-panel about-image-left">
            <Image src="/studio/camera-portrait.webp" alt="A cinema camera on set" fill sizes="(max-width: 700px) 100vw, 34vw" />
            <figcaption>Craft in every frame</figcaption>
          </figure>
          <div className="about-copy">
            <span className="eyebrow gold-ink">The Cinemoon approach</span>
            <p>We turn thoughts and visions into work people remember.</p>
            <p className="small-copy">Our independent studio gives ideas the strategy, craft and collaborative space they need—from the first brief to the final frame.</p>
            <a className="button button-navy" href="#services">View our services <span aria-hidden="true">↘</span></a>
          </div>
          <figure className="image-panel about-image-right">
            <Image src="/studio/production-team.webp" alt="A creative team working together on set" fill sizes="(max-width: 700px) 100vw, 34vw" />
            <figcaption>Made through collaboration</figcaption>
          </figure>
        </div>
      </section>

      <section className="vision-feature">
        <div className="vision-copy">
          <span className="eyebrow gold-text">House of Vision</span>
          <h2>The founder<br />behind the brand.</h2>
          <p>A founder-first storytelling experience created to bring the people, purpose and journey behind a business into focus.</p>
          <a className="button button-outline" href="mailto:info@cinemoonstudios.com?subject=House%20of%20Vision">Tell your story <span aria-hidden="true">↗</span></a>
        </div>
        <div className="vision-steps" aria-label="House of Vision experience">
          <div><span>01</span><strong>Discovery</strong><p>Understand the founder, the journey and the reason the brand exists.</p></div>
          <div><span>02</span><strong>Story development</strong><p>Shape a sincere narrative with a clear emotional and strategic thread.</p></div>
          <div><span>03</span><strong>Production</strong><p>Create the founder film, photography and short-form content.</p></div>
          <div><span>04</span><strong>Brand showcase</strong><p>Build lasting assets that earn recognition and trust.</p></div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span className="eyebrow">02 / What we create</span><span className="hairline" /></div>
        <div className="work-heading">
          <h2>Made for the<br /><em>moment it matters.</em></h2>
          <p>From the first frame to the final format, every detail is shaped around where the story needs to go.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-card" key={item.title}>
              <div className="capability-image">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="capability-overlay"><p>{item.label}</p><h3>{item.title}</h3></div>
              </div>
              <p className="capability-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro section-shell">
          <div className="section-label"><span className="eyebrow gold-text">03 / Services</span><span className="hairline light-line" /></div>
          <div className="services-heading"><h2>One studio.<br />Every moving part.</h2><p>Creative, production and distribution brought together around one clear vision.</p></div>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <details className="service-row" key={service.number}>
              <summary><span className="service-number">{service.number}</span><span className="service-name">{service.name}</span><span className="service-toggle" aria-hidden="true">+</span></summary>
              <p>{service.description}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="process section-shell">
        <div className="section-label"><span className="eyebrow">04 / Our process</span><span className="hairline" /></div>
        <div className="process-heading"><h2>Clear from idea<br /><em>to delivery.</em></h2><p>Three stages keep the work focused, collaborative and moving with purpose.</p></div>
        <div className="process-grid">
          {process.map(([number, title, copy]) => <article className="process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="founder">
        <div className="founder-brand" aria-label="Cinemoon Studios logo">
          <span className="founder-brand-label">Independent creative studio</span>
          <Image className="founder-logo" src="/studio/cinemoon-logo.jpg" alt="Official Cinemoon Studios logo" width={420} height={420} sizes="(max-width: 700px) 66vw, 32vw" />
          <div className="founder-wordmark"><strong>CINEMOON</strong><span>STUDIOS</span></div>
          <span className="founder-brand-line" aria-hidden="true" />
        </div>
        <div className="founder-copy">
          <span className="eyebrow gold-text">The vision behind Cinemoon</span>
          <blockquote>“A space that fosters exceptional storytelling and empowers talented individuals within our state.”</blockquote>
          <div><strong>Aishwarya Sharma</strong><span>Creative Director &amp; Producer</span></div>
        </div>
      </section>

      <section className="team section-shell" aria-labelledby="team-title">
        <div className="section-label"><span className="eyebrow">05 / The team</span><span className="hairline" /></div>
        <div className="team-heading"><h2 id="team-title">A collective of<br /><em>makers.</em></h2><p>Directors, producers, cinematographers and visual artists working as one team.</p></div>
        <div className="team-list">
          {team.map(([name, role], index) => <div className="team-row" key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><p>{role}</p></div>)}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy"><span className="eyebrow">06 / Start a conversation</span><h2>Have an idea?<br /><em>Let&apos;s frame it.</em></h2></div>
        <div className="contact-action">
          <p>Tell us what you want to create. We&apos;ll help shape the right way to bring it to life.</p>
          <a className="button button-navy" href="mailto:info@cinemoonstudios.com?subject=New%20project%20enquiry">info@cinemoonstudios.com <span aria-hidden="true">↗</span></a>
          <a className="contact-phone" href="tel:+917773839884">+91 77738 39884</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand"><Image src="/studio/cinemoon-logo.jpg" alt="" width={78} height={78} sizes="78px" /><a className="footer-wordmark" href="#top">CINEMOON</a></div>
          <p>Ad agency &amp; production house.<br />Framing thoughts and visions into reality.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a></div>
          <div><span>Connect</span><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:info@cinemoonstudios.com">Email ↗</a><a href="tel:+917773839884">Call ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Cinemoon Studios</span><span>Raipur, Chhattisgarh</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
