import { motion } from "framer-motion";

const MonitorNav = () => {
    return (
        <motion.nav 
            className="navbar navbar-dark bg-warning px-4 py-2" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="container-fluid">
                <img 
                    src="/robobi/images/logoRobob-branca.png" 
                    alt="Robobi" 
                    style={{ height: "40px" }} 
                />
            </div>
        </motion.nav>
    );
};

export default MonitorNav;