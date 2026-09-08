import Image from "next/image";
import ProjectPlayer from "./project-player";
import StudioInteractions from "./studio-interactions";

const services = [
  {
    number: "01",
    name: "Ad films",
    label: "Concept · Script · Production",
    description:
      "Short, promotional and campaign films built around a strong idea—from scripting and casting to the shoot, edit, sound and final cutdowns.",
    image: "/studio/ad-film-location.webp",
    alt: "Cinemoon crew reviewing footage during an outdoor film production",
  },
  {
    number: "02",
    name: "Product shoots",
    label: "Photography · Video · Styling",
    description:
      "Product photography and video that gives food, packaging and physical products a distinctive visual world across campaigns and commerce.",
    image: "/studio/product-packaging.webp",
    alt: "Colourful food packaging photographed by Cinemoon Studios",
  },
  {
    number: "03",
    name: "Social content",
    label: "Reels · Promos · Creative systems",
    description:
      "Platform-aware social films and creative series designed to stop the scroll while still feeling unmistakably like your brand.",
    image: "/studio/social-food-campaign.webp",
    alt: "Two sandwiches styled against a red background for a social campaign",
  },
  {
    number: "04",
    name: "Brand stories",
    label: "Founder films · Documentary",
    description:
      "Human, documentary-led films about the spark, struggle, pivot, rise and vision behind a business—including our House of Vision format.",
    image: "/studio/brand-story-camera.webp",
    alt: "A Cinemoon camera filming a product and founder-led story",
    href: "#house-of-vision",
  },
  {
    number: "05",
    name: "Location films",
    label: "Industrial · Real estate · Interiors",
    description:
      "Considered on-location films that make real people, processes and spaces feel as compelling on screen as they do in person.",
    image: "/studio/interior-location-shoot.webp",
    alt: "Cinemoon crew preparing an interior location shoot",
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

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cinemoon Studios home">
          <Image src="/studio/cinemoon-logo.jpg" alt="" width={40} height={40} sizes="40px" />
          <span><strong>CINEMOON</strong><small>STUDIOS / RAIPUR</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#house-of-vision">House of Vision</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#services">Services</a>
            <a href="#house-of-vision">House of Vision</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
        <a className="header-contact" href="mailto:info@cinemoonstudios.com?subject=New%20film%20enquiry">Start a film ↗</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-frame">
          <Image className="hero-media" src="/studio/hero-client-shoot.webp" alt="Cinemoon camera filming a founder during a food shoot" fill preload sizes="(max-width: 700px) 100vw, 47vw" />
          <div className="hero-shade" aria-hidden="true" />
          <span className="frame-index">01 — 24</span>
          <span className="frame-location">RAIPUR · CHHATTISGARH</span>
        </div>
        <h1
          className="hero-title"
          id="hero-title"
          aria-label="Films that make people care."
        >
          <span className="hero-title-line" aria-hidden="true">
            Films tha<span className="hero-build hero-build--horizontal">
              t
              <span className="hero-builder hero-builder--horizontal">
                <span className="hero-builder-cable" />
                <span className="hero-builder-head" />
                <span className="hero-builder-jaw hero-builder-jaw--one" />
                <span className="hero-builder-jaw hero-builder-jaw--two" />
              </span>
            </span>
          </span>
          <span className="hero-title-line hero-title-line--middle" aria-hidden="true">
            make people
          </span>
          <span className="hero-title-line hero-title-line--accent" aria-hidden="true">
            care<span className="hero-build hero-build--vertical">
              .
              <span className="hero-builder hero-builder--vertical">
                <span className="hero-builder-cable" />
                <span className="hero-builder-head" />
                <span className="hero-builder-jaw hero-builder-jaw--one" />
                <span className="hero-builder-jaw hero-builder-jaw--two" />
              </span>
            </span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p>Ad films, product shoots, founder documentaries and social content—from the first line of the script to the final cut.</p>
          <a href="#services">Explore our services <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <div className="studio-strip" aria-label="Cinemoon Studios specialisms">
        <span>Ad films</span><i>✦</i><span>Product shoots</span><i>✦</i><span>Social content</span><i>✦</i><span>Brand stories</span><i>✦</i><span>Location films</span>
      </div>

      <section className="services" id="services">
        <div className="services-head section-pad">
          <SectionRail index="01" label="Services" time="00:01:18:09" />
          <h2>Everything needed<br /><em>to make it move.</em></h2>
          <p>Strategy, production and post under one roof. Every core service is laid out here—no hidden menu, no generic content package.</p>
        </div>
        <div className="service-grid section-pad">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <figure>
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span>{service.number}</span>
              </figure>
              <div className="service-card-copy">
                <p>{service.label}</p>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                {service.href ? <a className="line-link" href={service.href}>Discover House of Vision <span>↘</span></a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vision" id="house-of-vision">
        <div className="vision-intro section-pad">
          <div className="vision-title-block">
            <span className="kicker">Brand stories · A Cinemoon Studios original</span>
            <h2>House<br />of Vision</h2>
          </div>
          <figure className="vision-portrait media-frame">
            <Image src="/studio/camera-gimbal.webp" alt="Cinemoon camera rig prepared for a House of Vision shoot" fill sizes="(max-width: 760px) 76vw, 22vw" />
          </figure>
          <div className="vision-copy">
            <h3>Brand stories, told from zero to one.</h3>
            <p>Our founder-film series captures the origin, the struggle and the breakthrough behind ambitious local brands. One honest, cinematic story that gives people a reason to root for the brand—not just buy from it.</p>
            <div className="vision-links">
              <a className="line-link light" href="#work">Watch the first story <span>↓</span></a>
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

      <section className="featured-story section-pad" id="work">
        <SectionRail index="02" label="Featured founder story" time="00:03:26:11" />
        <div className="story-heading">
          <div>
            <span className="kicker">House of Vision · Episode 01</span>
            <h2>Shawarmawala</h2>
          </div>
          <p>How Sikandar turned one failed restaurant into a fast-growing Raipur food brand.</p>
        </div>
        <div className="story-player">
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

      <section className="about section-pad" id="about">
        <SectionRail index="03" label="A video-first studio" time="00:06:14:04" />
        <div className="about-statement">
          <h2>We tell stories.<br /><em>Everything else follows.</em></h2>
          <p>Cinemoon is a Raipur-based creative production studio focused on moving-image work—built for screens, feeds and people.</p>
        </div>
        <div className="about-composition">
          <figure className="media-frame about-tall">
            <Image src="/studio/edit-suite.webp" alt="Cinemoon visual identity being refined in post-production" fill sizes="(max-width: 760px) 84vw, 31vw" />
            <figcaption>Ideas refined in post</figcaption>
          </figure>
          <div className="about-copy">
            <span className="kicker">From thought to final frame</span>
            <h3>Strategy, scripts and serious production craft—under one roof.</h3>
            <p>We develop the idea, write the story, plan the shoot and carry it through production and post. The result is not just more content. It is a film with a reason to exist.</p>
            <a className="line-link" href="#services">See every service <span>↖</span></a>
          </div>
          <figure className="media-frame about-wide">
            <Image src="/studio/shoot-planning.webp" alt="A laptop and shot-planning notes used during pre-production" fill sizes="(max-width: 760px) 76vw, 38vw" />
            <figcaption>Planning before the camera rolls</figcaption>
          </figure>
        </div>
      </section>

      <section className="manifesto" aria-label="Why Cinemoon tells founder stories">
        <span className="kicker">The reason we roll</span>
        <div className="manifesto-copy">
          <p>Every brand has a story.</p>
          <p>Most people only see the product.</p>
          <p>We show them <em>why it matters.</em></p>
        </div>
        <p className="manifesto-note">The idea, the people, the hard parts and the reason you kept going.</p>
      </section>

      <section className="process section-pad">
        <SectionRail index="04" label="How we work" time="00:08:42:16" />
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

      <section className="contact section-pad" id="contact">
        <span className="kicker">05 / Start a conversation</span>
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
          <div><span>Explore</span><a href="#services">Services</a><a href="#house-of-vision">House of Vision</a><a href="#work">Featured work</a></div>
          <div><span>Connect</span><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:info@cinemoonstudios.com">Email ↗</a><a href="tel:+917773839884">Call ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Cinemoon Studios</span><span>Raipur, Chhattisgarh</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
