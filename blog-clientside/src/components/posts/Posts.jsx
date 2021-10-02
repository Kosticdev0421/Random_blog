import Post from "../post/Post";
import "./posts.css";

// eslint-disable-next-line
export default function Posts({ posts }) {
	return (
		<div className="posts">
			{posts.map((p) => (
				<Post post={p} />
			))}
		</div>
	);
}
