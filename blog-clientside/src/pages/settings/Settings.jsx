import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
	const [file, setFile] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const { user, dispatch } = useContext(Context);
	const publicFile = "http://localhost:2000/images/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START"});
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			const data = new FormData();
			// the date.now timestamps the date currently
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePicture = filename;

			try {
				await axios.post("/upload", data);
			} catch (err) {}
		}
		try {
			await axios.put("/users/" + user._id, updatedUser);
			setSuccess(true);
		} catch (err) {}
	};

	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">
						Update Your Account
					</span>
					<span className="settingsDeleteTitle">
						Delete Your Account
					</span>
				</div>
				<form className="settingsForm"onSubmit={handleSubmit}>
					<label>Profile Photo</label>
					<div className="settingsProfilePicture">
						<img 
							src={user.profilePicture} 	
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsProfilePictureIcon fa-solid fa-circle-user"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input 
						type="text" 
						placeholder={user.username} 
						onChange={e  => setUsername(e.target.value)} 
					/>
					<label>Email</label>
					<input 
						type="email" 
						placeholder={user.email} 
						onChange={e => setEmail(e.target.value)} 
					/>
					<label>Password</label>
					<input 
						type="password" 
						onChange={e => setPassword(e.target.value)} 
					/>
					<button className="settingsSubmit" type="submit">
						Update
					</button>
					{success && <span style={{color: "limegreen", textAlign: "center", marginTop: "15px"}}>Profile has been updated...</span>}
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
