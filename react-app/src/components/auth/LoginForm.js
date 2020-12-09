import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, useHistory } from "react-router-dom";
import { login } from "../../store/actions/authActions";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const id = useSelector(state => state.user.id || null)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let { type } = useParams()
  let history = useHistory();
  if (type === 'students') type = 'adults'





  const onLogin = async (e) => {
    e.preventDefault();

    let user = await dispatch(login(email, password, type));

    if (!user.errors) {
      setAuthenticated(true);
      history.push(`/${type}/${user.id}`)
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
    return <Redirect to={`/students/${id}`} />
  } else if (authenticated && type === "instructors") {
    return <Redirect to={`/${type}/${id}`} />
  }


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
