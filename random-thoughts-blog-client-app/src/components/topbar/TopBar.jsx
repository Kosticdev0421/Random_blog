import './topbar.css';

function TopBar() {
  return (
      <div className="top">
       <div className="topLeft">
       
       </div>
       <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">COMPOSE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>  
       </div>
       <div className="topRight">
          <img 
            className="topImg"
            src="https://static.thenounproject.com/png/94090-200.png" alt="girl-dev" 
          />
          <i className="topSearchIcon fas fa-search"></i>

       </div>
      </div>
  )
 
}

export default TopBar;