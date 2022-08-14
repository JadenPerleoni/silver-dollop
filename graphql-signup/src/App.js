import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/signup">Sign up</Link> | <Link to="/login">Login here</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
