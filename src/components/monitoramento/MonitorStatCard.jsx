import React from 'react';
import SystemStatus from "./SystemStatus";

const MonitorStatCard = () => {
    const cards = [
        {
            icon: "/robobi/images/fireee.png",
            title: "Chamas / Fogo",
            value: "0",
            label: "Alerta(s) hoje"
        },
        {
            icon: "/robobi/images/fumaca-icon.png",
            title: "Fumaça",
            value: "3",
            label: "Alerta(s) hoje"
        },
        {
            icon: "/robobi/images/som-icon.png",
            title: "Sons Suspeitos",
            value: "8",
            label: "Alerta(s) hoje"
        },
    ];

    return (
        <div className="row g-4"> 
          
            {cards.map((card, index) => (
                <div className="col-md-3" key={index}> 
                    <div className="stat-card-item">
                        <div className="stat-header">
                            <div className="stat-icon-wrapper">
                                <img src={card.icon} alt={card.title} className="stat-icon" />
                            </div>
                            <div className="stat-title-group">
                                <h3 style={{ fontSize: "25px" }}>{card.title}</h3>
                                <div className="stat-value">{card.value}</div>
                                <p className="stat-label">{card.label}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

       
            <div className="col-md-3">
                <SystemStatus />
            </div>
        </div>
    );
};

export default MonitorStatCard;