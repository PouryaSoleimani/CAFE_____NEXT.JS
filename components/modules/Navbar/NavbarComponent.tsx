import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import 'animate.css';
import { Search } from 'lucide-react';
import { useRouter } from 'next/router';
import NavbarDropDown from './NavbarDropDown';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState("home")
    const [search, setSearch] = useState("")
    const router = useRouter()

    function searchHandlerClick() {
        router.push(`/search?query=${search}`);
        setSearch("")
    }

    function searchHandlerEnter(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key == "Enter") {
            router.push(`/search?query=${search}`)
            setSearch("")
        } else {
            return
        }
    }

    // RETURN _______________________________________________________________________________________________________________________________________________________________________________
    return (
        <div className="container-fluid p-0 nav-bar fixed top-0 left-0 w-full z-50 bg-[rgb(0,0,0)] gap-y-5">
            <div className="bg-overlay"></div>
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3 gap-y-5">
                <Link href="/" className="navbar-brand px-lg-4 m-0 flex">
                    <h1 className="m-0 display-4 text-uppercase text-white hover:text-[#da9f5b] animate__animated  animate__fadeInUp hover:scale-105 duration-300 ease-in">Next-Coffee</h1>
                </Link>
                {/* SEARCH INPUT */}
                <div className='w-full lg:px-10 hidden 2xl:flex w-full lg:w-1/2 xl:w-1/3'>
                    <input type="search" name="" id="navbarSearchInput" className='bg-zinc-900 p-2 w-full outline-none border-none focus:outline-none text-white text-xl' value={search} onChange={event => setSearch(event.target.value)} onKeyDown={event => searchHandlerEnter(event)} />
                    <button className='bg-[#da9f5b] px-2 py-2 hover:bg-[#ffd29f] '><Search className='text-zinc-600' onClick={searchHandlerClick} /></button>
                </div>
                <button type="button" className="navbar-toggler relative flex items-center justify-end w-full" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-toggler-icon absolute right-1 translate-y-[-20%]">
                        <GiHamburgerMenu className="w-6 h-6 m-auto translate-y-1" />
                    </span>
                </button>
                <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <div className="navbar-nav ml-auto p-3 ">
                        <Link href="/" className={`nav-item nav-link ${activeRoute == "home" ? "active" : ""}`} onClick={() => setActiveRoute("home")}>Home</Link>
                        <Link href="/about-us" className={`nav-item nav-link ${activeRoute == "about" ? "active" : ""}`} onClick={() => setActiveRoute("about")}>About</Link>
                        <Link href="/services" className={`nav-item nav-link ${activeRoute == "services" ? "active" : ""}`} onClick={() => setActiveRoute("services")}>Services</Link>
                        <Link href="/menu" className={`nav-item nav-link ${activeRoute == "menu" ? "active" : ""}`} onClick={() => setActiveRoute("menu")}>Menu</Link>
                        <Link href="/reservation" className={`nav-item nav-link ${activeRoute == "reservation" ? "active" : ""}`} onClick={() => setActiveRoute("reservation")}>Reservation</Link>
                        <Link href="/testimonial" className={`nav-item nav-link ${activeRoute == "testimonial" ? "active" : ""}`} onClick={() => setActiveRoute("testimonial")}>Testimonial</Link>
                        <Link href="/contact-us" className={`nav-item nav-link ${activeRoute == "contact" ? "active" : ""}`} onClick={() => setActiveRoute("contact")}>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent