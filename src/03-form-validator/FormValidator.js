import { useState } from "react";

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validateForm = (e) => {
    const errors = [];
    e.preventDefault();
    if (!email.match(validRegex)) {
      errors.push("Invalid email");
    }

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (passwordConfirm !== password) {
      errors.push("Confirm password doesnt match password");
    }

    setErrorMsg(errors.length === 0 ? "User created Successfully" : errors.join(", "));
  };

  return (
    <form onSubmit={validateForm}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <div>{errorMsg}</div>
      <input type="submit" value="Submit" />
    </form>
  );
}
