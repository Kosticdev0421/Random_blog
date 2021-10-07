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
            src="https://lh3.googleusercontent.com/proxy/xzoFm8-Dr2jceL8Ape32OuE0YIRJgwg5PtBAUsf7P3dYvUokX_VWAveKDMUpxir6AoakwYuggtr25Ll3We19TLh0joePPvNYmpbwb_U" alt="" 
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