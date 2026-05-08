import React from 'react';


const SystemStatus = () => {
   
    const statusItems = [
        { id: 1, label: 'Câmeras', status: 'Online', color: '#2ecc71' },
        { id: 2, label: 'Sensores de Fumaça', status: 'Online', color: '#2ecc71' },
        { id: 3, label: 'Sensores de Áudio', status: 'Online', color: '#2ecc71' },
        { id: 4, label: 'Conexão', status: 'Estável', color: '#2ecc71' }
    ];

    return (
        <div className="system-status-card">
            <h3>Status do Sistema</h3>
            <ul className="status-list">
                {statusItems.map((item) => (
                    <li key={item.id} className="status-item">
                        <span className="status-label">
                           
                            {item.label === 'Câmeras' && <i className="fas fa-camera"></i>}
                            {item.label === 'Sensores de Fumaça' && <i className="fas fa-wind"></i>}
                            {item.label === 'Sensores de Áudio' && <i className="fas fa-volume-up"></i>}
                            {item.label === 'Conexão' && <i className="fas fa-wifi"></i>}
                            {item.label}
                        </span>
                        <span className="status-value" style={{ color: item.color }}>
                            {item.status}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SystemStatus;