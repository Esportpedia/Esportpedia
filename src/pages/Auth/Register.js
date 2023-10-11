import { useState } from 'react'
import React from 'react'
import Layout from '../../components/Layout/Layout.js'
import  axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    const navigate = useNavigate();
    
    //from handler
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
           const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address});
           if( res && res.data.success){
            toast.success(res.data && res.data.message);
            navigate("/login");
           }
           else
            toast.error(res.success.message);
        }
         catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    };


  return (

    <Layout title='Register'>
        <div className='register'>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter your name'
                value={name} onChange={ (e) => setName(e.target.value)} required/>
            </div>

            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your Email'
                value={email} onChange={ (e) => setEmail(e.target.value)} required/>
            </div>
            
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' 
                value={password} onChange={ (e) => setPassword(e.target.value)} required/>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter your Phone Number'
                value={phone} onChange={ (e) => setPhone(e.target.value)} required/>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter your Address'
                value={address} onChange={ (e) => setAddress(e.target.value)} required/>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    </Layout>
  )
}

export default Register