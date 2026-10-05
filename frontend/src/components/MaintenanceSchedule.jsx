import '../styles/maintenance.css';

function MaintenanceSchedule({ plans, workOrders }) {
  const statusLabels = ['Dibuat', 'Ditugaskan', 'Dikerjakan', 'Selesai'];

  return (
    <div className="maintenance-container">
      <div className="maintenance-section">
        <h3>Jadwal Preventif (PM)</h3>
        <div className="pm-grid">
          {plans.map(([id, task, sys, freq, days, due]) => (
            <div key={id} className={`pm-card ${due < 0 ? 'overdue' : due <= 7 ? 'warning' : ''}`}>
              <div className="pm-header">
                <strong>{id}</strong>
                <span className={`due-badge ${due < 0 ? 'danger' : 'neutral'}`}>
                  {due < 0 ? 'Terlambat' : due + ' hari'}
                </span>
              </div>
              <p>{task}</p>
              <small>{sys} · {freq}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="maintenance-section">
        <h3>Work Order Korektif</h3>
        <table className="wo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Masalah</th>
              <th>Prioritas</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {workOrders.map(wo => (
              <tr key={wo.id} className={`priority-${wo.pri}`}>
                <td><strong>{wo.id}</strong></td>
                <td>{wo.p}</td>
                <td><span className={`pri-badge ${wo.pri}`}>{wo.pri}</span></td>
                <td>
                  <div className="status-progress">
                    {statusLabels[wo.s]}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MaintenanceSchedule;
