import '../styles/approval.css';

function ApprovalQueue({ approvals, onApprove, onReject }) {
  return (
    <div className="approval-queue">
      {approvals.length === 0 ? (
        <div className="empty-state">✓ Tidak ada permintaan menunggu persetujuan</div>
      ) : (
        approvals.map((item, idx) => (
          <article key={idx} className={`approval-card status-${item.st === 0 ? 'pending' : item.st === 1 ? 'approved' : 'rejected'}`}>
            <div className="approval-title">
              <h4>{item.t}</h4>
              <span className="approval-status">
                {item.st === 0 ? '⏳ Pending' : item.st === 1 ? '✓ Disetujui' : '✗ Ditolak'}
              </span>
            </div>
            <div className="approval-details">
              <small>Agent: {item.ag}</small>
              <small>Pemohon: {item.by}</small>
            </div>
            {item.st === 0 && (
              <div className="approval-actions">
                <button className="btn btn-approve" onClick={() => onApprove(idx)}>
                  Setujui
                </button>
                <button className="btn btn-reject" onClick={() => onReject(idx)}>
                  Tolak
                </button>
              </div>
            )}
          </article>
        ))
      )}
    </div>
  );
}

export default ApprovalQueue;
