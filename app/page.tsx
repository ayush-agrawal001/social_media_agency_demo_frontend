const services = [
  { number: "01", name: "Social strategy", description: "Audience, culture and platform insight shaped into a clear plan your team can act on." },
  { number: "02", name: "Content production", description: "Films, stills and social-native stories with a consistent visual point of view." },
  { number: "03", name: "Paid social", description: "Creative testing and thoughtful media placement that turn attention into measurable growth." },
  { number: "04", name: "Influencer campaigns", description: "Creator partnerships built around credible ideas, careful casting and useful reporting." },
  { number: "05", name: "Creative direction", description: "Distinctive campaign worlds and design systems made to stay coherent across every touchpoint." },
];

const projects = [
  { index: "01", client: "Morrow Studio", title: "Wear the night", category: "Campaign · Creative direction", result: "14.8M organic views", className: "project-night" },
  { index: "02", client: "Sonic / 07", title: "A launch with gravity", category: "Strategy · Content system", result: "82K pre-orders", className: "project-orbit" },
  { index: "03", client: "Aster House", title: "Quietly unforgettable", category: "Brand world · Social launch", result: "4.9× return on spend", className: "project-aster" },
];

const process = [
  ["01", "Find the signal", "We study the category, the audience and the conversations that actually matter."],
  ["02", "Shape the idea", "Strategy and creative direction meet in one clear, ownable campaign thought."],
  ["03", "Make it move", "We produce, publish, test and refine without losing the original point of view."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cinemoon home">CINEM<span>O</span>ON</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:hello@cinemoon.agency">Start a project <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow gold-text">Independent social-first creative agency</p>
          <h1>We make brands<span>impossible to ignore.</span></h1>
          <p className="hero-intro">Thoughtful strategy, distinctive content and social campaigns designed to earn attention—and keep it.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#work">Explore our work <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="mailto:hello@cinemoon.agency">Let&apos;s work together <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="moon-ring" />
          <div className="gold-moon"><span className="crater crater-one" /><span className="crater crater-two" /><span className="crater crater-three" /></div>
          <span className="orbit-copy orbit-copy-top">Strategy / Creative / Media</span>
          <span className="orbit-copy orbit-copy-bottom">London · Mumbai · Worldwide</span>
        </div>
        <div className="hero-index" aria-hidden="true"><span>CM / 01</span><span>Scroll to discover</span></div>
      </section>

      <section className="client-strip" aria-label="Selected clients">
        <span className="eyebrow">Selected clients</span>
        <div className="client-names"><strong>MORROW</strong><strong>SONIC/07</strong><strong>ASTER HOUSE</strong><strong>NORTH &amp; CO.</strong><strong>HALO</strong></div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-label"><span className="eyebrow">01 / About</span><span className="hairline" /></div>
        <div className="intro-statement">
          <p>Built for the way people discover, share and choose brands now.</p>
          <h2>Clear thinking.<br />Beautifully expressed.<br /><em>Made to perform.</em></h2>
        </div>
        <div className="intro-grid">
          <div className="editorial-visual visual-portrait" aria-hidden="true"><span className="visual-moon" /><span className="visual-caption">Ideas with pull</span></div>
          <div className="intro-copy">
            <p>Cinemoon brings strategy, creative and media into one calm, senior team. No layers, no noise—just an idea strong enough to travel and the craft to take it everywhere.</p>
            <a className="text-link dark-link" href="#services">How we work <span aria-hidden="true">↘</span></a>
          </div>
          <div className="editorial-visual visual-detail" aria-hidden="true">
            <span className="detail-line line-one" /><span className="detail-line line-two" /><span className="detail-line line-three" /><span className="visual-caption">Culture, considered</span>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span className="eyebrow">02 / Selected work</span><a className="quiet-link" href="mailto:hello@cinemoon.agency?subject=Portfolio%20request">Request full portfolio ↗</a></div>
        <div className="work-heading"><h2>Work with<br /><em>lasting pull.</em></h2><p>Selected campaigns where a clear idea, a precise visual language and the right distribution moved the numbers that mattered.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.index}>
              <div className={`project-visual ${project.className}`}><span className="project-index">{project.index}</span><div className="project-art" aria-hidden="true" /><span className="project-result">{project.result}</span></div>
              <div className="project-meta"><div><span>{project.client}</span><h3>{project.title}</h3></div><p>{project.category}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro section-shell">
          <div className="section-label"><span className="eyebrow gold-text">03 / Services</span><span className="hairline light-line" /></div>
          <div className="services-heading"><h2>Everything a brand needs to move with confidence.</h2><p>One integrated studio from the first insight to the final report.</p></div>
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

      <section className="results section-shell" aria-labelledby="results-title">
        <div className="section-label"><span className="eyebrow">04 / Selected results</span><span className="hairline" /></div>
        <div className="results-heading"><h2 id="results-title">Attention is only useful when it creates momentum.</h2><p>Recent work across brand, content and performance.</p></div>
        <div className="metric-grid">
          <div className="metric"><strong>120M<span>+</span></strong><p>Organic views</p></div>
          <div className="metric"><strong>4.8<span>×</span></strong><p>Average paid ROAS</p></div>
          <div className="metric"><strong>300<span>+</span></strong><p>Campaigns launched</p></div>
          <div className="metric"><strong>45<span>+</span></strong><p>Brands grown</p></div>
        </div>
      </section>

      <section className="process section-shell">
        <div className="section-label"><span className="eyebrow">05 / Our process</span><span className="hairline" /></div>
        <div className="process-heading"><h2>Simple by design.<br /><em>Rigorous underneath.</em></h2><p>A direct, collaborative process that keeps decisions clear and the work moving.</p></div>
        <div className="process-grid">
          {process.map(([number, title, copy]) => <article className="process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-moon" aria-hidden="true" />
        <span className="eyebrow gold-text">A client view</span>
        <blockquote>“Cinemoon gave our brand a point of view people wanted to follow—and a campaign that delivered far beyond the brief.”</blockquote>
        <div className="testimonial-author"><span>Maya Rao</span><span>Global Brand Director, Morrow</span></div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy"><span className="eyebrow">06 / Start a conversation</span><h2>Ready to give your brand more <em>pull?</em></h2></div>
        <div className="contact-action"><p>Tell us where you are, where you want to go and what is getting in the way.</p><a className="button button-navy" href="mailto:hello@cinemoon.agency?subject=New%20project%20enquiry">hello@cinemoon.agency <span aria-hidden="true">↗</span></a></div>
      </section>

      <footer className="footer">
        <div className="footer-main"><a className="footer-wordmark" href="#top">CINEM<span>O</span>ON</a><p>Social-first creative studio.<br />London · Mumbai · Worldwide.</p></div>
        <div className="footer-links"><div><span>Explore</span><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a></div><div><span>Follow</span><span className="social-placeholder">Instagram</span><span className="social-placeholder">LinkedIn</span><span className="social-placeholder">Behance</span></div></div>
        <div className="footer-bottom"><span>© 2026 Cinemoon</span><span>Built for attention that lasts.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
