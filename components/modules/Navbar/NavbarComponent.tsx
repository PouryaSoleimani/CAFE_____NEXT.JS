import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import 'animate.css';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="container-fluid p-0 nav-bar fixed top-0 left-0 w-full z-50 bg-[rgb(0,0,0)]">
            <div className="bg-overlay"></div>
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <Link href="/" className="navbar-brand px-lg-4 m-0 flex">
                    <h1 className="m-0 display-4 text-uppercase text-white hover:text-[#da9f5b] animate__animated  animate__fadeInUp">Next-Coffee</h1>
                </Link>
                <button type="button" className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-toggler-icon">
                        <GiHamburgerMenu className="w-6 h-6 m-auto translate-y-1" />
                    </span>
                </button>
                <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <div className="navbar-nav ml-auto p-3 animate__animated  animate__fadeInUp animate__delay-1s">
                        <Link href="/" className="nav-item nav-link active">Home</Link>
                        <Link href="/about-us" className="nav-item nav-link">About</Link>
                        <Link href="/services" className="nav-item nav-link">Services</Link>
                        <Link href="/menu" className="nav-item nav-link">Menu</Link>
                        <Link href="/reservation" className="nav-item nav-link">Reservation</Link>
                        <Link href="/testimonial" className="nav-item nav-link">Testimonial</Link>
                        <Link href="/contact-us" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent