import Header from '../components/Header';
import Panel from '../components/Panel';
import IncidentList from '../components/IncidentList';
import '../styles/pages.css';

function IncidentsPage({ data }) {
  if (!data.incidents) return <div className="loading">Loading...</div>;

  const openCount = data.incidents.filter(i => i.s < 3).length;

  return (
    <div className="page-container">
      <Header
        title="Manajemen Insiden"
        subtitle="Tracking dan penanganan semua gangguan sistem"
        stats={[
          { value: data.incidents.length, label: 'Total Insiden' },
          { value: openCount, label: 'Terbuka' },
          { value: data.incidents.filter(i => i.sev === 'High').length, label: 'Kritis' }
        ]}
      />

      <Panel title="Daftar Insiden" fullWidth>
        <IncidentList incidents={data.incidents} />
      </Panel>
    </div>
  );
}

export default IncidentsPage;
