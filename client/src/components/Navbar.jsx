import {React, useContext, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from '../Contexts/UserContext';

const Navbar = () => {
    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useContext(UserContext);
    useEffect(()=>{
        const isUserLoggedIn = async()=>{
            const response = await fetch("http://localhost:4000/api/users/profile", {
                method:"GET",
                credentials:"include",
                headers:{"Content-type":"application/json"}
            })
            const data = await response.json();
            if(data.success === true){
                setUserInfo(data.user);
            }
        }
        isUserLoggedIn();
    },[]);
    const logout = async()=>{
        const response = await fetch("http://localhost:4000/api/users/logout", {
            method:"GET",
            credentials:"include",
            headers:{"Content-type":"application/json"}
        })
        const data = await response.json();
        if(data.success === true){
            alert(data.message);
            window.location.reload();
            navigate("/login");

        }
    }
  return (
        <nav className="bg-[#060047] lg:h-[70px]">
            <ul className="lg:flex text-[#FF5F9E] lg:justify-between lg:h-[70px] lg:items-center lg:px-36">
                <div className="">
                    <li className="text-2xl font-bold"><Link to="/">The Traveller</Link></li>
                </div>
                <div className="lg:flex lg:gap-16">
                    <li className="cursor-pointer hover:text-white transition duration-150 ease-out hover:ease-in"><Link to="/">Home</Link></li>
                    {userInfo[0] && (
                        <>
                        <li className="cursor-pointer hover:text-white transition duration-150 ease-out hover:ease-in"><Link to="/createNewArticle">Create new article</Link></li>
                        <button className="cursor-pointer hover:text-white transition duration-150 ease-out hover:ease-in"><button onClick={logout}>Logout</button></button>
                        </>
                    )}
                    {!userInfo[0] && (
                        <>
                        <button className="cursor-pointer hover:text-white transition duration-150 ease-out hover:ease-in"><Link to="/login">Login</Link></button>
                        </>
                    )}
                </div>
            </ul>

        </nav>
  )
}

export default Navbar