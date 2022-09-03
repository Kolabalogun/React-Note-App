import React from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function Register() {
  const [email, emailF] = React.useState("");
  const [password, passwordF] = React.useState("");
  const [success, successF] = React.useState(false);
  const [error, errorF] = React.useState(false);

  const Register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
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
      <form onSubmit={Register}>
        <h2>Register</h2>
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
        <button>Register</button>
        {success && <p style={{ color: "red" }}>Success</p>}
        {error && <p style={{ color: "red" }}>Invalid Username or Password</p>}
      </form>
    </div>
  );
}

export default Register;
