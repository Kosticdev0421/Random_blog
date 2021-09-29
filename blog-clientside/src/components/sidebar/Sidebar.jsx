import "./sidebar.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://static.vecteezy.com/system/resources/thumbnails/000/227/854/small/female-developer-vector.jpg"
					alt="girl-dev"
				/>
				<p>
					Self-control is strength.  Calmness is mastery.  You have to get to the point where your mood doesn't shift based on the insignificant actions of someone else.  Don't allow others to control the direction of your life.  Don't allow your emotions to overpower your intelligence.
				</p>
			</div>
            <div className="sidebarItem">
               <span className="sidebarTitle">CATEGORIES</span>
               <ul className="sidebarList">
                <li className="sidebarListItem">LIFE</li>
                <li className="sidebarListItem">MUSIC</li>
                <li className="sidebarListItem">STYLE</li>
                <li className="sidebarListItem">MOVIES</li>
                <li className="sidebarListItem">FOOD</li>
                <li className="sidebarListItem">TECH</li>
               </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US!</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
		</div>
	);
}
