"use client";

import { useEffect, useRef, useState } from "react";

const tickerServices = [
  "Social Strategy",
  "Content Creation",
  "Paid Media",
  "Influencer Marketing",
  "Brand Campaigns",
  "Community Management",
];

const campaigns = [
  {
    client: "Morrow Studio",
    title: "Wear the night",
    meta: "Creative Direction · Social Campaign · Production",
    year: "2026",
    result: "+14.8M organic views",
    image: "radial-gradient(circle at 72% 30%, #ffd600 0 9%, transparent 9.5%), linear-gradient(132deg, #8a5cff 0 28%, #ff3b19 28% 57%, #ff9d00 57% 76%, #141416 76%)",
    className: "campaign-fashion",
  },
  {
    client: "Hot Stuff",
    title: "Full flavour. Zero chill.",
    meta: "Brand Campaign · Creator Content · Paid Social",
    year: "2026",
    result: "6.2× campaign ROAS",
    image: "radial-gradient(circle at 58% 44%, #ffc642 0 6%, #ff6a00 6.5% 13%, #a8200b 13.5% 17%, transparent 17.5%), radial-gradient(circle at 48% 50%, #ffc642 0 31%, #db3010 31.5% 36%, transparent 36.5%), linear-gradient(145deg, #fc4215, #7e0c05 58%, #150504)",
    className: "campaign-food",
  },
  {
    client: "Sonic / 07",
    title: "Sound from another orbit",
    meta: "Launch Strategy · Content System · Performance",
    year: "2025",
    result: "82K pre-orders",
    image: "url(/og.png)",
    className: "campaign-tech",
  },
];

const services = [
  ["01", "Social media strategy", "Audience, culture and platform insight turned into a plan people actually notice.", campaigns[0].image],
  ["02", "Content production", "Always-on films, stills and stories built natively for every feed and format.", campaigns[1].image],
  ["03", "Paid social", "Creative testing and media that turns attention into measurable momentum.", campaigns[2].image],
  ["04", "Influencer campaigns", "Credible creator partnerships with an idea strong enough to travel.", campaigns[0].image],
  ["05", "Brand & creative direction", "Distinctive worlds, voices and systems made to live at culture-speed.", campaigns[0].image],
  ["06", "Community management", "Human conversation that turns casual followers into loyal regulars.", campaigns[1].image],
];

const metrics = [
  [120, "M+", "Organic views"],
  [4.8, "×", "Average ROAS"],
  [300, "+", "Campaigns launched"],
  [45, "+", "Brands scaled"],
];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!active) return;
    setShown(0);
    const started = performance.now();
    const duration = 1350;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setShown(value % 1 ? Number((value * eased).toFixed(1)) : Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{shown}{suffix}</>;
}

