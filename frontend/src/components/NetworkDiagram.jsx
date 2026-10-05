import '../styles/network.css';
import StatusIndicator from './StatusIndicator';

function NetworkDiagram({ vlans, activeVlan, onVlanSelect }) {
  return (
    <div className="network-container">
      <div className="vlan-matrix">
        {vlans.slice(0, 8).map(([id, name, subnet, desc]) => (
          <button
            key={`${id}-${name}`}
            className={`vlan-card ${activeVlan === id ? 'active' : ''}`}
            onClick={() => onVlanSelect && onVlanSelect(id)}
          >
            <div className="vlan-id">{id}</div>
            <div className="vlan-name">{name}</div>
            <small>{subnet}</small>
            <p>{desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default NetworkDiagram;
