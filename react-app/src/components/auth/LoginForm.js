import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { login } from "../../store/actions/authActions";

const LoginForm = ({ authenticated, setAuthenticated, type }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const onLogin = async (e) => {
    e.preventDefault();
    // let user = new FormData();
    //   user.append('email', email);
    //   user.append('password', password);
    //   user.append('type', type);

    let user = await dispatch(login(email, password, type));

    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated && type === "adults") {
    return <Redirect to={`/students`} />
  } else if (authenticated && type === "instructors")
    return <Redirect to={`/${type}`} />

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
      <input
          style={{ visibility: 'hidden' }}
          type="text"
          name="type"
          value={type}
          required={true}
          readOnly
        ></input>
    </form>
  );
};

export default LoginForm;
