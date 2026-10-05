import Header from '../components/Header';
import Panel from '../components/Panel';
import AgentRegistry from '../components/AgentRegistry';
import '../styles/pages.css';

function AgentsPage({ data }) {
  if (!data.agents) return <div className="loading">Loading...</div>;

  const onlineAgents = data.agents.filter(a => a[2] === 'ok').length;

  return (
    <div className="page-container">
      <Header
        title="Agent & Operasi Bandara"
        subtitle="Registri dan orkestrasi 20 agent autonomous"
        stats={[
          { value: data.agents.length, label: 'Total Agent' },
          { value: onlineAgents, label: 'Online' },
          { value: data.agents.filter(a => a[2] === 'warn').length, label: 'Warning' }
        ]}
      />

      <Panel title="Registri Agent" subtitle="Setiap agent bertanggung jawab atas subsistem tertentu" fullWidth>
        <AgentRegistry agents={data.agents} />
      </Panel>
    </div>
  );
}

export default AgentsPage;
