import ServiceItemCardComponent from '@/components/modules/ServiceItem/ServiceItemCardComponent'
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
                    <ServiceItemCardComponent imageSRC={"/img/service-1.jpg"} iconName={FaTruck} serviceTitle={"Fastest Door Delivery"} />
                    <ServiceItemCardComponent imageSRC={"/img/service-2.jpg"} iconName={FaCoffee} serviceTitle={"Fresh Coffee Beans"} />
                    <ServiceItemCardComponent imageSRC={"/img/service-3.jpg"} iconName={FaAward} serviceTitle={"Best Quality Coffee"} />
                    <ServiceItemCardComponent imageSRC={"/img/service-4.jpg"} iconName={RiCalendarScheduleFill} serviceTitle={"Online Table Booking"} />
                </div>
            </div>
        </div>
    )
}

export default ServicesTemplate