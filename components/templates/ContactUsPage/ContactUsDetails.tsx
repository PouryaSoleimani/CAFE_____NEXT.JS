import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactUsDetails = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">

                {/* TITLE */}
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Contact Us</h4>
                    <h1 className="display-4">Feel Free To Contact</h1>
                </div>

                {/* INFORMATION ROW */}
                <div className="row px-3 pb-2 mb-4 flex items-center justify-center gap-x-5">
                    <div className="col-sm-3 text-center mb-3 bg-zinc-500/10 backdrop-blur-xs  py-4 w-fit rounded-md hover:bg-zinc-500/20 duration-300 ease-in-out">
                        <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"><FaMapMarkerAlt className='text-red-900 w-16 h-16 mx-auto mb-4' /></i>
                        <h4 className="font-weight-bold">Address</h4>
                        <p className='text-zinc-400'>123 Street, New York, USA</p>
                    </div>
                    <div className="col-sm-3 text-center mb-3  bg-zinc-500/10  backdrop-blur-xs py-4 w-fit rounded-md hover:bg-zinc-500/20 duration-300 ease-in-out">
                        <i className="fa fa-2x fa-phone-alt mb-3 text-primary"><FaPhone className='text-blue-900 w-16 h-16 mx-auto mb-4' /></i>
                        <h4 className="font-weight-bold">Phone</h4>
                        <p className='text-zinc-400'>+012 345 6789</p>
                    </div>
                    <div className="col-sm-3 text-center mb-3  bg-zinc-500/10 backdrop-blur-xs  py-4 w-fit rounded-md hover:bg-zinc-500/20 duration-300 ease-in-out">
                        <i className="far fa-2x fa-envelope mb-3 text-primary"><FaEnvelope className='text-green-900 w-16 h-16 mx-auto mb-4' /></i>
                        <h4 className="font-weight-bold">Email</h4>
                        <p className='text-zinc-400'>info@example.com</p>
                    </div>
                </div>


                <div className="row">
                    {/* IFRAME */}
                    <div className="col-md-6 pb-5">
                        <iframe style={{ width: "100%", height: "443px", border: "0" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder="0" allowFullScreen aria-hidden="false" tabIndex={0}  ></iframe>
                    </div>

                    {/* FORM */}
                    <div className="col-md-6 pb-5">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="control-group">
                                    <input type="text" className="form-control bg-transparent p-4" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control bg-transparent p-4" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control bg-transparent p-4" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control bg-transparent py-3 px-4" rows={5} id="message" placeholder="Message" required data-validation-required-message="Please enter your message"    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit" id="sendMessageButton"  >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactUsDetails;