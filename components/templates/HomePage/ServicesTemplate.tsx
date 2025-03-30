import Image from 'next/image'
import React from 'react'
import { FaAward, FaCoffee, FaTruck } from 'react-icons/fa'
import { RiCalendarScheduleFill } from 'react-icons/ri'

const ServicesTemplate = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
                    <h1 className="display-4">Fresh &amp;Organic Beans</h1>
                </div>
                <div className="row mx-auto">

                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <div className="img-fluid mb-3 mb-sm-0">
                                    <Image src="/img/service-1.jpg" alt="pic" width={300} height={300} />
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <h4><span className="fa fa-truck service-icon"><FaTruck /></span> Fastest Door Delivery</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <Image className="/img-fluid mb-3 mb-sm-0" src="/img/service-2.jpg" alt="pic" width={300} height={300} />
                            </div>
                            <div className="col-sm-7">
                                <h4><span className="fa fa-coffee service-icon"><FaCoffee /></span> Fresh Coffee Beans</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <Image className="/img-fluid mb-3 mb-sm-0" src="/img/service-3.jpg" alt="pic" width={300} height={300} />
                            </div>
                            <div className="col-sm-7">
                                <h4><span className="fa fa-award service-icon"><FaAward /></span> Best Quality Coffee</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <Image className="/img-fluid mb-3 mb-sm-0" src="/img/service-4.jpg" alt="pic" width={300} height={300} />
                            </div>
                            <div className="col-sm-7">
                                <h4><span className="fa fa-table service-icon"><RiCalendarScheduleFill /></span> Online Table Booking</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesTemplate