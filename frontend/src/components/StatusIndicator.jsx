import '../styles/indicators.css';

function StatusIndicator({ status, label, size = 'md', animated = true }) {
  return (
    <div className={`status-indicator ${size} ${animated ? 'animated' : ''} status-${status}`}>
      <span className="dot" />
      {label && <span className="label">{label}</span>}
    </div>
  );
}

export default StatusIndicator;
