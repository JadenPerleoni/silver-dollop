import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { AUTH_TOKEN } from "./constants";
import { useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: info.email,
      password: info.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      localStorage.setItem("username", login.user.username);

      console.log(
        `You entered email:  ${info.email} password: ${info.password}`
      );
      navigate("/");
    },
  });

  return (
    <div>
      <input
        value={info.email}
        onChange={(e) =>
          setInfo({
            ...info,
            email: e.target.value,
          })
        }
        type="text"
        placeholder="Your email"
      />
      <br></br>
      <input
        value={info.password}
        onChange={(e) =>
          setInfo({
            ...info,
            password: e.target.value,
          })
        }
        type="text"
        placeholder="Your password"
      />
      <br></br>
      <button onClick={login}>Login</button>

      {error && <h2>{error.message}</h2>}
    </div>
  );
};
export default Login;
