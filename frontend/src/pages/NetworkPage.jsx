import { useState } from 'react';
import Header from '../components/Header';
import Panel from '../components/Panel';
import NetworkDiagram from '../components/NetworkDiagram';
import '../styles/pages.css';

function NetworkPage({ data }) {
  const [activeVlan, setActiveVlan] = useState(null);

  if (!data.network) return <div className="loading">Loading...</div>;

  const { vlans, rules } = data.network;
  const selectedVlan = vlans.find(v => v[0] === activeVlan);

  return (
    <div className="page-container">
      <Header
        title="Jaringan & VLAN"
        subtitle="Topologi, firewall rules, dan segregasi jaringan"
        stats={[
          { value: vlans.length, label: 'VLAN Aktif' },
          { value: Object.keys(rules).length, label: 'Aturan Firewall' }
        ]}
      />

      <Panel title="Matriks VLAN" subtitle="Arsitektur layer 3" fullWidth>
        <NetworkDiagram vlans={vlans} activeVlan={activeVlan} onVlanSelect={setActiveVlan} />
      </Panel>

      {selectedVlan && (
        <Panel title={`VLAN ${selectedVlan[0]} - ${selectedVlan[1]}`}>
          <div className="vlan-details">
            <div className="detail-row">
              <strong>Subnet:</strong> <code>{selectedVlan[2]}</code>
            </div>
            <div className="detail-row">
              <strong>Deskripsi:</strong> {selectedVlan[3]}
            </div>
          </div>
        </Panel>
      )}

      <Panel title="Aturan Firewall" subtitle="Izin komunikasi antar VLAN">
        <table className="rules-table">
          <thead>
            <tr>
              <th>Dari → Ke</th>
              <th>Layanan & Port</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rules).map(([key, rule]) => (
              <tr key={key}>
                <td><code>{key}</code></td>
                <td>{rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}

export default NetworkPage;
