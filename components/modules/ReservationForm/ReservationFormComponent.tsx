import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = { name: string, age: string }

// COMPONENT =========================================================================================================================================
const ReservationFormComponent = () => {

    const schema = yup
        .object()
        .shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            date: yup.date().required()
        })
        .required();


    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs | any>({ resolver: yupResolver(schema), });

    const onSubmit: SubmitHandler<Inputs | any> = (data) => console.log(data)

    return (
        <div className="col-lg-6">
            <div className="text-center p-5" style={{ background: "rgba(51, 33, 29, .8)" }}>
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" className="form-control bg-transparent border-primary p-4" placeholder="Name" {...register('name')} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control bg-transparent border-primary p-4" placeholder="Email"  {...register('email')} />
                    </div>
                    <div className="form-group">
                        <div className="date" id="date" data-target-input="nearest">
                            <input type="text" className="form-control bg-transparent border-primary p-4 datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" {...register("date")} />
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