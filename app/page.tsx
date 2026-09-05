import Image from "next/image";

const services = [
  {
    number: "01",
    name: "Short ads",
    description:
      "Social-first ad films with a real idea behind them—from scripting and casting to production, edit, sound and final platform cutdowns.",
  },
  {
    number: "02",
    name: "Brand stories",
    description:
      "Founder films and documentary-led brand stories, including our House of Vision format: one cinematic feature plus a library of short-form content.",
  },
  {
    number: "03",
    name: "Industrial films",
    description:
      "Clear, cinematic films for factories, infrastructure, corporate teams and processes—planned around real locations, people and operations.",
  },
  {
    number: "04",
    name: "Real estate films",
    description:
      "Property, hospitality and destination films that bring spaces to life through considered direction, movement, light and social-ready edits.",
  },
];

const capabilities = [
  {
    title: "Short ads",
    label: "Concept · Script · Film",
    description:
      "Tightly written, platform-aware films designed to earn attention in the first seconds and stay memorable after the scroll.",
    image: "/studio/camera-detail.webp",
    alt: "Cinema camera being prepared by a production crew",
  },
  {
    title: "Founder stories",
    label: "Interview · Documentary",
    description:
      "Human stories shaped around the spark, struggle, pivot, rise and vision behind a founder-led business.",
    image: "/studio/hero-production.webp",
    alt: "A founder being interviewed by a film crew",
  },
  {
    title: "Location films",
    label: "Industrial · Real estate",
    description:
      "On-location production that makes people, processes and spaces feel as considered on screen as they are in real life.",
    image: "/studio/production-team.webp",
    alt: "A production team operating a cinema camera on location",
  },
];

const storyActs = [
  ["01", "The Spark", "Where the idea came from."],
  ["02", "The Struggle", "The odds stacked against it."],
  ["03", "The Pivot", "The decision that changed everything."],
  ["04", "The Rise", "How the brand found its footing."],
  ["05", "The Vision", "What comes next for the brand."],
];

const deliverables = [
  ["01", "The feature film", "One 8–12 minute cinematic brand documentary."],
  ["02", "Founder interviews", "On-camera conversations for press, investors and hiring."],
  ["03", "Social cutdowns", "15–20 edits for Reels, Shorts and LinkedIn."],
  ["04", "Behind the scenes", "Candid material that keeps the story alive after launch."],
];

