import { useState } from 'react';
import '../styles/sidebar.css';

const navItems = [
  { id: 'overview', label: 'Ikhtisar', icon: '📊' },
  { id: 'incidents', label: 'Insiden', icon: '🚨', badge: 4 },
  { id: 'agents', label: 'Agent & Operasi', icon: '🤖' },
  { id: 'devices', label: 'Perangkat & Tools', icon: '⚙️' },
  { id: 'network', label: 'Jaringan & VLAN', icon: '🌐' },
  { id: 'power', label: 'Daya PSU & UPS', icon: '⚡' },
  { id: 'maintenance', label: 'Maintenance', icon: '🔧', badge: 2 },
  { id: 'users', label: 'Pengguna', icon: '👥' },
  { id: 'reports', label: 'Laporan', icon: '📈' }
];

function Sidebar({ activeSection, onSectionChange, clock }) {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-logo">✈️</div>
        <div className="brand-label">Airport AI Hub</div>
        <small>LAN · local ops</small>
      </div>

      <nav className="nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onSectionChange(item.id)}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="clock">{clock}</div>
        <small>API 4000 · UI 5173</small>
      </div>
    </aside>
  );
}

export default Sidebar;
