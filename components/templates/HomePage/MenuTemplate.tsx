import Image from 'next/image'
import React from 'react'

const MenuTemplate = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Menu &amp; Pricing</h4>
                    <h1 className="display-4">Competitive Pricing</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5">Hot Coffee</h1>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-1.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price">$5</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>Black Coffee</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-2.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price">$7</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>Chocolete Coffee</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-3.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price">$9</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>Coffee With Milk</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-1.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price">$5</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>Black Coffee</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-2.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price">$7</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>Chocolete Coffee</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-3.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price">$9</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>Coffee With Milk</h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuTemplate 