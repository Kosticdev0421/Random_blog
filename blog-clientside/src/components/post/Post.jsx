import './post.css';

export default function Post() {
  return (
      <div className="post">
        <img 
        className="postImg"
          src="https://png.pngtree.com/png-vector/20190925/ourlarge/pngtree-relax-and-listen-music-t-shirt-design-png-image_1738570.jpg" alt="life-music" 
        />

        <div className="postInfo">
          <div className="postCategories">
            <span className="postCategories">Music</span>
            <span className="postCategories">Life</span>
          </div>
          <span className="postTitle">How Life Influences Music</span>
          <hr/>
          <span className="postDate">2 hours ago</span>
        </div>
        <p className="postDescription">
          Apple pie jujubes bear claw pie lemon drops tiramisu I love. Jujubes cotton candy apple pie sweet roll donut gingerbread I love apple pie. Sweet roll marshmallow sweet donut I love cookie halvah macaroon gummi bears.
          Shortbread gingerbread fruitcake tootsie roll carrot cake shortbread lemon drops jujubes cake. Halvah liquorice I love sweet I love tootsie roll. I love carrot cake jelly beans topping apple pie.
          Caramels tiramisu dessert bonbon pastry. Gummies chocolate I love sugar plum sesame snaps dragée marzipan bonbon I love. Cotton candy brownie cookie wafer apple pie jelly beans chupa chups brownie. Carrot cake I love gummi bears tiramisu donut I love cupcake.
        </p>
      </div>
  )
}