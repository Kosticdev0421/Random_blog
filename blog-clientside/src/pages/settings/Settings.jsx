import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Settings() {
	
	const [file, setFile] = useState("");
	const [Username, setusername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedUser = {
			userId: user._id,
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
				<form className="settingsForm">
					<label>Profile Photo</label>
					<div className="settingsProfilePicture">
						<img
							src={user.profilePicture}
							alt=""
						/>
            <label htmlFor="fileInput">
            <i className="settingsProfilePictureIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}} />
					</div>
          <label >Username</label>
          <input type="text" placeholder="Midnightmoet"/>
          <label >Email</label>
          <input type="email" placeholder="midnightmoet@gmail.com"/>
          <label >Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
