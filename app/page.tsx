import Image from "next/image";
import ProjectPlayer from "./project-player";
import StudioInteractions from "./studio-interactions";

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
    className: "format-wide",
  },
  {
    title: "Founder stories",
    label: "Interview · Documentary",
    description:
      "Human stories shaped around the spark, struggle, pivot, rise and vision behind a founder-led business.",
    image: "/studio/hero-production.webp",
    alt: "A founder being interviewed by a film crew",
    className: "format-portrait",
  },
  {
    title: "Location films",
    label: "Industrial · Real estate",
    description:
      "On-location production that makes people, processes and spaces feel as considered on screen as they are in real life.",
    image: "/studio/production-team.webp",
    alt: "A production team operating a cinema camera on location",
    className: "format-bleed",
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

function SectionRail({ index, label, time }: { index: string; label: string; time: string }) {
  return (
    <div className="section-rail" aria-hidden="true">
      <span>{index} / {label}</span>
      <span className="rail-line" />
      <span>{time}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <StudioInteractions />
      <div className="film-scrubber" aria-hidden="true" />
      <div className="project-cursor" aria-hidden="true">VIEW</div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cinemoon Studios home">
          <Image src="/studio/cinemoon-logo.jpg" alt="" width={40} height={40} sizes="40px" priority />
          <span><strong>CINEMOON</strong><small>STUDIOS / RAIPUR</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
        <a className="header-contact" href="mailto:info@cinemoonstudios.com?subject=New%20film%20enquiry">Start a film ↗</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-frame" data-cursor="PLAY">
          <Image className="hero-media" src="/studio/hero-production.webp" alt="A film crew recording an on-set founder interview" fill priority loading="eager" sizes="(max-width: 700px) 67vw, 47vw" />
          <div className="hero-shade" aria-hidden="true" />
          <span className="frame-index">01 — 24</span>
          <span className="frame-location">RAIPUR · CHHATTISGARH</span>
        </div>
        <h1 className="hero-title" id="hero-title">
          <span>Films that</span>
          <span>make people</span>
          <span>care.</span>
        </h1>
        <div className="hero-bottom">
          <p>Short ads, founder documentaries and production-led social content—from the first line of the script to the final cut.</p>
          <a href="#house-of-vision">Discover House of Vision <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <div className="studio-strip" aria-label="Cinemoon Studios specialisms">
        <span>Short ads</span><i>✦</i><span>Founder stories</span><i>✦</i><span>Industrial films</span><i>✦</i><span>Real estate films</span>
      </div>

      <section className="about section-pad" id="about">
        <SectionRail index="01" label="A video-first studio" time="00:00:12:04" />
        <div className="about-statement">
          <h2>We tell stories.<br /><em>Everything else follows.</em></h2>
          <p>Cinemoon is a Raipur-based creative production studio focused on moving-image work—built for screens, feeds and people.</p>
        </div>
        <div className="about-composition">
          <figure className="media-frame about-tall" data-cursor="VIEW">
            <Image src="/studio/camera-portrait.webp" alt="A cinema camera framing an interview" fill sizes="(max-width: 760px) 88vw, 31vw" />
            <figcaption>Stories, properly framed</figcaption>
          </figure>
          <div className="about-copy">
            <span className="kicker">From thought to final frame</span>
            <h3>Strategy, scripts and serious production craft—under one roof.</h3>
            <p>We develop the idea, write the story, plan the shoot and carry it through production and post. The result is not just more content. It is a film with a reason to exist.</p>
            <a className="line-link" href="#services">See what we make <span>↘</span></a>
          </div>
          <figure className="media-frame about-wide" data-cursor="VIEW">
            <Image src="/studio/production-team.webp" alt="A filmmaking team collaborating around a camera" fill sizes="(max-width: 760px) 88vw, 38vw" />
            <figcaption>Pre-production to post</figcaption>
          </figure>
        </div>
      </section>

      <section className="manifesto" aria-label="Why Cinemoon tells founder stories">
        <span className="kicker">The reason we roll</span>
        <div className="manifesto-copy">
          <p>Every brand has a story.</p>
          <p>Most people only see the product.</p>
          <p>We want to show the world <em>the person behind it.</em></p>
        </div>
        <p className="manifesto-note">The late nights, the doubts, the reason you started.</p>
      </section>

      <section className="vision" id="house-of-vision">
        <div className="vision-intro section-pad">
          <div className="vision-title-block">
            <span className="kicker">A Cinemoon Studios original</span>
            <h2>House<br />of Vision</h2>
          </div>
          <figure className="vision-portrait media-frame" data-cursor="VIEW">
            <Image src="/studio/camera-portrait.webp" alt="Cinema camera filming an interview for House of Vision" fill sizes="(max-width: 760px) 60vw, 22vw" />
          </figure>
          <div className="vision-copy">
            <h3>Brand stories, told from zero to one.</h3>
            <p>Our founder-film series captures the origin, the struggle and the breakthrough behind ambitious local brands. One honest, cinematic story that gives people a reason to root for the brand—not just buy from it.</p>
            <div className="vision-links">
              <a className="line-link light" href="#featured-story">Watch the first story <span>↓</span></a>
              <a className="line-link light" href="mailto:info@cinemoonstudios.com?subject=House%20of%20Vision%20enquiry">Tell your story <span>↗</span></a>
            </div>
          </div>
        </div>
        <div className="acts section-pad" aria-label="The five-act House of Vision story format">
          <p className="kicker">Every story, told in five acts</p>
          <div className="acts-list">
            {storyActs.map(([number, title, copy]) => (
              <div className="act" key={number}>
                <span>{number}</span><strong>{title}</strong><p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-story section-pad" id="featured-story">
        <SectionRail index="02" label="Featured founder story" time="00:03:26:11" />
        <div className="story-heading">
          <div>
            <span className="kicker">House of Vision · Episode 01</span>
            <h2>Shawarmawala</h2>
          </div>
          <p>How Sikandar turned one failed restaurant into a fast-growing Raipur food brand.</p>
        </div>
        <div className="story-player" data-cursor="PLAY">
          <ProjectPlayer />
        </div>
        <div className="story-bottom">
          <p>After The Biryani Factory closed in Bangalore, he spotted an open market back home, backed the idea with his remaining capital and built Shawarmawala from a single cart to 5–6 locations in about 18 months.</p>
          <dl>
            <div><dt>Founder</dt><dd>Sikandar</dd></div>
            <div><dt>Built in</dt><dd>Raipur, CG</dd></div>
            <div><dt>Runtime</dt><dd>5 min 34 sec</dd></div>
          </dl>
          <a className="line-link" href="https://www.youtube.com/watch?v=2tEyh64lmk8" target="_blank" rel="noreferrer">Open on YouTube <span>↗</span></a>
        </div>
      </section>

      <section className="content-system section-pad">
        <div className="content-title">
          <span className="kicker">One shoot · A full content library</span>
          <h2>More than a video.<br /><em>A piece of brand IP.</em></h2>
        </div>
        <div className="deliverables">
          {deliverables.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-pad" id="work">
        <SectionRail index="03" label="What we film" time="00:05:41:07" />
        <div className="work-heading">
          <h2>Every brief needs<br /><em>its own kind of film.</em></h2>
          <p>From 15-second ads to founder documentaries and large-scale location shoots, the format follows the story and the screen.</p>
        </div>
        <div className="formats">
          {capabilities.map((item, index) => (
            <article className={`format ${item.className}`} key={item.title} data-cursor="VIEW">
              <figure>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 75vw" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </figure>
              <div className="format-copy">
                <p>{item.label}</p><h3>{item.title}</h3><p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-head section-pad">
          <SectionRail index="04" label="Services" time="00:07:19:23" />
          <h2>From first thought<br /><em>to final cut.</em></h2>
          <p>Focused services for brands that need a story, not a content checklist.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <details className="service-row" key={service.number}>
              <summary>
                <span>{service.number}</span><strong>{service.name}</strong><i aria-hidden="true">+</i>
              </summary>
              <p>{service.description}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="process section-pad">
        <SectionRail index="05" label="How we work" time="00:09:02:16" />
        <div className="process-heading">
          <h2>From first call<br /><em>to final cut.</em></h2>
          <p>A clear four-step production process keeps the story honest and every moving part aligned.</p>
        </div>
        <div className="process-list">
          {process.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder">
        <div className="founder-visual">
          <Image src="/studio/cinemoon-logo.jpg" alt="Official Cinemoon Studios logo" width={420} height={420} sizes="(max-width: 760px) 44vw, 22vw" />
          <span>CINEMOON</span>
        </div>
        <div className="founder-quote">
          <span className="kicker">The vision behind Cinemoon</span>
          <blockquote>“A space that fosters exceptional storytelling and empowers talented individuals within our state.”</blockquote>
          <div><strong>Aishwarya Sharma</strong><span>Creative Director &amp; Producer</span></div>
        </div>
      </section>

      <section className="team section-pad" aria-labelledby="team-title">
        <SectionRail index="06" label="The team" time="00:10:48:05" />
        <div className="team-heading">
          <h2 id="team-title">A collective<br />of <em>makers.</em></h2>
          <p>Directors, producers, cinematographers and visual artists working as one crew.</p>
        </div>
        <div className="team-list">
          {team.map(([name, role], index) => (
            <div className="team-row" key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><p>{role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <span className="kicker">07 / Start a conversation</span>
        <h2>Your story is worth<br /><em>more than a scroll.</em></h2>
        <div className="contact-bottom">
          <p>Tell us what you are building and where the film needs to work. We will help shape the right story and production approach.</p>
          <a href="mailto:info@cinemoonstudios.com?subject=New%20film%20enquiry">info@cinemoonstudios.com <span>↗</span></a>
          <a href="tel:+917773839884">+91 77738 39884</a>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-top">
          <a className="footer-wordmark" href="#top">CINEMOON</a>
          <p>Video production &amp; brand storytelling.<br />From Raipur, for stories worth remembering.</p>
        </div>
        <div className="footer-nav">
          <div><span>Explore</span><a href="#house-of-vision">House of Vision</a><a href="#work">Work</a><a href="#services">Services</a></div>
          <div><span>Connect</span><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:info@cinemoonstudios.com">Email ↗</a><a href="tel:+917773839884">Call ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Cinemoon Studios</span><span>Raipur, Chhattisgarh</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
