import '../styles/hero.css';

function Hero({ title, subtitle, children }) {
  return (
    <section className="hero-section">
      <div className="hero-gradient" />
      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {children && <div className="hero-action">{children}</div>}
      </div>
    </section>
  );
}

export default Hero;
