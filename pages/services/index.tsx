//^ SERVICES PAGE  ===============================================================================================================================================================
import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import ServicesTemplate from '@/components/templates/HomePage/ServicesTemplate'
import { GetStaticProps } from 'next'
import React from 'react'
interface ServicesPageProps { data: [{ serviceID: number, serviceTitle: string, description: string, imgSRC: string, iconName: React.ElementType }], }


// COMPONENT ==================================================================================================================================================================
const ServicesPage: React.FC<ServicesPageProps> = ({ data }) => {
    return (
        <>
            <PageHeaderComponent route="OUR SERVICES" />
            <ServicesTemplate data={data} />
        </>
    )
}


// GET STATIC PROPS ==================================================================================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {

    const request = await fetch("https://cafe-server-5u3w.onrender.com/services")
    const data = await request.json()

    return {
        props: { data: data, },
        revalidate: 43200
    }
}
export default ServicesPage