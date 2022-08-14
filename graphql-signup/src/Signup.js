import React from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { AUTH_TOKEN } from "./constants";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $username: String!) {
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
      name: info.name,
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
    <form onSubmit={signup}>
      <label>
        Enter your email:
        <input
          type="text"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
        />
      </label>
      <br></br>
      <label>
        Enter your username:
        <input
          type="text"
          value={info.username}
          onChange={(e) => setInfo({ ...info, username: e.target.value })}
        />
      </label>
      <br></br>
      <label>
        Enter your password:
        <input
          type="text"
          value={info.password}
          onChange={(e) => setInfo({ ...info, password: e.target.value })}
        />
      </label>
      <br></br>

      <input type="submit" />
    </form>
  );
};

export default Signup;
