import { Link } from "react-router-dom";
import './login.css';

export default function Login() {
  return (
      <div className="login">
        <pan className="loginTitle">Login</pan>
        <form className="loginForm">
            <label>Email</label>
            <input type="text"className="loginInput" placeholder="Enter your email ..." />
            <label>Password</label>
            <input type="password"className="loginInput" placeholder="Enter your password" />
        <button className="loginButton">Login Here</button>
        </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
        </button>
          
      </div>
  )
}