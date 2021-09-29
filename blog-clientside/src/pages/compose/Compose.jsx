import "./compose.css";

export default function Compose() {
	return (
		<div className="compose">
				<img
					className="composeImg" 
					src="https://ih1.redbubble.net/image.2257440794.0814/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" 
					alt="Just-a-girl-who-likes-rottweilers" 
				/>
			<form className="composeForm">
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
				<button className="composeSubmit">Publish now</button>
			</form>
		</div>
	);
}

// on line 11 the style portion of the code hides the original choose files button so only the plus (add) sign is visible.
