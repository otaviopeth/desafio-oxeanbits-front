import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "../../lib/axios/axios-instance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/sessions", {
        user: { email, password },
      });
      if (response.data.logged_in) {
        navigate("/movies");
      }
    } catch (err) {
      console.log(err);
    }

    // fetch(`/api/sessions`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify( {user: {email, password}}),
    //   credentials: 'include'
    // })
  };
  return (
    <div className="container-login">
      <form className="form-login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="ipt-group">
          <span id="icon-user" className="k-icon k-font-icon k-i-user"></span>
          <input
            className="ipt-login"
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ipt-group">
          <span id="icon-lock" className="k-icon k-font-icon k-i-lock"></span>
          <input
            className="ipt-login"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn-login" type="submit">
          LOG IN
        </button>
        <span>
          Not a Member?{" "}
          <Link
            style={{
              textDecoration: "underline",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
            to="/register"
          >
            Sign up.
          </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
