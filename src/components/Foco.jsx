import { motion } from "framer-motion";
import { text } from "framer-motion/client";

const ServiceStart = () => {
  
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut"
            }
        })
    };

    const services = [
        {
            icon: "fa-bullseye",
            title: "Objetivo",
            color: "#00008B",
            text: "• Monitorar a floresta amazônica e ajudar na preservação ambiental.",
            text2: "• Detectar possíveis ameaças ao meio ambiente em tempo real."
        },
        {
            icon: "fa-robot",
            title: "Como funciona",
            color: "#00BFFF", 
            text: "• O Robôbi utiliza sensores, câmera e microfone para analisar o ambiente.",
            text2: "• Detectar possíveis ameaças ao meio ambiente em tempo real."
        },
        {
            icon: "fa-microchip",
            title: "Detecção Inteligente",
            color: "#800080", 
            text: "• Detecta sons suspeitos como motosserras, disparos e movimentações ilegais.",
            text2: "• Detectar possíveis ameaças ao meio ambiente em tempo real."
        },
        {
            icon: "fa-leaf",
            title: "Sustentabilidade",
            color: "#FF8C00",
            text: "• O projeto utiliza energia sustentável através de placa solar.",
            text2: "• Detectar possíveis ameaças ao meio ambiente em tempo real."
        },
        {
            icon: "fa-lightbulb",
            title: "Curiosidade",
            color: "#11be28", 
            text: "• O ROBÔBI une robótica, tecnologia e proteção ambiental.",
            text2: "• O projeto foi criado para simular um sistema inteligente de proteção da Amazônia."
        },
    ];

    return (
       
        <div id="Foco" className="container-fluid py-5">
            <div className="container">
               
                <div className="row g-4 justify-content-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                           
                            className="col-custom-5 col-md-4 col-sm-6"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            custom={index}
                            style={{ "--card-color": service.color }}
                        >
                            <div className="card-wrapper1 h-100" style={{ '--card-color': service.color }}>
                                <div className="border-animation1"></div>
                                <div className="service-item rounded h-100 p-4 d-flex flex-column">
                                    
                                    <div className="text-center mb-3">
                                        <i className={`fa fa-3x ${service.icon} mb-3`} style={{ color: service.color }}></i>
                                        <h5 className="fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                                            {service.title}
                                        </h5>
                                    </div>

                                    <div className="service-content mt-2">
                                        <p className="small mb-2" style={{ opacity: 0.9 }}>{service.text}</p>
                                        <p className="small mb-0" style={{ opacity: 0.9 }}>{service.text2}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceStart;