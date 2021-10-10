// tested no changes needed
import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">Compose .. Edit</span>
				<span className="headerTitleLg">Repeat</span>
			</div>
			<img
				className="headerImg"
				src="https://media.istockphoto.com/photos/top-view-of-modern-office-workspace-picture-id1205613046?b=1&k=20&m=1205613046&s=170667a&w=0&h=gijbHEL3cHTaD6YtfO_pCFLOuBX-2lshhWP4fz4mUck="
				alt="abstract-art"
			/>
		</div>
	);
}