import React from 'react'

const FooterForm = () => {
    return (
        <form className="w-100">
            <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: "25px" }} placeholder="Your Email" />
                <div className="input-group-append">
                    <button className="btn btn-primary font-weight-bold px-3">JOIN</button>
                </div>
            </div>
        </form>
    )
}

export default FooterForm