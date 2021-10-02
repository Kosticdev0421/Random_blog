import { useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import './singlePost.css';



export default function SinglePost() {
  const location = useLocation();  
  // console.log(location);
  const path = location.pathname.split("/")[2];

//   whenever this path changes fire this useEffect  
  useEffect(() => {
    const getPost = async () => {
        const res = await axios.get("/posts/" + path );
        console.log(res);
    };
    getPost();
  }, [path] );


  return (
      <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://thumbs.dreamstime.com/b/rottweiler-puppy-17061311.jpg" alt=""
            className="singlePostImg"
             />
            <h1 className="singlePostTitle">
                Cuppycake buttercup lollipop and gumdrop.
                <div className="singlePostEdit">
                <i className = " singlePostIcon fa-solid fa-user-pen"></i>
                <i class="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInformation">
                <span className="singlePostAuthor">Author: <b>Midnightmoet</b></span>
                <span className="singlePostDate">2 hours ago</span>
            </div>
            <p className="singlePostDescription">
                Gingerbread I love liquorice I love liquorice powder macaroon croissant. Sugar plum chocolate cake liquorice croissant chocolate bar tart macaroon. I love bonbon jelly sweet topping ice cream wafer. Dragée cupcake oat cake chocolate bar powder danish cookie. 
                I love cookie jelly beans cotton candy gingerbread I love pie icing cupcake. Caramels tootsie roll jelly I love shortbread marshmallow cupcake donut candy. Powder donut jujubes chocolate bar dessert jelly beans jujubes chupa chups ice cream.
                Dessert powder marzipan gummi bears cupcake tootsie roll donut. Bonbon bear claw sweet apple pie croissant liquorice icing. Carrot cake oat cake cake dessert chocolate cake chocolate cake powder shortbread donut. Candy I love sweet roll gummies wafer cheesecake.
            </p>
        </div>
      </div>
  )
}