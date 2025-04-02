import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

type Inputs = { name: string, email: string, time: string, person: string, }

// COMPONENT =========================================================================================================================================
const ReservationFormComponent = () => {

    const schema = yup
        .object()
        .shape({ name: yup.string().required(), email: yup.string().email().required(), time: yup.number().min(8).max(23).required(), person: yup.string().required() })
        .required();


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs | any>({ resolver: yupResolver(schema), });

    const onSubmit: SubmitHandler<Inputs | any> = (data) => {
        axios.post("http://localhost:4000/reservations", data)
            .then(data => {
                toast.success(`Dear ${data.data.name} ,Your Reservation Submitted Successfully for  Today at ${data.data.time} O'Clock and It's Available for ${data.data.person} People`, { style: { fontSize: "12px", border: "6px solid darkgreen", width: "40rem" }, duration: 4000, removeDelay: 2000, })
                reset()
            }).catch(err => {
                console.info("%c FETCH ERROR", "color:red", err)
                toast.error("Unknown Error Occured , Please Try Again")
            })
    }

    return (
        <div className="col-lg-6">
            <div className="text-center p-5" style={{ background: "rgba(51, 33, 29, .8)" }}>
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5  flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" className="w-full bg-black border-primary p-4 text-zinc-200" placeholder="Name" {...register('name')} />
                        {errors.name && <span className='text-white bg-red-500/30 px-2 py-1 my-2 w-full'>Invalid Value</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="w-full bg-black border-primary p-4 text-zinc-200" placeholder="Email"  {...register('email')} />
                        {errors.email && <span className='text-white bg-red-500/30 px-2 py-1 my-2 w-full'>Invalid Value</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="w-full bg-black border-primary p-4 text-zinc-200 datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" {...register("time")} />
                        {errors.time && <span className='text-white bg-red-500/30 px-2 py-1 my-2 w-full'>Time Must be Between 8 and 23</span>}
                    </div>

                    <div className="form-group bg-black">
                        <select className="w-full bg-black/80 border-primary px-4 text-zinc-200" style={{ height: "49px" }} {...register("person")}>
                            <option defaultValue={0}> Choose People Quantity</option>
                            <option value="1">1 Person </option>
                            <option value="2">2 People </option>
                            <option value="3">3 People </option>
                            <option value="3">4 People </option>
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