const process = [
  ["01", "Discovery call", "We find the real story—the moments, stakes and people worth putting on screen."],
  ["02", "Story mapping", "We shape the arc, write the film and build a precise production plan."],
  ["03", "The shoot", "Our crew captures the founders, teams, spaces and details that make the story believable."],
  ["04", "Edit & delivery", "We craft the final film, sound and complete set of platform-ready cutdowns."],
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
      <div className="film-scrubber" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cinemoon Studios home">
          <Image className="wordmark-logo" src="/studio/cinemoon-logo.jpg" alt="" width={44} height={44} sizes="44px" />
          <span className="wordmark-copy"><strong>CINEMOON</strong><small>STUDIOS</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#house-of-vision">House of Vision</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:info@cinemoonstudios.com?subject=New%20film%20enquiry">
          Start a film <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <Image className="hero-media" src="/studio/hero-production.webp" alt="A film crew recording an on-set founder interview" fill priority sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow gold-text hero-eyebrow">Video production · Brand storytelling</p>
          <h1>
            <span className="line"><span>Films that make</span></span>
            <span className="line"><em>people care.</em></span>
          </h1>
          <p className="hero-intro">Short ads, founder documentaries and production-led social content—from the first line of the script to the final cut.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#house-of-vision">Discover House of Vision <span aria-hidden="true">↘</span></a>
            <a className="text-link hero-link" href="mailto:info@cinemoonstudios.com?subject=New%20film%20enquiry">Start a film <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-seal" aria-label="Cinemoon Studios">
          <Image src="/studio/cinemoon-logo.jpg" alt="" width={72} height={72} sizes="72px" />
          <span>Independent film studio</span>
        </div>
        <div className="hero-index" aria-hidden="true"><span>Raipur · Chhattisgarh</span><span>Stories in motion</span></div>
      </section>

      <section className="studio-strip" aria-label="Cinemoon Studios specialisms">
        <span data-reveal="fade">Short ads</span>
        <span data-reveal="fade" data-d="1">Founder stories</span>
        <span data-reveal="fade" data-d="2">Industrial films</span>
        <span data-reveal="fade" data-d="3">Real estate films</span>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label">
          <span className="eyebrow">01 / A video-first studio</span>
          <span className="hairline" data-reveal="line" />
          <span className="timecode">00:00:12:04</span>
        </div>
        <div className="about-heading editorial-heading">
          <h2 data-reveal>We tell stories.<br /><em>Everything else follows.</em></h2>
          <p data-reveal data-d="1">Cinemoon is a Raipur-based creative production studio focused on moving-image work—built for screens, feeds and people.</p>
        </div>
        <div className="about-editorial">
          <figure className="image-panel about-image-left" data-reveal="mask">
            <Image src="/studio/camera-portrait.webp" alt="A cinema camera framing an interview" fill sizes="(max-width: 700px) 100vw, 34vw" />
            <figcaption>Stories, properly framed</figcaption>
          </figure>
          <div className="about-copy">
            <span className="eyebrow gold-ink" data-reveal="fade">From thought to final frame</span>
            <p data-reveal data-d="1">Strategy, scripts and serious production craft—under one roof.</p>
            <p className="small-copy" data-reveal data-d="2">We develop the idea, write the story, plan the shoot and carry it through production and post. The result is not just more content. It is a film with a reason to exist.</p>
            <a className="button button-navy" href="#services" data-reveal data-d="3">See what we make <span aria-hidden="true">↘</span></a>
          </div>
          <figure className="image-panel about-image-right" data-reveal="mask" data-d="2">
            <Image src="/studio/production-team.webp" alt="A filmmaking team collaborating around a camera" fill sizes="(max-width: 700px) 100vw, 34vw" />
            <figcaption>Pre-production to post</figcaption>
          </figure>
        </div>
      </section>

      <section className="intertitle grain" aria-label="Why Cinemoon tells founder stories">
        <div className="intertitle-inner">
          <span className="intertitle-tag" data-reveal="fade">The reason we roll</span>
          <p className="it-1" data-reveal>Every brand has a story.</p>
          <p className="it-2" data-reveal data-d="1">Most people only see the product.</p>
          <p className="it-3" data-reveal data-d="2">We want to show the world <em>the person behind it.</em></p>
          <p className="it-note" data-reveal data-d="3">The late nights, the doubts, the reason you started.</p>
        </div>
      </section>

      <section className="vision-feature grain" id="house-of-vision">
        <div className="vision-copy">
          <span className="eyebrow gold-text" data-reveal="fade">A Cinemoon Studios original</span>
          <h2 data-reveal>House of<br />Vision</h2>
          <p className="vision-tagline" data-reveal data-d="1">Brand stories, told from zero to one.</p>
          <p data-reveal data-d="2">Our founder-film series captures the origin, the struggle and the breakthrough behind ambitious local brands. One honest, cinematic story that gives people a reason to root for the brand—not just buy from it.</p>
          <div className="vision-actions" data-reveal data-d="3">
            <a className="button button-gold" href="#featured-story">Watch the first story <span aria-hidden="true">↘</span></a>
            <a className="text-link hero-link" href="mailto:info@cinemoonstudios.com?subject=House%20of%20Vision%20enquiry">Tell your story <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="vision-steps" aria-label="The five-act House of Vision story format">
          <p className="vision-steps-label" data-reveal="fade">Every story, told in five acts</p>
          {storyActs.map(([number, title, copy], index) => (
            <div key={number} data-reveal data-d={String(Math.min(index, 4))}>
              <span>{number}</span><strong>{title}</strong><p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-story section-shell" id="featured-story">
        <div className="section-label">
          <span className="eyebrow">02 / Featured founder story</span>
          <span className="hairline" data-reveal="line" />
          <span className="timecode">00:03:26:11</span>
        </div>
        <div className="story-grid">
          <div className="story-copy">
            <span className="story-episode" data-reveal="fade">House of Vision · Episode 01</span>
            <h2 data-reveal>Shawarmawala</h2>
            <p className="story-lead" data-reveal data-d="1">How Sikandar turned one failed restaurant into a fast-growing Raipur food brand.</p>
            <p data-reveal data-d="2">After The Biryani Factory closed in Bangalore, he spotted an open market back home, backed the idea with his remaining capital and built Shawarmawala from a single cart to 5–6 locations in about 18 months.</p>
            <dl className="story-facts" data-reveal data-d="3">
              <div><dt>Founder</dt><dd>Sikandar</dd></div>
              <div><dt>Built in</dt><dd>Raipur, CG</dd></div>
              <div><dt>Runtime</dt><dd>5 min 34 sec</dd></div>
            </dl>
            <a className="text-link dark-link" href="https://www.youtube.com/watch?v=2tEyh64lmk8" target="_blank" rel="noreferrer" data-reveal data-d="4">Open on YouTube <span aria-hidden="true">↗</span></a>
          </div>
          <div className="story-player" data-reveal="mask" data-d="1">
            <iframe
              src="https://www.youtube-nocookie.com/embed/2tEyh64lmk8?rel=0"
              title="Shawarmawala Brand Story by Cinemoon Studios"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="content-system section-shell grain" aria-labelledby="content-system-title">
        <div className="content-system-heading">
          <span className="eyebrow gold-ink" data-reveal="fade">One shoot · A full content library</span>
          <h2 id="content-system-title" data-reveal>More than a video.<br /><em>A piece of brand IP.</em></h2>
        </div>
        <div className="deliverable-grid">
          {deliverables.map(([number, title, copy], index) => (
            <article key={number} data-reveal data-d={String(index)}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label">
          <span className="eyebrow">03 / What we film</span>
          <span className="hairline" data-reveal="line" />
          <span className="timecode">00:05:41:07</span>
        </div>
        <div className="work-heading">
          <h2 data-reveal>Every brief needs<br /><em>its own kind of film.</em></h2>
          <p data-reveal data-d="1">From 15-second ads to founder documentaries and large-scale location shoots, the format follows the story and the screen.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-card" key={item.title} data-reveal="mask" data-d={String(index)}>
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

      <section className="services grain" id="services">
        <div className="services-intro section-shell">
          <div className="section-label">
            <span className="eyebrow gold-text">04 / Services</span>
            <span className="hairline light-line" data-reveal="line" />
            <span className="timecode">00:07:19:23</span>
          </div>
          <div className="services-heading">
            <h2 data-reveal>From first thought<br /><em>to final cut.</em></h2>
            <p data-reveal data-d="1">Focused services for brands that need a story, not a content checklist.</p>
          </div>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <details className="service-row" key={service.number} data-reveal="fade" data-d={String(index)}>
              <summary><span className="service-number">{service.number}</span><span className="service-name">{service.name}</span><span className="service-toggle" aria-hidden="true">+</span></summary>
              <p>{service.description}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="process section-shell">
        <div className="section-label">
          <span className="eyebrow">05 / How we work</span>
          <span className="hairline" data-reveal="line" />
          <span className="timecode">00:09:02:16</span>
        </div>
        <div className="process-heading">
          <h2 data-reveal>From first call<br /><em>to final cut.</em></h2>
          <p data-reveal data-d="1">A clear four-step production process keeps the story honest and every moving part aligned.</p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, copy], index) => (
            <article className="process-card" key={number} data-reveal data-d={String(index)}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder grain">
        <div className="founder-brand" aria-label="Cinemoon Studios logo">
          <span className="founder-brand-label">Independent film studio</span>
          <Image className="founder-logo" src="/studio/cinemoon-logo.jpg" alt="Official Cinemoon Studios logo" width={420} height={420} sizes="(max-width: 700px) 28vw, 11vw" />
          <div className="founder-wordmark"><strong>CINEMOON</strong><span>STUDIOS</span></div>
          <span className="founder-brand-line" aria-hidden="true" />
        </div>
        <div className="founder-copy">
          <span className="eyebrow gold-text" data-reveal="fade">The vision behind Cinemoon</span>
          <blockquote data-reveal>“A space that fosters exceptional storytelling and empowers talented individuals within our state.”</blockquote>
          <div data-reveal data-d="2"><strong>Aishwarya Sharma</strong><span>Creative Director &amp; Producer</span></div>
        </div>
      </section>

      <section className="team section-shell" aria-labelledby="team-title">
        <div className="section-label">
          <span className="eyebrow">06 / The team</span>
          <span className="hairline" data-reveal="line" />
          <span className="timecode">00:10:48:05</span>
        </div>
        <div className="team-heading">
          <h2 id="team-title" data-reveal>A collective of<br /><em>makers.</em></h2>
          <p data-reveal data-d="1">Directors, producers, cinematographers and visual artists working as one crew.</p>
        </div>
        <div className="team-list">
          {team.map(([name, role], index) => (
            <div className="team-row" key={name} data-reveal data-d={String(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><p>{role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy">
          <span className="eyebrow" data-reveal="fade">07 / Start a conversation</span>
          <h2 data-reveal>Your story is worth<br /><em>more than a scroll.</em></h2>
        </div>
        <div className="contact-action">
          <p data-reveal data-d="1">Tell us what you are building and where the film needs to work. We will help shape the right story and production approach.</p>
          <a className="button button-navy" href="mailto:info@cinemoonstudios.com?subject=New%20film%20enquiry" data-reveal data-d="2">info@cinemoonstudios.com <span aria-hidden="true">↗</span></a>
          <a className="contact-phone" href="tel:+917773839884" data-reveal data-d="3">+91 77738 39884</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand"><Image src="/studio/cinemoon-logo.jpg" alt="" width={78} height={78} sizes="78px" /><a className="footer-wordmark" href="#top">CINEMOON</a></div>
          <p>Video production &amp; brand storytelling.<br />From Raipur, for stories worth remembering.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><a href="#house-of-vision">House of Vision</a><a href="#work">Work</a><a href="#services">Services</a></div>
          <div><span>Connect</span><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:info@cinemoonstudios.com">Email ↗</a><a href="tel:+917773839884">Call ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Cinemoon Studios</span><span>Raipur, Chhattisgarh</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
