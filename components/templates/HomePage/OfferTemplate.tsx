//^ OFFER TEMPLATE ==========================================================================================================================================
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios'
import toast from 'react-hot-toast';
type Inputs = { email: string }


//  COMPONENT =============================================================================================================================================
const OfferTemplate = () => {

    const schema = yup.object().shape({ email: yup.string().email().required(), }).required();
    const { register, handleSubmit, formState: { errors }, resetField } = useForm<Inputs>({ resolver: yupResolver(schema), })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios.post("https://cafe-server-5u3w.onrender.com/newsLetterUsers", { data })
            .then(response => {
                console.info(response);
                toast.success('Email Succesfully Signed Up !')
                resetField("email")
            })
            .catch(err => {
                console.info("ERROR ==>", err);
                toast.error("Unknown Error")
            })
    }

    return (
        <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
            <div className="container py-5">
                <h1 className="display-3 text-primary mt-3">50% OFF</h1>
                <h1 className="text-white mb-3">Sunday Special Offer</h1>
                <h4 className="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
                <form className="form-inline justify-content-center mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Your Email" style={{ height: "60px" }} {...register("email")} />
                        {errors.email && <span className='bg-red-300 text-red-900 px-3 py-0.5 font-semibold absolute -bottom-7 w-full text-start'>⚠ Email is not Valid ... </span>}
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

