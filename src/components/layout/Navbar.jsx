import Hero from '../home/Hero.jsx';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';


const MotionLink = motion(Link);

const Navbar = () => {

    const navListVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    const closeMenu = (e, id) => {
        e.preventDefault();
        const menu = document.getElementById('offcanvasDarkNavbar');
        if (menu) {
            const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(menu);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            } else {
                const closeBtn = menu.querySelector('.btn-close');
                closeBtn?.click();
            }
        }

        const targetSection = document.querySelector(id);
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    };

    return (
        <div id='Home' className="container-fluid position-relative p-0 min-vh-custom d-flex flex-column">

            <motion.nav
                className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-3 sticky-top"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <a href="#" className="navbar-brand p-0">
                    <img className='me-3' src="/robobi/images/logoRobob-branca.png" alt="Robobi" style={{ height: "40px" }} />
                </a>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <motion.div
                        className="navbar-nav ms-auto py-0 pe-4 align-items-center"
                        variants={navListVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { name: "Home", href: "#Home" },
                            { name: "Foco do Projeto", href: "#Foco" },
                            { name: "Sobre o Projeto", href: "#Sobre" },
                            { name: "Hardware & Peças", href: "#Menu" },
                            { name: "Equipe", href: "#Equipe" },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="nav-item nav-link nav-link-custom mx-2"
                                variants={navItemVariants}
                                whileHover={{ scale: 1.1, color: "#ffc107" }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>

                    <MotionLink
                        to="/monitoramento" 
                        className="btn btn-warning py-2 px-4"
                        style={{ textDecoration: 'none' }} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fa fa-desktop me-2"></i> Monitoramento
                    </MotionLink>
                </div>


                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">

                    <span className="fa fa-bars"></span>B

                </button>
            </motion.nav>


            <div className="offcanvas offcanvas-end text-bg-dark d-lg-none"
                tabIndex="-1"
                id="offcanvasDarkNavbar"
                style={{ backgroundColor: "#1a1a1a", width: "100%", zIndex: 1050 }}>


                <div className="offcanvas-header border-bottom border-secondary py-4 px-4">
                    <img src="/robobi/images/logoRobob-branca.png" alt="Robobi" style={{ height: "30px" }} />
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body d-flex flex-column px-4">
                    <ul className="navbar-nav justify-content-start flex-grow-1">
                        {[
                            { name: "Home", href: "#Home" },
                            { name: "Foco do Projeto", href: "#Foco" },
                            { name: "Sobre o Projeto", href: "#Sobre" },
                            { name: "Hardware & Peças", href: "#Menu" },
                            { name: "Equipe", href: "#Equipe" },
                        ].map((item, index) => (
                            <li className="nav-item mb-3" key={index}>
                                <a className="nav-link fs-4" href={item.href} onClick={(e) => closeMenu(e, item.href)}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pb-5">
                        <MotionLink
                            to="/monitoramento" 
                            className="btn btn-warning py-3 px-4 w-100 fs-5 fw-bold"
                            style={{ textDecoration: 'none' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="fa fa-desktop me-2"></i> Monitoramento
                        </MotionLink>
                    </div>
                </div>
            </div>

            <div className="flex-grow-1 hero-bg-custom d-flex align-items-center">
                <Hero />
            </div>
        </div>
    );
};

export default Navbar;