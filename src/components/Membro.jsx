import { motion } from "framer-motion";

const Team = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const members = [
        {
            id: 1,
            name: "Nome do Membro",
            role: "Full Stack Developer & Hardware Eng.",
            img: "/images/misael.jpg"
        },
        {
            id: 1,
            name: "Nome do Membro",
            role: "Full Stack Developer & Hardware Eng.",
            img: "/images/fulano.jpg"
        },
        {
            id: 1,
            name: "Nome do Membro",
            role: "Full Stack Developer & Hardware Eng.",
            img: "/images/fulano.jpg"
        },
        {
            id: 1,
            name: "Nome do Membro",
            role: "Full Stack Developer & Hardware Eng.",
            img: "/images/fulano.jpg",
        },
    ];

    return (
        <div id="Equipe" className='container-fluid pt-5 pb-3'>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center"
                >
                    <h5 className="section-title ff-secondary text-center text-warning fw-normal">
                        Membros da Equipe
                    </h5>
                    <h1 className="mb-5">Quem Desenvolve o Robôbi</h1>
                </motion.div>

                <div className="row justify-content-center">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="col-lg-3 col-md-6 mb-4"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={itemVariants}
                        >
                            <div className="card-wrapper">
                                <div className="border-animation"></div> 
                                <div className="team-item text-center rounded overflow-hidden shadow">
                                    <div className="ratio ratio-1x1 rounded-circle overflow-hidden m-4 mx-auto" style={{ width: '80%' }}>
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="img-fluid object-fit-cover"
                                            src={member.img}
                                            alt={member.name}
                                        />
                                    </div>
                                    <div className="p-4 bg-white">
                                        <h5 className="mb-0">{member.name}</h5>
                                        <small>{member.role}</small>
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

export default Team;