import '../styles/panel.css';

function Panel({ title, subtitle, children, action, fullWidth, noPadding }) {
  return (
    <section className={`panel ${fullWidth ? 'full-width' : ''} ${noPadding ? 'no-padding' : ''}`}>
      {(title || action) && (
        <div className="panel-header">
          <div>
            <h2>{title}</h2>
            {subtitle && <p className="panel-subtitle">{subtitle}</p>}
          </div>
          {action && <div className="panel-action">{action}</div>}
        </div>
      )}
      <div className="panel-body">{children}</div>
    </section>
  );
}

export default Panel;
