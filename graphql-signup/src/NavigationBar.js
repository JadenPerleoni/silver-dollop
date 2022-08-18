import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AUTH_TOKEN } from "./constants";

const NavigationBar = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const navigate = useNavigate();

  return (
    <div
      style={{
        paddingLeft: "30px",
      }}
    >
      <div
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">Home</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/allusers">View all users</Nav.Link>
                <Nav.Link href="/signup">
                  {!authToken && <div>Signup</div>}
                </Nav.Link>
                <Nav.Link>
                  {authToken ? (
                    <div
                      onClick={() => {
                        localStorage.removeItem(AUTH_TOKEN);
                        localStorage.removeItem("username");
                        navigate(`/login`);
                      }}
                    >
                      Log out
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        navigate(`/login`);
                      }}
                    >
                      Login
                    </div>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default NavigationBar;
