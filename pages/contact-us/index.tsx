import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import ContactUsDetails from '@/components/templates/ContactUsPage/ContactUsDetails'
import React from 'react'

const ContactUsPage = () => {
    return (
        <>
            <PageHeaderComponent route={"CONTACT US PAGE"} />
            <ContactUsDetails />
        </>
    )
}

export default ContactUsPage