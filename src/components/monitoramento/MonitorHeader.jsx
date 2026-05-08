import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MonitorHeader = () => {
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        return `${day}/${month}/${year}`;
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <header className="monitor-header mt-4">
            <div className="header-left">
                <h1>Monitor de Alertas</h1>
                <p>Monitoramento ambiental em tempo real</p>
            </div>

            <div className="header-right">
                <div className="time-box">
                    <span className="date">{formatDate(time)}</span>
                    -
                    <span className="hour">{formatTime(time)}</span>
                </div>

                <div className="status-indicator">
                    <span className="pulse-dot"></span>
                    <span className="status-text">Sistema Online</span>
                </div>

                <Link to="/" className="btn-voltar">
                    Voltar
                </Link>
            </div>
        </header>
    );
};

export default MonitorHeader;