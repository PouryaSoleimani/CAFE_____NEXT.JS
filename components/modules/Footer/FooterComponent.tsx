import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

const FooterComponent = () => {
    return (
        <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
            <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Get In Touch</h4>
                    <p className="flex items-center"><span className="fa fa-map-marker-alt mr-2 "><FaMapMarkerAlt /></span> 123 Street, New York, USA</p>
                    <p className="flex items-center"><span className="fa fa-phone-alt mr-2 "><FaPhone /></span> +012 345 67890</p>
                    <p className="m-0 flex items-center"><span className="fa fa-envelope mr-2 "><FaEnvelope /></span> info@example.com</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4 mt-1 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Follow Us</h4>
                    <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                    <div className="d-flex justify-content-start">
                        <Link href="/"><FaTwitter className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
                        <Link href="/"><FaFacebookSquare className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
                        <Link href="/"><FaLinkedin className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
                        <Link href="/"><FaSquareInstagram className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4  mt-1 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Open Hours</h4>
                    <div>
                        <h6 className="text-white text-uppercase">Monday - Friday</h6>
                        <p>8.00 AM - 8.00 PM</p>
                        <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
                        <p>2.00 PM - 8.00 PM</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4  mt-1 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Newsletter</h4>
                    <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                    <div className="w-100">
                        <div className="input-group">
                            <input type="text" className="form-control border-light" style={{ padding: "25px" }} placeholder="Your Email" />
                            <div className="input-group-append">
                                <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{ borderColor: " rgba(256, 256, 256, .1) !important" }}>
                <p className="mb-2 text-white">Copyright &amp;copy; <Link className="font-weight-bold" href="/">Domain</Link> . All Rights Reserved</p>
            </div>
        </div >
    )
}

export default FooterComponent