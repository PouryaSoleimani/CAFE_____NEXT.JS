import ReservationFormComponent from '@/components/modules/ReservationForm/ReservationFormComponent'
import ReservationInfosComponent from '@/components/modules/ReservationForm/ReservationInfosComponent'
import React from 'react'

const ReservationTemplate = () => {
    return (
        <div className="container-fluid my-5">
            <div className="container">
                <div className="reservation position-relative overlay-top overlay-bottom">
                    <div className="row align-items-center">
                        {/* LEFT */}
                        <ReservationInfosComponent />
                        {/* RIGHT */}
                        <ReservationFormComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationTemplate