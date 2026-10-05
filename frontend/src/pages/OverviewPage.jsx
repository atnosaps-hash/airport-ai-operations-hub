import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Panel from '../components/Panel';
import MetricCard from '../components/MetricCard';
import StatusIndicator from '../components/StatusIndicator';
import SystemsOverview from '../components/SystemsOverview';
import AuditLog from '../components/AuditLog';
import ApprovalQueue from '../components/ApprovalQueue';
import '../styles/pages.css';

function OverviewPage({ data }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data.dashboard) return <div className="loading">Loading...</div>;

  const { summary, systems, platform, auditEvents } = data.dashboard;
  const stats = [
    { value: `${summary.onlineAgents}/${summary.totalAgents}`, label: 'Agent Online' },
    { value: summary.openIncidents, label: 'Insiden' },
    { value: summary.pendingApprovals, label: 'Persetujuan' }
  ];

  return (
    <div className="page-container">
      <Header
        title="Pusat Operasi Bandara"
        subtitle="Terminal 1 & 2 · AI dan agent orchestrator berjalan di jaringan lokal"
        stats={stats}
      />

      <section className="metrics-row">
        <MetricCard title="Agent Online" value={summary.onlineAgents} unit={`dari ${summary.totalAgents}`} status="ok" />
        <MetricCard title="Insiden Terbuka" value={summary.openIncidents} status={summary.openIncidents > 0 ? 'warning' : 'ok'} />
        <MetricCard title="Persetujuan" value={summary.pendingApprovals} unit="pending" status="warning" />
        <MetricCard title="Jaringan" value="LAN" unit="offline-capable" status="ok" />
      </section>

      <section className="page-row">
        <Panel title="Keselamatan & Lingkungan" subtitle="Fire, panic, temperature monitoring">
          <div className="safety-grid">
            <div className="safety-item danger">
              <StatusIndicator status="danger" size="lg" />
              <strong>FIRE-001</strong>
              <p>Alarm kebakaran zona T1-B</p>
              <small>Isolasi berdiri sendiri</small>
            </div>
            <div className="safety-item warning">
              <StatusIndicator status="warning" size="lg" />
              <strong>PANIC-001</strong>
              <p>Emergency button 24/24</p>
              <small>Status baterai baik</small>
            </div>
            <div className="safety-item warning">
              <StatusIndicator status="warning" size="lg" />
              <strong>TEMP-001</strong>
              <p>Ruang server 31°C</p>
              <small>Tren naik, monitor</small>
            </div>
            <div className="safety-item success">
              <StatusIndicator status="success" size="lg" />
              <strong>WIFI-001</strong>
              <p>WiFi AP controller</p>
              <small>{data.wifi.online}/{data.wifi.total} online</small>
            </div>
          </div>
        </Panel>

        <Panel title="Ketersediaan Sistem" subtitle="Uptime monitoring 24/7">
          <SystemsOverview systems={systems} />
        </Panel>
      </section>

      <section className="page-row two-cols">
        <Panel title="Audit & Aktivitas" subtitle="Log real-time dari semua agent">
          <AuditLog events={auditEvents} />
        </Panel>

        <Panel title="Persetujuan" subtitle="Aksi berisiko menunggu supervisor">
          <ApprovalQueue approvals={data.approvals} />
        </Panel>
      </section>

      <section className="page-row two-cols">
        <Panel title="Platform Services" subtitle="Dependensi infrastructure">
          <div className="platform-list">
            {platform.map(([name, status]) => (
              <div key={name} className={`platform-item status-${status}`}>
                <StatusIndicator status={status} size="sm" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Informasi Sistem" subtitle="Waktu real-time">
          <div className="system-info">
            <div className="info-block">
              <strong>Waktu sekarang:</strong>
              <div className="time-display">{now.toLocaleTimeString('id-ID')}</div>
            </div>
            <div className="info-block">
              <strong>LAN Status:</strong>
              <div className="status-badge success">Connected</div>
            </div>
            <div className="info-block">
              <strong>LLM Mode:</strong>
              <div className="status-badge success">Lokal</div>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}

export default OverviewPage;
