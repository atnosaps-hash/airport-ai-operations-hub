import '../styles/audit.css';

function AuditLog({ events, maxRows = 10 }) {
  return (
    <div className="audit-log">
      <table className="audit-table">
        <thead>
          <tr>
            <th>Waktu</th>
            <th>Agent</th>
            <th>Aktivitas</th>
          </tr>
        </thead>
        <tbody>
          {events.slice(0, maxRows).map((event, idx) => (
            <tr key={idx} className="audit-row">
              <td className="time">
                <time>{event[0]}</time>
              </td>
              <td className="agent">
                <code>{event[1]}</code>
              </td>
              <td className="activity">{event[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuditLog;
