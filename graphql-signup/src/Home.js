import React from "react";

export default function Home() {
  return (
    <h1
      style={{
        paddingLeft: "30px",
      }}
    >
      Welcome {localStorage.getItem("username")}
    </h1>
  );
}
