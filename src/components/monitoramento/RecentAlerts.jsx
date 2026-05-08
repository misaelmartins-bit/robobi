import React from 'react';


const RecentAlerts = () => {
    const alerts = [
        { id: 1, type: 'Chamas / Fogo', local: 'Beco Santa Cruz', bairro: 'Bairro São Jorge', risk: 'Baixo', riskClass: 'risk-low', time: '17:55', icon: '🔥' },
        { id: 2, type: 'Sons Suspeitos', local: 'Av. Brigadeiro', bairro: 'Jorge Teixeira', risk: 'Alto', riskClass: 'risk-high', time: '17:38', icon: '⚠️' },
        { id: 3, type: 'Fumaça', local: 'Av. Presidente Kennedy', bairro: 'Morro da Liberdade', risk: 'Moderado', riskClass: 'risk-mid', time: '17:11', icon: '💨' }
    ];

    return (
        <div className="recent-alerts-container mt-4">
        
            <div className="recent-alerts-header">
                <span className="title-line"></span>
                <h2 className="section-title">ALERTAS RECENTES</h2>
                <span className="title-line"></span>
            </div>

            <div className="table-responsive">
                <table className="table alerts-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Local</th>
                            <th>Nível de Risco</th>
                            <th>Data/Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map((alert) => (
                            <tr key={alert.id} className="alert-row">
                                <td className="alert-type">
                                    <img src={alert.iconPath} alt="" className="mini-icon" /> {alert.type}
                                </td>
                                <td>
                                    <div className="location-main">{alert.local}</div>
                                    <div className="location-sub">{alert.bairro}</div>
                                </td>
                                <td className={`risk-text ${alert.riskClass}`}>{alert.risk}</td>
                                <td className="alert-time">{alert.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentAlerts;