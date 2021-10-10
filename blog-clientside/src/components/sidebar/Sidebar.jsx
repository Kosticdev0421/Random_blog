// fixed some confusing names.  Come back to make social buttons clickable (Goal)
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
    const [ categories, setCategory ] = useState([]);

    useEffect(() => {
        const getCategories = async () => 
        {
            const res = await axios.get("/categories");  
            setCategory(res.data);  
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
                {categories.map((c) => (
                    <Link to={`/?category= ${c.name}`} className="link">
                         <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
               </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME!</span>
            <div className="sidebarSocial">
                <ul>
                    <li><a href="https://www.facebook.com/lisa.miner2010"><i className="sidebarIcon fab fa-facebook-square"></i></a></li>

                    <li><a href="https://twitter.com/midnightmoet"><i className="sidebarIcon fab fa-twitter-square"></i></a></li>

                    <li><a href="https://www.instagram.com/lisa.miner/"><i className="sidebarIcon fab fa-instagram-square"></i></a></li>
                    
                    <li><a href="https://www.linkedin.com/in/lisachampagne/"><i className="sidebarIcon fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
            </div>
		</div>
	);
}
