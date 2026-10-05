import '../styles/header.css';

function Header({ title, subtitle, stats }) {
  return (
    <header className="page-header">
      <div className="header-content">
        <div>
          <h1>{title}</h1>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
        {stats && (
          <div className="header-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-chip">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
