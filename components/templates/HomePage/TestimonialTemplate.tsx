import Image from 'next/image'
import React from 'react'

const TestimonialTemplate = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item">
                        <div className="d-flex align-items-center mb-3">
                            <Image className="/img-fluid" src="/img/testimonial-1.jpg" alt="pic" width={100} height={100} />
                            <div className="ml-3">
                                <h4>Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                    <div className="testimonial-item">
                        <div className="d-flex align-items-center mb-3">
                            <Image className="/img-fluid" src="/img/testimonial-2.jpg" alt="pic" width={100} height={100} />
                            <div className="ml-3">
                                <h4>Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                    <div className="testimonial-item">
                        <div className="d-flex align-items-center mb-3">
                            <Image className="/img-fluid" src="/img/testimonial-3.jpg" alt="pic" width={100} height={100} />
                            <div className="ml-3">
                                <h4>Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                    <div className="testimonial-item">
                        <div className="d-flex align-items-center mb-3">
                            <Image className="/img-fluid" src="/img/testimonial-4.jpg" alt="pic" width={100} height={100} />
                            <div className="ml-3">
                                <h4>Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialTemplate