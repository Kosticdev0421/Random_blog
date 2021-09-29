// Components

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Compose from "./pages/compose/Compose";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App() {
  // pseudo user to play with the design portion, no logged in user
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact  path="/">
          <Home />
        </Route> 
        <Route path="/register">
        {/* if there is a user go to home IF NOT then go to register */}
          {user ? <Home /> : <Register/>}
        </Route> 
        <Route path="/login">
        {/* if user is logged in go home IF NOT then go log in */}
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/compose">
        {/* if user logged in they can composer IF NOT they need to register */}
          {user ? <Compose /> : <Register />}
        </Route>
        <Route path="/settings">
        {/*user logged in goes to settings IF NOT then they have to register */}
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
        {/* no conditions needed because everyone can view this single page */}
          <Single />
        </Route>
      </Switch>
    </Router>
  )
}

// for some reason the terminal wanted the export default within the function instead of separately.  Look up why but do it their way, for now. 
