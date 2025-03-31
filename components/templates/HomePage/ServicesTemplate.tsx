import ServiceItemCardComponent from '@/components/modules/ServiceItem/ServiceItemCardComponent'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { FaAward, FaCoffee, FaTruck } from 'react-icons/fa'
import { RiCalendarScheduleFill } from 'react-icons/ri'

interface ServicesTemplateProps { data: [{ serviceID: number, serviceTitle: string, description: string, imgSRC: string, iconName: React.ElementType }] }
type singleServiceType = { serviceID: number, serviceTitle: string, description: string, imgSRC: string, iconName: React.ElementType }

// COMPONENT ===================================================================================================================================================================
const ServicesTemplate: React.FC<ServicesTemplateProps> = ({ data }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
                    <h1 className="display-4">Fresh &amp;Organic Beans</h1>
                </div>
                <div className="row mx-auto">
                    {data?.map((item: singleServiceType) => (
                        <ServiceItemCardComponent key={item.serviceID} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    const data = ctx.params?.data

    return {
        props: { data },
    }
}


export default ServicesTemplate