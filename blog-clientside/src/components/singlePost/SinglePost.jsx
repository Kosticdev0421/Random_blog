import './singlePost.css';



export default function SinglePost() {
  return (
      <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://www.nicepng.com/png/detail/167-1676210_cupcake-png-cupcake-clipart-cute-clipart-chocolate-free.png" alt="CuppyCake" className="singlePostImg" />
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