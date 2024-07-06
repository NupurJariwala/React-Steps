import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";

function Login() {
  const [email, setmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, authState } = useContext(Authcontext);
  console.log(authState);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password,
    };
    axios
      .post("https://reqres.in/api/login", userdata)
      .then((res) => {
        loginUser(res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form data-testid="login-form" onSubmit={handlesubmit}>
        <div>
          <label>
            Email
            <input
              onChange={(e) => setmail(e.target.value)}
              data-testid="email-input"
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password-input"
              type="text"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
