import './Login.css'
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function connect() {
    fetch("https://testdrupal.ddev.site/session/token")
      .then((response) => response.text())
      .then((csrfToken) => {
        userlogin(csrfToken);
      })
      .catch((error) => console.error(error));
  }

  function userlogin(csrfToken) {
    alert (username);
    fetch("https://testdrupal.ddev.site/user/login?_format=json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: username,
        pass: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (data.current_user === undefined) {
          throw new Error("Invalid username or password");
        }
        toast.success("Login successful");
        navigate('/vendor');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={connect}>Login</button>
    </div>
  );
}

export default Login;