import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
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
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwWKPRKpCxOSIJK_3ikh-OYNgnaGJfHn3Wg&usqp=CAU"
							alt="moi-profile-pic"
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
