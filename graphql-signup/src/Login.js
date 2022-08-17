import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { AUTH_TOKEN } from "./constants";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: info.email,
      password: info.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      console.log(
        `You entered email:  ${info.email} password: ${info.password}`
      );
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

    </div>
  )
};
export default Login;
