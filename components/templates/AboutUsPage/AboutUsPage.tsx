// ^ ABOUT US PAGE ================================================================================================================================================================================
import React from 'react'
import AboutUsTemplate from '../HomePage/AboutUsTemplate'
import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'



// COMPONENT ====================================================================================================================================================================================
const AboutUsPage = () => {

    return (
        <>
            <PageHeaderComponent route={"ABOUT US PAGE"} />
            <AboutUsTemplate />
        </>
    )
}

export default AboutUsPage