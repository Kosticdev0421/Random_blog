import { Link } from "react-router-dom";
import './topbar.css';

function TopBar() {
  const user = false;
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
            <li className="topListItem">
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
            src="https://static.thenounproject.com/png/94090-200.png" alt="girl-dev" 
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

export default TopBar;