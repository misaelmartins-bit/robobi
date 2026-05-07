import { motion } from "framer-motion";

const About = () => {

    const zoomVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

 
    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
        }
    };

    return (
        <div id="Sobre" className='container-fluid py-5'>
            <div className='container'>
                <div className='row g-5 align-items-center'>
            
                    <div className='col-lg-6'>
                        <div className='row g-3'>
                           
                            <div className="col-6">
                                <motion.img
                                    className='img-fluid rounded w-100 shadow'
                                    style={{ aspectRatio: '16/15', objectFit: 'cover' }}
                                    src="robobi/images/robobinafloresta.png"
                                    alt="Robôbi na floresta"
                                />
                            </div>

                           
                            <div className="col-6" style={{ paddingTop: '40px' }}>
                                <motion.img
                                    variants={zoomVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ delay: 0.2 }}
                                    className='img-fluid rounded w-100 shadow'
                                    style={{
                                        aspectRatio: '16/15',
                                        objectFit: 'cover'
                                    }}
                                    src="robobi/images/SensorRobo.png"
                                    alt="Sensores do Robôbi"
                                />
                            </div>

                     
                            <div className='col-6'>
                                <motion.img
                                    className='img-fluid rounded w-100 shadow'
                                    style={{ aspectRatio: '16/15', objectFit: 'cover', marginTop: '-20px' }} 
                                    src="robobi/images/desenvolvimentoRo.png"
                                    alt="Desenvolvimento do projeto"
                                />
                            </div>

                           
                            <div className='col-6' style={{ paddingTop: '20px' }}>
                                <motion.img
                                    variants={zoomVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ delay: 0.4 }}
                                    className='img-fluid rounded w-100 shadow'
                                    style={{
                                        aspectRatio: '16/15',
                                        objectFit: 'cover'
                                    }}
                                    src="robobi/images/sistemaSolarR.png"
                                    alt="Sistema de energia solar"
                                />
                            </div>
                        </div>
                    </div>

                 
                    <motion.div
                        className='col-lg-6'
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h5 className='section-title ff-secondary text-start text-success fw-normal'>Sobre o Projeto</h5>
                        <h1 className='mb-4'>Conheça o <i className='fa fa-robot text-success me-2'></i>Robôbi</h1>
                        <p className='mb-4'>
                            O <strong>Robôbi</strong> é uma iniciativa inovadora voltada para a proteção do ecossistema amazônico.
                            Construído com foco em sustentabilidade, ele utiliza hardware de ponta para monitorar áreas de risco,
                            garantindo que a tecnologia trabalhe a favor da natureza.
                        </p>
                        <p className='mb-4'>
                            Equipado com inteligência artificial, o robô é capaz de diferenciar sons naturais da floresta de
                            atividades ilegais, como o uso de motosserras. Através de sensores de gás e fumaça, ele atua como
                            uma sentinela incansável contra queimadas e poluição.
                        </p>

                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className='d-flex align-items-center border-start border-5 border-success px-3'>
                                    <h1 className='flex-shrink-0 display-6 fw-bold text-success mb-0'>100%</h1>
                                    <div className="ps-4">
                                        <p className='mb-0'>Energia</p>
                                        <h6 className='text-uppercase mb-0 fw-bold'>Sustentável</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-6'>
                                <div className='d-flex align-items-center border-start border-5 border-success px-3'>
                                    <h1 className='flex-shrink-0 display-6 fw-bold text-success mb-0'>24h</h1>
                                    <div className="ps-4">
                                        <p className='mb-0'>Monitoramento</p>
                                        <h6 className='text-uppercase mb-0 fw-bold'>Em tempo real</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#Serviços"
                            className='btn btn-success py-3 px-5 mt-2'
                        >
                            Monitorar Agora
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;