import Header from '../components/Header';
import Panel from '../components/Panel';
import MaintenanceSchedule from '../components/MaintenanceSchedule';
import '../styles/pages.css';

function MaintenancePage({ data }) {
  if (!data.maintenance) return <div className="loading">Loading...</div>;

  const { plans, workOrders } = data.maintenance;
  const overdueCount = plans.filter(p => p[5] < 0).length;
  const openWOs = workOrders.filter(w => w.s < 3).length;

  return (
    <div className="page-container">
      <Header
        title="Maintenance & Work Order"
        subtitle="Preventif dan korektif management"
        stats={[
          { value: plans.length, label: 'PM Schedule' },
          { value: overdueCount, label: 'Overdue' },
          { value: openWOs, label: 'WO Terbuka' }
        ]}
      />

      <Panel title="Jadwal Maintenance" fullWidth>
        <MaintenanceSchedule plans={plans} workOrders={workOrders} />
      </Panel>
    </div>
  );
}

export default MaintenancePage;
