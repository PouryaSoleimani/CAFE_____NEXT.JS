//^ OFFER TEMPLATE ==========================================================================================================================================
import React from 'react'

const OfferTemplate = () => {
    return (
        <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
            <div className="container py-5">
                <h1 className="display-3 text-primary mt-3">50% OFF</h1>
                <h1 className="text-white mb-3">Sunday Special Offer</h1>
                <h4 className="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
                <form className="form-inline justify-content-center mb-4">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Your Email" style={{ height: "60px" }} />
                        <div className="input-group-append">
                            <button className="btn btn-primary font-weight-bold px-4" type="submit">JOIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OfferTemplate