export default function Home() {
  const resultsRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [servicePreview, setServicePreview] = useState({ show: false, x: 0, y: 0, image: "" });
  const [caseCursor, setCaseCursor] = useState({ show: false, x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lightweightMobile = window.matchMedia("(max-width: 900px), (pointer: coarse)").matches;
    let previous = window.scrollY;
    let scrollFrame = 0;
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        const next = window.scrollY;
        tickerRef.current?.classList.toggle("ticker-reverse", next < previous);
        previous = next;
        const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.min(next / scrollable, 1)})`;
        scrollFrame = 0;
      });
    };
    if (!lightweightMobile) window.addEventListener("scroll", onScroll, { passive: true });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((item) => {
      if (lightweightMobile || item.getBoundingClientRect().top < window.innerHeight * 1.1) item.classList.add("is-visible");
      if (!lightweightMobile) revealObserver.observe(item);
    });
    document.documentElement.classList.add("js-motion");

    const onAnchor = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor || anchor.getAttribute("href") === "#") return;
      const target = document.querySelector(anchor.getAttribute("href")!);
      if (!target) return;
      event.preventDefault();
      window.scrollTo({
        top: Math.max((target as HTMLElement).offsetTop - 20, 0),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    };
    document.addEventListener("click", onAnchor);

    const resultObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setResultsVisible(true);
    }, { threshold: 0.35 });
    if (resultsRef.current) resultObserver.observe(resultsRef.current);

    return () => {
      if (!lightweightMobile) window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scrollFrame);
      document.removeEventListener("click", onAnchor);
      document.documentElement.classList.remove("js-motion");
      revealObserver.disconnect();
      resultObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Cinemoon home">CINEM<span className="brand-o">O</span>ON</a>
        <div className="nav-links">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#insights">Insights</a>
        </div>
        <a className="nav-cta" href="mailto:hello@cinemoon.agency">Start a project <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="eclipse" aria-hidden="true"><div className="eclipse-core" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
        <div className="frame frame-a" aria-hidden="true"><div className="frame-image fashion" /><span>REC · 00:14:32</span></div>
        <div className="frame frame-b" aria-hidden="true"><div className="frame-image tech" /><span>FRAME 024</span></div>
        <div className="frame frame-c" aria-hidden="true"><div className="frame-image culture" /><span>9:16 / LIVE</span></div>
        <div className="hero-kicker"><span>Independent creative company · Est. 2021</span><span>London · Mumbai · Everywhere</span></div>
        <div className="hero-stage-label"><span>NOW PLAYING</span><b>CM–001</b></div>
        <h1 className="hero-title"><span>We make brands</span><span>impossible to</span><span className="hero-outline">scroll past.</span></h1>
        <div className="hero-bottom">
          <p>Cinemoon is a social-first creative agency producing campaigns, content and digital experiences that move at the speed of culture.</p>
          <div className="hero-actions"><a className="button button-dark magnetic" href="#work">View our work <span>↘</span></a><a className="button button-light magnetic" href="mailto:hello@cinemoon.agency">Start a project <span>↗</span></a></div>
        </div>
        <a className="scroll-cue" href="#work" aria-label="Scroll to featured work"><span>Scroll to enter</span><span className="scroll-line" /></a>
      </section>

      <div className="ticker" ref={tickerRef} aria-label={tickerServices.join(", ")}>
        <div className="ticker-track">{[...tickerServices, ...tickerServices].map((service, index) => <span key={`${service}-${index}`}>{service}<b>✦</b></span>)}</div>
      </div>

      <section className="work-section section-pad" id="work">
        <div className="section-heading reveal"><span className="eyebrow">01 / Selected work</span><h2>Our latest<br /><i>productions</i></h2><p>Ideas made to move—from the first frame to the millionth view.</p></div>
        <div className="campaign-grid">
          {campaigns.map((campaign, index) => (
            <article className={`campaign-card ${campaign.className} reveal`} key={campaign.client}
              onPointerMove={(event) => setCaseCursor({ show: true, x: event.clientX, y: event.clientY })}
              onPointerLeave={() => setCaseCursor((cursor) => ({ ...cursor, show: false }))}>
              <div className="campaign-visual" style={{ backgroundImage: campaign.image }}>
                <span className="frame-label">A CINEMOON PRODUCTION · {String(index + 1).padStart(3, "0")}</span>
                <button className="play" aria-label={`Play ${campaign.title} campaign reel`}><span>▶</span></button>
                <span className="campaign-result">{campaign.result}</span>
              </div>
              <div className="campaign-info"><div><span>{campaign.client}</span><h3>{campaign.title}</h3></div><div><p>{campaign.meta}</p><span>{campaign.year}</span></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="phase-rail" aria-hidden="true">{[0,1,2,3,4,5,6].map((phase) => <span className={`phase phase-${phase}`} key={phase} />)}</div>
        <span className="eyebrow">02 / Our point of view</span>
        <h2 className="reveal"><span>Social isn’t</span><span>a channel.</span><span>It’s where <i>culture</i></span><span>happens.</span></h2>
        <div className="manifesto-copy reveal"><span className="lunar-index">LUNAR NOTE / 001</span><p>We combine sharp strategy, restless creative production and performance thinking to build brands people remember—not just campaigns the algorithm forgets.</p></div>
      </section>

      <section className="services-section" id="services">
        <div className="services-intro section-pad reveal"><span className="eyebrow">03 / What we do</span><h2>Big ideas.<br />Made social.</h2><p>One integrated crew from the first cultural insight to the final paid cut.</p></div>
        <div className="service-list">
          {services.map(([number, name, description, image]) => (
            <a href="mailto:hello@cinemoon.agency" className="service-row" key={number}
              onPointerMove={(event) => setServicePreview({ show: true, x: event.clientX, y: event.clientY, image })}
              onPointerLeave={() => setServicePreview((preview) => ({ ...preview, show: false }))}>
              <span className="service-number">{number}</span><h3>{name}</h3><p>{description}</p><span className="service-arrow">↗</span>
            </a>
          ))}
        </div>
        <div className={`service-preview ${servicePreview.show ? "show" : ""}`} style={{ left: servicePreview.x, top: servicePreview.y, backgroundImage: servicePreview.image }} />
      </section>

      <section className="results" ref={resultsRef}>
        <div className="results-top"><span className="eyebrow">04 / The box office</span><span>Live performance report · Updated 09.26</span></div>
        <div className="metric-grid">{metrics.map(([value, suffix, label], index) => <div className="metric" key={String(label)}><span className="metric-index">0{index + 1}</span><strong><CountUp value={value as number} suffix={suffix as string} active={resultsVisible} /></strong><p>{label}</p></div>)}</div>
        <div className="credit-roll"><span>ATTENTION EARNED</span><span>COMMUNITIES BUILT</span><span>CULTURE MOVED</span></div>
      </section>

      <section className="process section-pad">
        <div className="process-heading reveal"><span className="eyebrow">05 / The process</span><h2>From first frame<br />to <i>final impact.</i></h2></div>
        <div className="film-strip">
          {[["01","Discover","Read the room before we enter it."],["02","Direct","Find the idea only your brand can own."],["03","Produce","Shoot, design and cut at culture-speed."],["04","Amplify","Test, learn and turn sparks into momentum."]].map(([num,title,copy]) => <article className="film-frame reveal" key={num}><div className="sprockets" /><span>{num}</span><div className={`process-orb orb-${num}`} /><h3>{title}</h3><p>{copy}</p><small>TAKE {num} / CINEMOON</small></article>)}
        </div>
      </section>

      <section className="testimonials" id="insights">
        <div className="spotlight" aria-hidden="true" />
        <span className="eyebrow">06 / Critics are saying</span>
        <blockquote className="reveal"><span className="quote-mark">“</span>Cinemoon didn’t just manage our social media. They gave our brand a personality people wanted to follow.</blockquote>
        <div className="reviewer"><div><strong>Maya Rao</strong><span>Global Brand Director, Morrow</span></div><div className="stars">★★★★★</div><strong>+312% engagement</strong></div>
        <div className="review-nav"><button aria-label="Previous testimonial">←</button><span>01 / 03</span><button aria-label="Next testimonial">→</button></div>
      </section>

      <section className="final-cta">
        <div className="final-glow" aria-hidden="true"><span /></div>
        <span className="eyebrow">Your move / 07</span>
        <h2 className="reveal">Ready to put your<br />brand in the <i>spotlight?</i></h2>
        <div className="final-actions reveal"><a className="button button-light" href="mailto:hello@cinemoon.agency?subject=Let%27s%20start%20a%20project">Start a project <span>↗</span></a><a href="mailto:hello@cinemoon.agency">hello@cinemoon.agency</a></div>
      </section>

      <footer>
        <div className="footer-top"><a className="footer-wordmark" href="#top">CINEM<span className="footer-moon">O</span>ON</a><p>Great brands deserve<br />their moment.</p></div>
        <div className="footer-grid"><div><span>Social</span><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a><a href="#">YouTube ↗</a><a href="#">Behance ↗</a></div><div><span>Explore</span><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="mailto:hello@cinemoon.agency">Contact</a></div><div><span>Find us</span><p>London · Mumbai<br />Working worldwide</p><a href="mailto:hello@cinemoon.agency">hello@cinemoon.agency</a></div></div>
        <div className="footer-bottom"><span>© 2026 CINEMOON</span><span>MAKE YOUR MOMENT ✦</span><a href="#top">Back to orbit ↑</a></div>
      </footer>

      <div className={`case-cursor ${caseCursor.show ? "show" : ""}`} style={{ left: caseCursor.x, top: caseCursor.y }}>View<br />case study ↗</div>
    </main>
  );
}
