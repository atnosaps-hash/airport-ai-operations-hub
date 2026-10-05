import '../styles/wifi.css';

function WiFiStatus({ wifi, apList }) {
  const onlineCount = apList.filter(ap => ap[6] === 'Online').length;

  return (
    <div className="wifi-container">
      <div className="wifi-stats">
        <div className="stat-box">
          <div className="stat-number">{wifi.online}/{wifi.total}</div>
          <div className="stat-label">AP Online</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{wifi.terminals.T1}</div>
          <div className="stat-label">Terminal 1</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{wifi.terminals.T2}</div>
          <div className="stat-label">Terminal 2</div>
        </div>
      </div>
      <div className="ap-list">
        {apList.slice(0, 10).map((ap, idx) => (
          <div key={idx} className={`ap-item status-${ap[6] === 'Online' ? 'online' : 'offline'}`}>
            <div className="ap-name">{ap[0]}</div>
            <div className="ap-details">
              <span>{ap[3]}</span> · <span>{ap[5]}</span>
            </div>
            <span className={`status-badge ${ap[6] === 'Online' ? 'success' : 'danger'}`}>
              {ap[6]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WiFiStatus;
