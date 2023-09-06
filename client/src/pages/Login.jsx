import {React, useState} from 'react'
import Navbar from '../components/Navbar'
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async(ev)=>{
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/api/users/loginUser", {
      method:"POST",
      body:JSON.stringify({email, password}),
      credentials:"include",
      headers:{"Content-type":"application/json"}
    })
    const data = await response.json();
    if(data.success === true){
      alert(data.message);
      navigate("/");
    }else{
      alert(data.message);
    }
  }
  return (
    <div className="">
        <Navbar/>
        <div className="w-full h-[661px] flex justify-center items-center">
            <div className="bg-[#060047] w-[900px] h-[380px]">
                <h1 className="bg-[#FF5F9E] text-center py-4 font-bold text-2xl text-[#060047]">Welcome To The Traveller</h1>
                <form className="flex items-center flex-col" onSubmit={loginUser}>
                    <input type='email' placeholder='Enter your email' className='w-[880px] py-4 mt-8 px-2' value={email} onChange={(ev)=> setEmail(ev.target.value)}/>
                    <input type='password' placeholder='Enter your password' className='w-[880px] py-4 mt-8 px-2' value={password} onChange={(ev) => setPassword(ev.target.value)}/>
                    <button className="bg-[#FF5F9E] w-[880px] py-4 mt-8 duration-500 hover:bg-green-500">Login</button>
                    <Link to="/signup" className="text-white mt-2">Create an account?</Link>
                </form>

            </div>

        </div>
    </div>
  )
}

export default Login