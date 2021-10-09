import { useContext, useState } from "react";
import "./compose.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Compose() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState("");
	const {user} = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			description,
		};
		if(file) {
			const data = new FormData();
			// the date.now timestamps the date currently 
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;

			try {
				await axios.post("/upload", data);
			} catch (err) {
			
			}
		}
		try {
			const res = await axios.post("/posts",  newPost);
			window.location.replace("/post" + res.data._id)
		} catch (err) {

		}
	};

	return (
		<div className="compose">
			{file && (
				<img
				className="composeImg" 
				src={URL.createObjectURL(file)} 
				alt="" 
				/>
			 )}
			<form className="composeForm" onSubmit={handleSubmit}>
				<div className="composeFormGroup">
					<label htmlFor="fileInput">
						<i className="composeIcon fa-solid fa-circle-plus"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type="text"
						placeholder="Title"
						className="composeInput"
						autoFocus={true}
						onChange= {e => setTitle(e.target.value)}
					/>
				</div>
				<div className="composeFormGroup">
					<textarea
						placeholder="Your story starts here..."
						type="text"
						className="composeInput composeText"
						onChange={e => setDescription(e.target.value)}
					></textarea>
				</div>
				<button className="composeSubmit" type="submit">Publish now</button>
			</form>
		</div>
	);
}

// on line 11 the style portion of the code hides the original choose files button so only the plus (add) sign is visible.
