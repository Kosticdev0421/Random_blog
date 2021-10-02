import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
	return (
		<div className="post">
			{post.photo && <img className="postImg" src={post.photo} alt="" />}

			<div className="postInfo">
				<div className="postCategories">
					{post.categories.map((c) => (
						<span className="postCategories">{c.name}</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>
				<hr />
				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className="postDescription">{post.description}</p>
		</div>
	);
}
