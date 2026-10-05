import '../styles/cards.css';

function MetricCard({ title, value, unit, status, trend, children }) {
  return (
    <article className={`metric-card ${status || ''}`}>
      <div className="card-header">
        <h3>{title}</h3>
        {status && <span className={`status-badge ${status}`}>{status}</span>}
      </div>
      <div className="metric-display">
        <div className="metric-value">{value}</div>
        {unit && <div className="metric-unit">{unit}</div>}
      </div>
      {trend && <div className={`trend ${trend > 0 ? 'up' : 'down'}`}>{trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%</div>}
      {children}
    </article>
  );
}

export default MetricCard;
