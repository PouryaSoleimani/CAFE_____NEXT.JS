import Image from 'next/image'
import React from 'react'

const MenuTemplate = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h4 className="text-[#da9f5b] text-uppercase tracking-widest">Menu &amp; Pricing</h4>
                    <h1 className="display-4 text-white font-bold">Competitive Pricing</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5 text-[#da9f5b] font-bold">Hot Coffee</h1>
                        <div className="row align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-1.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2">$5</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4 className="text-white font-bold">Black Coffee</h4>
                                <p className="m-0 text-gray-400">
                                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-2.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2">$7</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4 className="text-white font-bold">Chocolate Coffee</h4>
                                <p className="m-0 text-gray-400">
                                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-3.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2">$9</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4 className="text-white font-bold">Coffee With Milk</h4>
                                <p className="m-0 text-gray-400">
                                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5 text-[#da9f5b] font-bold">Cold Coffee</h1>
                        <div className="row align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-1.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2">$5</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4 className="text-white font-bold">Black Coffee</h4>
                                <p className="m-0 text-gray-400">
                                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-2.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2">$7</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4 className="text-white font-bold">Chocolate Coffee</h4>
                                <p className="m-0 text-gray-400">
                                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="col-4 col-sm-3">
                                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-3.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2">$9</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4 className="text-white font-bold">Coffee With Milk</h4>
                                <p className="m-0 text-gray-400">
                                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuTemplate