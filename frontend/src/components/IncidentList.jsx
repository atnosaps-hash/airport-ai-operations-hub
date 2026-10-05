import '../styles/incident.css';
import StatusIndicator from './StatusIndicator';

const severityMap = { High: 'danger', Medium: 'warning', Low: 'success' };
const stepsLabels = ['Terdeteksi', 'Triase', 'Ditugaskan', 'Selesai'];

function IncidentList({ incidents, onAdvance }) {
  return (
    <div className="incident-list">
      {incidents.map((incident, idx) => (
        <article key={incident.id} className={`incident-card severity-${incident.sev}`}>
          <div className="incident-header">
            <div>
              <h4>{incident.id}</h4>
              <small>{incident.t}</small>
            </div>
            <span className={`severity-badge ${severityMap[incident.sev]}`}>
              {incident.sev}
            </span>
          </div>
          <p className="incident-problem">{incident.p}</p>
          <div className="incident-meta">
            <span>🏢 {incident.sys}</span>
            <span>📍 {incident.loc}</span>
          </div>
          <div className="progress-steps">
            {stepsLabels.map((label, step) => (
              <div
                key={step}
                className={`step ${step <= incident.s ? 'completed' : ''}`}
                title={label}
              >
                <span className="step-dot" />
                <span className="step-label">{label}</span>
              </div>
            ))}
          </div>
          {incident.s < 3 && (
            <button className="btn-advance" onClick={() => onAdvance(idx)}>
              Lanjutkan →
            </button>
          )}
        </article>
      ))}
    </div>
  );
}

export default IncidentList;
