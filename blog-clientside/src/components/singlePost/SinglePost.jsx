import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./singlePost.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
	const location = useLocation();
	// console.log(location);
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const publicFile = "http://localhost:2000/images/";
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	//   whenever this path changes fire this useEffect
	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get("/posts/" + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDescription(res.data.description);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${post._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}
	};
	//--------------------------------------------------------------//
	//Only used to test when I had an error deleting a blog entry
	// console.log(user);
	// console.log(post);
	// console.log(post.username === user.username);
	//--------------------------------------------------------------//
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img
						src={publicFile + post.photo}
						alt=""
						className="singlePostImg"
					/>
				)}
				{updateMode ? (
					<input type="text" value={post.title} className="singlePostTitleInput" autoFocus />
				) : (
					<h1 className="singlePostTitle">{post.title} {post.username === user?.username && (
						<div className="singlePostEdit">
							<i className=" singlePostIcon fa-solid fa-user-pen" onClick={() => setUpdateMode(true)} />
							<i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete} />
						</div>
					
					)}
					
					</h1>
				)}
				<div className="singlePostInformation">
					<span className="singlePostAuthor">
						Author:
						<Link to={`/?user= ${post.username}`} className="link">
							<b>{post.username}</b>
						</Link>
					</span>
					<span className="singlePostDate">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				{updateMode ? (
					<textarea
						className="singlePostDescriptionInput"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				) : (
					<p className="singlePostDescription">{post.description}</p>
				)}
			</div>
		</div>
	);
}
