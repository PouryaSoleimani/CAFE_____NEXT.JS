import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutUsTemplate from '../HomePage/AboutUsTemplate'
import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import { useRouter } from 'next/router'

const AboutUsPage = () => {

    return (
        <>
            <PageHeaderComponent route={"ABOUT US PAGE"} />
            <AboutUsTemplate />
        </>
    )
}

export default AboutUsPage