import '../styles/agent.css';
import StatusIndicator from './StatusIndicator';

function AgentRegistry({ agents, onSelect }) {
  const getActionTags = (actionStr) => {
    if (!actionStr) return [];
    return actionStr.split(',').map(a => {
      const [name, tier] = a.split(':');
      return { name: name.trim(), tier };
    });
  };

  return (
    <div className="agent-grid">
      {agents.map(([id, name, status, desc, actions]) => {
        const tags = getActionTags(actions);
        return (
          <button
            key={id}
            className={`agent-card status-${status}`}
            onClick={() => onSelect && onSelect(id)}
          >
            <div className="agent-header">
              <div>
                <h4>{name}</h4>
                <code>{id}</code>
              </div>
              <StatusIndicator status={status} size="sm" />
            </div>
            <p className="agent-desc">{desc}</p>
            <div className="action-tags">
              {tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className={`tag tier-${tag.tier}`}>
                  {tag.name.split('_').join('-')}
                </span>
              ))}
              {tags.length > 3 && <span className="tag more">+{tags.length - 3}</span>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default AgentRegistry;
