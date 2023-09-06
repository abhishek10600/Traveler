import { useParams } from 'react-router-dom';
import { React, useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Articles = () => {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState([]);
  const { userInfo } = useContext(UserContext);
  const { postID } = useParams();
  useEffect(() => {
    const getPostById = async () => {
      const response = await fetch(`http://localhost:4000/api/posts/post/${postID}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-type": "application/json" }
      })
      const data = await response.json();
      if (data.success === true) {
        setPostDetails(data.result);
      }
    }
    getPostById();
  },[])
  const deletePost = async(postID) => {
    const response = await fetch(`http://localhost:4000/api/posts/deletePost/${postID}`, {
      method:"DELETE",
      credentials:"include",
      headers:{"Content-type":"application/json"}
    })
    const data = await response.json();
    if(data.success === true){
      alert(data.message);
      navigate("/");
    }
  }
  return (
    <>
      <Navbar />
      {postDetails.map((post) => <>
        <img src={`http://localhost:4000/uploads/${post.image}`} alt="banner" className=" w-full h-[600px]" />
        <div className="flex py-4 my-4 mx-36 gap-[800px]">
          <h1 className="text-6xl font-bold">{post.title}</h1>
          {!userInfo[0] && (<></>)}
          {userInfo[0] && userInfo[0].ID === post.userID && (
            <>
              <button className="bg-red-600 px-10 hover:bg-red-900 transition duration-150 ease-out hover:ease-in hover:text-white" onClick={() => deletePost(post.postID)}>Delete</button>
            </>
          )}
        </div>
        <div className=" px-36 text-justify leading-8">
          <p>{post.description}</p>
        </div>
        <h1 className="px-36 py-4">By: <span className="font-bold">Abhishek Sharma</span></h1>
      </>)}

      <Footer />
    </>
  )
}

export default Articles