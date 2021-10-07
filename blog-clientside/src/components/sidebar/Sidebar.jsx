import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
    const [ cats, setCat ] = useState([]);

    useEffect(() => {
        const getCategories = async () => 
        {
            const res = await axios.get("/categories");  
            setCat(res.data);  
        };
        getCategories();
    }, [] );


	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://images.clipartlogo.com/files/istock/previews/8073/80730549-ornate-romantic-pagan-sun-symbol.jpg"
					alt=""
				/>
				<p>
					Self-control is strength.  Calmness is mastery.  You have to get to the point where your mood doesn't shift based on the insignificant actions of someone else.  Don't allow others to control the direction of your life.  Don't allow your emotions to overpower your intelligence.
				</p>
			</div>
            <div className="sidebarItem">
               <span className="sidebarTitle">CATEGORIES</span>
               <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat= ${c.name}`} className="link">
                         <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
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
