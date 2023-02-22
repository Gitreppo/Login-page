import { useFormik } from 'formik';
import React, { useState } from 'react';
import './Login.css';
import 'primeicons/primeicons.css';



export default function Login(){

const[update,setUpdate] = useState(true);

const Toggle=()=>{
    setUpdate(update?false:true);

}

const validate =(values)=>{
        const errors ={};

        if(!values.email){
            errors.email="*Required"
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email="*Invalid email"
        }
        if(!values.password){
            errors.password="*Required"
        }
        else if(! /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(values.password)){
            errors.password="*Provide strong password"

        }

        return errors;
}


const formik =useFormik({
    initialValues:{
        email:"",
        password:"",

    },
    validate,
    onSubmit:(resetform)=>{
        alert(`successfully logged in`);
       
    }
})

    return(
        <div className='login'>
            <h1>LogIn</h1>
            <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder='Email' name='email' value={formik.values.email}   onChange={formik.handleChange} onBlur={formik.handleBlur}></input>

            {formik.touched.email && formik.errors.email?<span>{formik.errors.email}</span>:null}

            <input type={update? "password":"text"} placeholder='password' name='password' value={formik.values.password}   onChange={formik.handleChange} onBlur={formik.handleBlur}></input>

            {update===false? <button type="button" className='btn'onClick={Toggle}><span className="pi pi-eye"></span></button>:<button className='btn'type="button"  onClick={Toggle}><span className="pi pi-eye-slash"></span></button>}

            {formik.touched.password && formik.errors.password?<span>{formik.errors.password}</span>:null}
            <input type="submit"></input>
            </form>

        </div>
    )
}