import React from 'react'

const ReservationFormComponent = () => {
    return (
        <div className="col-lg-6">
            <div className="text-center p-5" style={{ background: "rgba(51, 33, 29, .8)" }}>
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5">
                    <div className="form-group">
                        <input type="text" className="form-control bg-transparent border-primary p-4" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control bg-transparent border-primary p-4" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <div className="date" id="date" data-target-input="nearest">
                            <input type="text" className="form-control bg-transparent border-primary p-4 datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="time" id="time" data-target-input="nearest">
                            <input type="text" className="form-control bg-transparent border-primary p-4 datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" />
                        </div>
                    </div>
                    <div className="form-group">
                        <select className="custom-select bg-transparent border-primary px-4" style={{ height: "49px" }}>
                            <option defaultValue={0}> Person</option>
                            <option value="1">Person 1</option>
                            <option value="2">Person 2</option>
                            <option value="3">Person 3</option>
                            <option value="3">Person 4</option>
                        </select>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-block font-weight-bold py-3" type="submit">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReservationFormComponent