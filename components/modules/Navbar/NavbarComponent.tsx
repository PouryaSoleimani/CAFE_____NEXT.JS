import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavbarComponent = () => {
    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3 space-between">
                <Link href="/" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"> <GiHamburgerMenu className="w-6 h-6 m-auto translate-y-1" /> </span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <Link href="/" className="nav-item nav-link active">Home</Link>
                        <Link href="/about-us" className="nav-item nav-link">About</Link>
                        <Link href="/services" className="nav-item nav-link">Services</Link>
                        <Link href="/menu" className="nav-item nav-link">Menu</Link>
                        <div className="nav-item dropdown">
                            <Link href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu text-capitalize">
                                <Link href="/reservation" className="dropdown-item">Reservation</Link>
                                <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link href="/contact-us" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent