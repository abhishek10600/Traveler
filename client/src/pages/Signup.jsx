import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {Link, useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const registerUser = async(ev)=>{
    ev.preventDefault();
    if(password === cpassword){
      const response = await fetch("http://localhost:4000/api/users/registerUser", {
        method:"POST",
        body:JSON.stringify({name,email,password}),
        credentials:"include",
        headers:{"Content-type":"application/json"}
      })
      const data = await response.json();
      if(data.success === true){
        alert(data.message);
        navigate("/login");
      }else{
        alert(data.message);
      }
    }else{
      alert("Password did not match");
    }
  }
  return (
    <>
        <Navbar/>
        <div className="w-full h-[661px] flex justify-center items-center">
            <div className="bg-[#060047] w-[900px] h-[550px]">
                <h1 className="bg-[#FF5F9E] text-center py-4 font-bold text-2xl text-[#060047]">Create Your Account</h1>
                <form className="flex items-center flex-col" onSubmit={registerUser}>
                    <input type='text' placeholder='Enter your name' className='w-[880px] py-4 mt-8 px-2' value={name} onChange={(ev)=> setName(ev.target.value)}/>
                    <input type='email' placeholder='Enter your email' className='w-[880px] py-4 mt-8 px-2' value={email} onChange={(ev)=> setEmail(ev.target.value)}/>
                    <input type='password' placeholder='Create your password' className='w-[880px] py-4 mt-8 px-2' value={password} onChange={(ev)=> setPassword(ev.target.value)}/>
                    <input type='password' placeholder='Confirm your password' className='w-[880px] py-4 mt-8 px-2' value={cpassword} onChange={(ev)=> setCPassword(ev.target.value)}/>
                    <button className="bg-[#FF5F9E] w-[880px] py-4 mt-8 duration-500 hover:bg-green-500">Sign Up</button>
                    <Link to="/login" className="text-white mt-2">Already have an account?</Link>
                </form>

            </div>

        </div>
    </>
  )
}

export default Signup