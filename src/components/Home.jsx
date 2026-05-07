import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="container-fluid py-5 hero-header">
            <div className="container py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <motion.h1
                            className="text-white fw-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Protegendo a Amazônia <br />
                            <span style={{ color: 'var(--primary-gold)' }}>com Tecnologia Inteligente</span>
                        </motion.h1>

                        <motion.p
                            className="mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            O ROBÔBI une tecnologia avançada e sustentabilidade para monitorar biomas,
                            detectando ameaças em tempo real e preservando o futuro da nossa biodiversidade.
                        </motion.p>

                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                            <motion.a
                                href="#Menu"
                                className="btn btn-warning py-3 px-5 fs-5"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.5 
                                }}
                                viewport={{ once: true }}

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ display: "inline-block" }}
                            >
                                Conheça a Tecnologia
                            </motion.a>
                        </div>
                    </div>

                    <div className="col-lg-6 text-center">
                        <motion.img
                            src="/restaurante/images/Robo.png"
                            className="img-fluid"
                            alt="Robobi Tecnologia"
                            style={{
                                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
                                width: '120%',
                                maxWidth: '400px'
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero
