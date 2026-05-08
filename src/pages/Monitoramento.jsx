import MonitorNav from '../components/monitoramento/MonitorNav.jsx';
import MonitorHeader from '../components/monitoramento/MonitorHeader.jsx';
import MonitorStatCard from '../components/monitoramento/MonitorStatCard.jsx';
import RecentAlerts from '../components/monitoramento/RecentAlerts.jsx';
import MonitorFinal from '../components/monitoramento/MonitorFinal.jsx';

function Monitoramento() {
    return (
        <div className='monitor-page-wrapper min-vh-custom'>
            <MonitorNav />
            <div className="flex-grow-1 d-flex flex-column"> 
                <MonitorHeader />
                
                <div className="container-fluid px-md-5 mt-4"> 
                    <MonitorStatCard />
                    <RecentAlerts />
                </div>
            </div>
            <MonitorFinal />
        </div>
    )
}

export default Monitoramento;