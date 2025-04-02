import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import ReservationTemplate from '@/components/templates/HomePage/ReservationTemplate'
import React from 'react'

const ReservationPage = () => {
    return (
        <>
            <PageHeaderComponent route="RESERVATION PAGE" />
            <ReservationTemplate />
        </>
    )
}

export default ReservationPage