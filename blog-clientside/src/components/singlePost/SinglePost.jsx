import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import './singlePost.css';
import { Link } from "react-router-dom";



export default function SinglePost() {
  const location = useLocation();  
  // console.log(location);
  const path = location.pathname.split("/")[2];
  const [post, setPost ] = useState({});

//   whenever this path changes fire this useEffect  
  useEffect(() => {
    const getPost = async () => {
        const res = await axios.get("/posts/" + path );
        setPost(res.data);
    };
    getPost();
  }, [path] );


  return (
      <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo && (
              <img 
                src= {post.photo} 
                alt=""
                className="singlePostImg"
              />
            )}
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                <i className = " singlePostIcon fa-solid fa-user-pen"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInformation">
                <span className="singlePostAuthor">
                  Author: 
                  <Link to={`/?user= ${post.username}`} className="link">
                    <b>{post.username}</b>
                  </Link>
                 </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDescription">{post.description}</p>
        </div>
      </div>
  )
}