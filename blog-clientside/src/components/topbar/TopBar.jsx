import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './topbar.css';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
  };

  return (
      <div className="top">
       <div className="topLeft">
      {/* this div originally contained the icons for social media.  I have relocated those to the bottom which looks more desirable */}
       </div>
       <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/compose">COMPOSE</Link>
            </li>
            <li className="topListItem" onClick = {handleLogout}> 
              {user && "LOGOUT"}
            </li>
          </ul>  
       </div>
       <div className="topRight">
       {/*this controls what is seen.  If user, show profile pic OR show the login register option */}
        {
          user ? (
            <img 
            className="topImg"
            src={user.profilePicture}
            alt="" 
          />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER  
                </Link>
              </li>
            </ul>
          )
        }
          
          <i className="topSearchIcon fas fa-search"></i>

       </div>
      </div>
  )
 
}