import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Compose from "./pages/compose/Compose";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context";



export default function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact  path="/"><Home /></Route> 

        <Route path="/register">{user ? <Home /> : <Register/>}</Route> 

        <Route path="/login">{user ? <Home /> : <Login />}</Route>

        <Route path="/compose">{user ? <Compose /> : <Register />}</Route>

        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
 
        <Route path="/post/:postId"><Single /></Route>
      </Switch>
    </Router>
  )
}
