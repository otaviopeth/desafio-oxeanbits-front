import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "../../lib/axios/axios-instance";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [regErrors, setRegErrors] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/users", {
        user: {
          username: name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      navigate('/movies');
      //console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-reg">
      <form className="form-reg" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          className="ipt-reg"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="ipt-reg"
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="ipt-reg"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="ipt-reg"
          type="password"
          name="password"
          placeholder="Password confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button className="btn-reg" type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Register;
