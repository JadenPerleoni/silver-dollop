import React from "react";

import NavigationBar from "./NavigationBar";

const App = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <h1
        style={{
          paddingLeft: "30px",
        }}
      >
        Welcome!
      </h1>
    </>
  );
};

export default App;
