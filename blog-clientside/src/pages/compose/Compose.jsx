import { useContext, useState } from "react";
import "./compose.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Compose() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState("");
	const {user} = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			description,
		};
		if(file) {
			const data = FormData();
			// the date.now timestamps the date currently 
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
		}
		axios.post("/posts", );
	};

	return (
		<div className="compose">
				<img
					className="composeImg" 
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blank_page_intentionally_end_of_book.jpg/350px-Blank_page_intentionally_end_of_book.jpg" 
					alt="Just-a-girl-who-likes-rottweilers" 
				/>
			<form className="composeForm" onSubmit={handleSubmit}>
				<div className="composeFormGroup">
					<label htmlFor="fileInput">
						<i className="composeIcon fa-solid fa-circle-plus"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: "none" }}
					/>
					<input
						type="text"
						placeholder="Title"
						className="composeInput"
						autoFocus={true}
					/>
				</div>
				<div className="composeFormGroup">
					<textarea
						placeholder="Your story starts here..."
						type="text"
						className="composeInput composeText"
					></textarea>
				</div>
				<button className="composeSubmit" type="submit">Publish now</button>
			</form>
		</div>
	);
}

// on line 11 the style portion of the code hides the original choose files button so only the plus (add) sign is visible.
