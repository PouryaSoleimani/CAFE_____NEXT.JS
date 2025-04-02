import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios'
import toast from 'react-hot-toast';
type Inputs = { email: string }


//  COMPONENT =====================================================================================================================================================
const FooterForm = () => {


    const schema = yup.object().shape({ email: yup.string().email().required(), }).required();
    const { register, handleSubmit, formState: { errors }, resetField } = useForm<Inputs>({ resolver: yupResolver(schema), })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios.post("http://localhost:4000/newsLetterUsers", { data })
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