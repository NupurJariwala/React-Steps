import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password,
    };
    console.log(userdata);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email..."
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password..."
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
