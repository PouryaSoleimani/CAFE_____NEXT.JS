import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import FooterForm from './FooterForm'
import FooterCopyRight from './FooterCopyRight'
import { ArrowUp } from 'lucide-react'

const FooterComponent = () => {
    function scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
            <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">

                {/* GET IN TOUCH */}
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Get In Touch</h4>
                    <p className="flex items-center"><span className="fa fa-map-marker-alt mr-2 "><FaMapMarkerAlt className='text-red-900 w-5 h-5' /></span> 123 Street, New York, USA</p>
                    <p className="flex items-center"><span className="fa fa-phone-alt mr-2 "><FaPhone className='text-blue-900 w-4 h-4' /></span> +012 345 67890</p>
                    <p className="m-0 flex items-center"><span className="fa fa-envelope mr-2 "><FaEnvelope className='text-green-900' /></span> info@example.com</p>
                </div>
                {/* FOLLOW US */}
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4 mt-1 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Follow Us</h4>
                    <p>Follow us on different Social Medias to keep in touch </p>
                    <div className="d-flex justify-content-start">
                        <Link href="/"><FaTwitter className="w-12 h-12 mx-2  hover:-translate-y-2 duration-200 text-blue-900" /> </Link>
                        <Link href="/"><FaFacebookSquare className="w-12 h-12 mx-2  hover:-translate-y-2 duration-200 text-sky-900" /> </Link>
                        <Link href="/"><FaLinkedin className="w-12 h-12 mx-2  hover:-translate-y-2 duration-200 text-slate-700" /> </Link>
                        <Link href="/"><FaSquareInstagram className="w-12 h-12 mx-2  hover:-translate-y-2 duration-200 text-violet-900" /> </Link>
                    </div>
                </div>
                {/* OPEN HOURS */}
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4  mt-1 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Open Hours</h4>
                    <div>
                        <h4 className="text-white text-uppercase font-bold">Monday - Friday</h4>
                        <p className='text-zinc-400 tracking-widest'>8.00 AM - 8.00 PM</p>
                        <h4 className="text-white text-uppercase font-bold">Saturday - Sunday</h4>
                        <p className='text-zinc-400 tracking-widest'>2.00 PM - 8.00 PM</p>
                    </div>
                </div>
                {/* NEWSLETTER */}
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-white text-uppercase mb-4  mt-1 bg-zinc-600/20 w-fit p-2 rounded-sm" style={{ letterSpacing: "3px" }}>Newsletter</h4>
                    <p>Join Our Newsletter to Get Our News and Offers</p>
                    <FooterForm />
                </div>
                <div className='flex items-center justify-end w-full my-0 p-0'>
                    <button className='bg-[#da9f5b] w-16 h-16 flex items-center justify-center hover:bg-amber-950 duration-300 ease-initial' onClick={scrollTop} style={{ borderRadius: "5px" }} >
                        <ArrowUp />
                    </button>
                </div>
            </div>
            <FooterCopyRight />
        </div >
    )
}

export default FooterComponent