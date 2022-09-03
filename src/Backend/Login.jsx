import React from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function Login() {
  const [email, emailF] = React.useState("");
  const [password, passwordF] = React.useState("");
  const [success, successF] = React.useState(false);
  const [error, errorF] = React.useState(false);

  const Login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        successF(true);
      })
      .catch((error) => {
        errorF(true);
      });
  };

  return (
    <div className="gg">
      <form onSubmit={Login}>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          placeholder="Username"
          onChange={(e) => {
            emailF(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => {
            passwordF(e.target.value);
          }}
        />
        <button>Login</button>

        {success && <p style={{ color: "red" }}>Success</p>}
        {error && <p style={{ color: "red" }}>Invalid Username or Password</p>}
      </form>
    </div>
  );
}

export default Login;
