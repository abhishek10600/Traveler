import React, { useEffect, useState, useContext } from 'react'
import {Link} from "react-router-dom";
import { UserContext } from '../Contexts/UserContext';

const Articles = () => {
    const [posts, setPosts] = useState([]);
    const {userInfo} = useContext(UserContext);
    useEffect(()=>{
        const getPosts = async()=>{
            const response = await fetch("http://localhost:4000/api/posts/", {
                method:"GET",
                credentials:"include",
                headers:{"Content-type":"application/json"}
            })
            const data = await response.json();
            if(data.success === true){
                setPosts(data.result);
            }
        }
        getPosts();
    },[]);
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:py-20 lg:px-32">
        {posts.length > 0 && posts.map((post) => <>
            <div className="card">
            <img src={`http://localhost:4000/uploads/${post.image}`} alt="card" className="h-[300px]"/>
            <button className="bg-[#060047] text-[#FF5F9E] lg:py-1 lg:px-2 lg:rounded-[5px] lg:ml-[317px] lg:mt-[10px] transition duration-200 ease-out hover:bg-white hover:text-black"><Link to={`/article/${post.postID}`}>Read more</Link></button>
        </div>
        </>)}
    </div>
  )
}

export default Articles