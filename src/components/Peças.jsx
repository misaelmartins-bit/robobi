import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const [activeTab, setActiveTab] = useState('Processamento');

    const menuData = {  
        Sensores: [
            { name: "Sensor de Gás (MQ)", price: "Analógico", img: "robobi/images/SensordeGás(MQ).jpg", desc: "Detecta fumaça e gases inflamáveis, essencial para prevenção de queimadas." },
            { name: "Sensor de Som/Microfone", price: "Digital", img: "robobi/images/SensorSomMicrofone.png", desc: "Monitoramento acústico para identificar sons de motosserras ou disparos." },
            { name: "Sensor Infravermelho", price: "Digital", img: "robobi/images/Sensorinfravermelho.jpg", desc: "Utilizado para detecção de obstáculos ou presença de calor." }
        ],
        Processamento: [
            { name: "ESP32-CAM", price: "Dual-Core", img: "robobi/images/esp32cam.jpg", desc: "Módulo com câmera integrada para reconhecimento visual e streaming de vídeo." },
            { name: "ESP32 DevKit V1", price: "WiFi/BT", img: "robobi/images/esp32Noraml.jpg", desc: "Unidade central de processamento secundária para controle de sensores e lógica." },
            { name: "Protoboards (x2)", price: "830 Pontos", img: "robobi/images/Protoboards2.webp", desc: "Placas de ensaio para prototipagem rápida das conexões do Robôbi." },
            { name: "Bateria Li-ion", price: "3.7V - 4.2V", img: "robobi/images/BateriaLi-ion.webp", desc: "Fonte de energia recarregável para garantir a autonomia do robô em campo." }
        ],
        Energia: [
            { name: "Mini Painel Solar Fotovoltaico", price: "5V - 6V", img: "robobi/images/PainelSolarFotovoltaico.webp", desc: "Responsável pelo sistema de carregamento sustentável das baterias." },
            { name: "Módulo TP4056", price: "USB", img: "robobi/images/MóduloTP4056.webp", desc: "Controlador de carga para proteção e gerenciamento da bateria de lítio." },
            { name: "Step-Down/Up Converter", price: "Ajustável", img: "robobi/images/Step-DownUpConverter.jpg", desc: "Regula a tensão para alimentar os componentes com segurança." },
            { name: "Jumpers Coloridos", price: "M/F - M/M", img: "robobi/images/JumpersColoridos.jpg", desc: "Cabos para interconexão de todos os módulos e sensores." }
        ]
    };

    return (
        <div id="Menu" className="container-fluid py-5">
            <div className="container">
                <motion.div
                    className="text-center"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h5 className="section-title ff-secondary text-center text-warning fw-normal">Tecnologia Embarcada</h5>
                    <h1 className="mb-5">Ficha Técnica de Hardware</h1>
                </motion.div>

                <motion.div
                    className="tab-class text-center"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5 flex-nowrap w-100">
                        {[        
                            { label: 'Sensores', icon: 'fa-satellite-dish' },
                            { label: 'Processamento', icon: 'fa-microchip' },
                            { label: 'Energia', icon: 'fa-solar-panel' }
                        ].map((tab, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    onClick={() => setActiveTab(tab.label)}
                                    className={`btn d-flex align-items-center text-start mx-1 mx-md-3 pb-3 border-0 bg-transparent nav-tab-custom ${activeTab === tab.label ? 'border-bottom border-warning border-3' : ''}`}
                                >
                                    <i className={`fa ${tab.icon} fa-2x icon-tab ${activeTab === tab.label ? 'text-warning' : 'text-secondary'}`}></i>
                                    <div className="ps-2 ps-md-3 text-container">
                                        <small className="text-body d-none d-sm-block">Módulo</small>
                                        <h6 className={`${activeTab === tab.label ? 'text-warning' : 'text-black'} mt-n1 mb-0 fw-bold label-tab`}>{tab.label}</h6>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="tab-content">
                        <div className="row g-4">
                            <AnimatePresence mode="wait">
                                {menuData[activeTab].map((item, index) => (
                                    <motion.div
                                        key={`${activeTab}-${index}`}
                                        className="col-lg-6"
                                        custom={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src={item.img} className="flex-shrink-0 img-fluid rounded border p-1 bg-white" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt={item.name} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>{item.name}</span>
                                                    <span className="text-warning small">{item.price}</span>
                                                </h5>
                                                <small className="fst-italic text-muted">{item.desc}</small>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Menu;