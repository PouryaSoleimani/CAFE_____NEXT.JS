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
            date: yup.date().required(),
            time: yup.number().required(),
            person: yup.string().required()
        })
        .required();


    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs | any>({ resolver: yupResolver(schema), });

    const onSubmit: SubmitHandler<Inputs | any> = (data) => console.info(data)

    return (
        <div className="col-lg-6">
            <div className="text-center p-5" style={{ background: "rgba(51, 33, 29, .8)" }}>
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5  flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" className="form-control bg-transparent border-primary p-4 text-zinc-200" placeholder="Name" {...register('name')} />
                        {errors.name && <span className='text-white bg-red-500/30 px-2 py-1 my-2 w-full'>Invalid Value</span>}
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control bg-transparent border-primary p-4 text-zinc-200" placeholder="Email"  {...register('email')} />
                        {errors.email && <span className='text-white bg-red-500/30 px-2 py-1 my-2 w-full'>Invalid Value</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control bg-transparent border-primary p-4 text-zinc-200 datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" {...register("date")} />
                        {errors.date && <span className='text-white bg-red-500/30 px-2 py-1 my-2 w-full'>Invalid Value</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control bg-transparent border-primary p-4 text-zinc-200 datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" {...register("time")} />
                        {errors.time && <span className='text-white bg-red-500/30 px-2 py-1 my-2 w-full'>Invalid Value</span>}
                    </div>

                    <div className="form-group">
                        <select className="custom-select bg-transparent border-primary px-4 text-zinc-200" style={{ height: "49px" }} {...register("person")}>
                            <option defaultValue={0}> Person</option>
                            <option value="1">Person 1</option>
                            <option value="2">Person 2</option>
                            <option value="3">Person 3</option>
                            <option value="3">Person 4</option>
                        </select>

                    </div>

                    <div className='mt-5'>
                        <button className="btn btn-primary btn-block font-weight-bold py-3" type="submit">Book Now</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ReservationFormComponent