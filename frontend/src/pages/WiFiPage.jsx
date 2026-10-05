import Header from '../components/Header';
import Panel from '../components/Panel';
import WiFiStatus from '../components/WiFiStatus';
import '../styles/pages.css';

function WiFiPage({ data }) {
  if (!data.wifi) return <div className="loading">Loading...</div>;

  const { wifi, units } = data;
  const apList = wifi.apList || [];

  return (
    <div className="page-container">
      <Header
        title="WiFi Controller (Ruijie EWEB)"
        subtitle="Access Point 802.11ax Managed"
        stats={[
          { value: wifi.total, label: 'Total AP' },
          { value: wifi.online, label: 'Online' },
          { value: wifi.terminals.T1, label: 'Terminal 1' }
        ]}
      />

      <Panel title="Status Access Point" fullWidth>
        <WiFiStatus wifi={wifi} apList={apList} />
      </Panel>
    </div>
  );
}

export default WiFiPage;
