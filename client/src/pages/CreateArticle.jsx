import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const uploadPost = async(ev)=>{
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("description", description);
    data.set("file", file[0]);
    const response  = await fetch("http://localhost:4000/api/posts/createPost", {
      method:"POST",
      body:data,
      credentials:"include",
    })
    const responseData = await response.json();
    if(responseData.success === true){
      alert(responseData.message);
    }
  }
  return (
    <>
        <Navbar/>
        <h1 className="text-3xl font-bold py-6 px-36 bg-[#FF5F9E] text-[#060047]">Create New Article</h1>
        <div className="w-full h-[477px] bg-blue-200">
            <form className="flex flex-col px-4" onSubmit={uploadPost}>
                <input className="mt-4 py-4 px-4" type="text" placeholder="Enter article title" value={title} onChange={(ev)=> setTitle(ev.target.value)}/>
                <textarea className="py-4 px-4 mt-4" rows="8" placeholder="Enter description here" value={description} onChange={(ev)=> setDescription(ev.target.value)}/>
                <input type="file" className="mt-4" onChange={(ev)=> setFile(ev.target.files)}/>
                <button className="bg-[#FF5F9E] text-[#060047] text-xl font-bold  py-4 my-6 duration-500 hover:bg-pink-500">Submit Article</button>
            </form>       
        </div>
        <Footer/>
    </>
  )
}

export default CreateArticle