import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { AUTH_TOKEN } from "./constants";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $username: String!
  ) {
    signup(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

const Signup = () => {
  const [info, setInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `You entered email:  ${info.email} username: ${info.username} password: ${info.password}`
    );
  };
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      username: info.username,
      email: info.email,
      password: info.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      console.log(
        `You entered email:  ${info.email} username: ${info.username} password: ${info.password}`
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
        value={info.username}
        onChange={(e) =>
          setInfo({
            ...info,
            username: e.target.value,
          })
        }
        type="text"
        placeholder="Your username"
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
      <button onClick={signup}>Create Account</button>
    </div>
  );
};

export default Signup;
