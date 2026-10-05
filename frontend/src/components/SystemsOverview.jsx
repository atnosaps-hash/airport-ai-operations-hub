import '../styles/systems.css';
import StatusIndicator from './StatusIndicator';

function SystemsOverview({ systems }) {
  return (
    <div className="systems-container">
      {systems.map(system => (
        <div key={system.name} className="system-row">
          <div className="system-label">
            <StatusIndicator status={system.status} size="sm" />
            <strong>{system.name}</strong>
          </div>
          <div className="system-bar">
            <div
              className={`bar-fill status-${system.status}`}
              style={{ width: `${system.availability}%` }}
              title={`${system.availability}%`}
            />
          </div>
          <div className="system-value">{system.availability}%</div>
        </div>
      ))}
    </div>
  );
}

export default SystemsOverview;
