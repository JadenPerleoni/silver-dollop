import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AUTH_TOKEN } from "./constants";

const NavigationBar = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>

          <Navbar.Brand>{authToken && 
          localStorage.getItem("username")

          }</Navbar.Brand>
          

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  );
};
export default NavigationBar;
