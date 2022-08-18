import React from "react";
import { gql, useQuery } from "@apollo/client";

const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers {
      username
      email
      id
    }
  }
`;

const Allusers = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <>
    <h2>This is a list of all users</h2>
    <ul>
      {data.allUsers.map((users) => (
        <li key={users.id} value={users.username}>
          {users.username} | {users.email}
        </li>
      ))}
    </ul>
    </>
  );
};

export default Allusers;
