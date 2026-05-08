import React from 'react'

const Final = () => {
    return (
        <div>
            <div id='Contatos' className="container-fluid bg-dark text-light footer mt-5 pt-5">
                <div className="container py-5">
                    <div className="row g-5">
                  
                        <div className="col-lg-3 col-md-6">
                            <h4 className='section-title ff-secondary text-start text-warning fw-normal mb-4'>O Projeto</h4>
                            <a href="#Sobre" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Sobre o Robôbi</a>
                            <a href="#Foco" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Foco do Projeto</a>
                            <a href="#Menu" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Hardware & Peças</a>
                            <a href="https://github.com/" target="_blank" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Documentação no GitHub</a>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className='section-title ff-secondary text-start text-warning fw-normal mb-4'>Contato</h4>
                            <p className='mb-2'><i className='fa fa-map-marker-alt me-3'></i>Manaus, Amazonas - Brasil</p>
                            <p className='mb-2'><i className='fa fa-envelope me-3'></i>projeto@robobi.com.br</p>

                            <div className="d-flex pt-2">
                                <a href='https://linkedin.com/' target="_blank" className="btn btn-outline-light btn-social me-2"><i className="fab fa-linkedin-in"></i></a>
                                <a href='https://github.com/' target="_blank" className="btn btn-outline-light btn-social me-2"><i className="fab fa-github"></i></a>
                                <a href='' className="btn btn-outline-light btn-social me-2"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>

                       
                        <div className="col-lg-6 col-md-6">
                            <h4 className='section-title ff-secondary text-start text-warning fw-normal mb-4'>Nossa Missão</h4>
                            <p>Utilizando tecnologia de ponta e hardware acessível como o ESP32 para proteger a biodiversidade da floresta Amazônica através do monitoramento em tempo real.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright border-top py-4">
                        <div className='row'>
                            <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
                                &copy; 2026 <span className='text-warning'>Robôbi</span>. Tecnologia a favor da natureza.
                            </div>
                            <div className='col-md-6 text-center text-md-end'>
                                Desenvolvido por <a className='text-decoration-none text-warning fw-bold' href=''>AmazonCode</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Final