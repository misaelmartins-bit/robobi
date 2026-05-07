import { motion } from "framer-motion";
import React, { useRef, useState } from 'react';


const Reservation = () => {
    // 1. Criado referência para o vídeo
    const videoRef = useRef(null);
    // 2. Estado para saber se está tocando ou não
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const slideLeftVariants = {
        hidden: { opacity: 0, x: 100 }, // Começa 100px para a direita
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1, // Efeito cascata nos campos do formulário
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <div>
            <div id="Reservation"  className="container-fluid py-5 px-0 wow fadeInUp">

                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="video" style={{ overflow: 'hidden', position: 'relative', height: '100%', minHeight: '400px' }}>
                            <video
                                ref={videoRef}
                                src={videoRes}
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {/* Container do Botão no canto */}
                            <div style={{
                                position: 'absolute',
                                bottom: '40px',
                                right: '40px',
                                zIndex: '10',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>

                                {/* O PULSO (Ondas) */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 2],
                                        opacity: [0.5, 0.3, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: '#fea116',
                                        borderRadius: '50%',
                                    }}
                                />

                                {/* Segunda camada do pulso (para ficar mais preenchido) */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.8],
                                        opacity: [0.4, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 0.5,
                                        ease: "easeOut",
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: '#fea116',
                                        borderRadius: '50%',
                                    }}
                                />

                                {/* BOTÃO PRINCIPAL */}
                                <button
                                    type="button"
                                    onClick={toggleVideo}
                                    style={{
                                        position: 'relative', // Relative aqui para ficar acima das ondas
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: '#fea116',
                                        border: 'none',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        boxShadow: '0 0 15px rgba(0,0,0,0.4)',
                                    }}
                                >
                                    <span style={{
                                        borderLeft: isPlaying ? 'none' : '20px solid #0f172b',
                                        borderTop: isPlaying ? 'none' : '12px solid transparent',
                                        borderBottom: isPlaying ? 'none' : '12px solid transparent',
                                        width: isPlaying ? '16px' : '0',
                                        height: isPlaying ? '20px' : '0',
                                        borderRight: isPlaying ? '6px solid #0f172b' : 'none',
                                        borderLeftStyle: isPlaying ? 'double' : 'solid',
                                        borderLeftWidth: isPlaying ? '6px' : '20px',
                                        display: 'block',
                                        marginLeft: isPlaying ? '0' : '5px'
                                    }}></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Lado do Formulário */}
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5">
                            <motion.h5
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                variants={slideLeftVariants}
                                custom={0}
                                className="section-title ff-secondary text-start text-warning fw-normal"
                            >
                                Reserva
                            </motion.h5>

                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                variants={slideLeftVariants}
                                custom={1}
                                className="text-white mb-4"
                            >
                                Reserve uma Mesa on-line
                            </motion.h1>

                            <form>
                                <div className="row g-3">
                                    {/* Campo Nome */}
                                    <motion.div
                                        className="col-12"
                                        variants={slideLeftVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.1 }}
                                        custom={2}
                                    >
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Seu nome" />
                                            <label htmlFor="name">Seu nome</label>
                                        </div>
                                    </motion.div>

                                    {/* Campo Email*/}
                                    <motion.div
                                        className="col-12"
                                        variants={slideLeftVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.1 }}
                                        custom={3}
                                    >
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Seu Email" />
                                            <label htmlFor="email">Seu Email</label>
                                        </div>
                                    </motion.div>

                                    {/* Campo Data */}
                                    <motion.div
                                        className="col-12"
                                        variants={slideLeftVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.1 }}
                                        custom={4}
                                    >
                                        <div className="form-floating">
                                            <input type="datetime-local" className="form-control" id="Date" placeholder="Data & Hora" />
                                            <label htmlFor="Date">Data & Hora</label>
                                        </div>
                                    </motion.div>

                                    {/* Campo Pessoas */}
                                    <motion.div
                                        className="col-12"
                                        variants={slideLeftVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.1 }}
                                        custom={5}
                                    >
                                        <div className="form-floating">
                                            <select className="form-select" id="select1">
                                                <option value="1">1 Pessoa</option>
                                                <option value="2">2 Pessoas</option>
                                                <option value="3">3 Pessoas</option>
                                            </select>
                                            <label htmlFor="select1">Quantidade de pessoas</label>
                                        </div>
                                    </motion.div>

                                    {/* Campo Mensagem*/}
                                    <motion.div
                                        className="col-12"
                                        variants={slideLeftVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.1 }}
                                        custom={6}
                                    >
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Pedido especial" id="message" style={{ height: "100px" }}></textarea>
                                            <label htmlFor="message">Pedido especial</label>
                                        </div>
                                    </motion.div>

                                    {/* Botão*/}
                                    <motion.div
                                        className="col-12"
                                        variants={slideLeftVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.1 }}
                                        custom={7}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <button className="btn btn-warning w-100 py-3" type="submit">Reserve agora</button>
                                    </motion.div>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content rounded-0 bg-dark">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title text-white" id="exampleModalLabel">Video do Restaurante</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="ratio ratio-16x9">
                                        <video
                                            src={videoRes}
                                            controls
                                            className="w-100"
                                        >
                                            Seu navegador não suporta a execução de vídeos.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Reservation
