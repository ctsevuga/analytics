import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useState,  useContext, useEffect } from "react";
import {  FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import logo from "../assets/logo.png";

import { GlobalContext } from "../context/GlobalState";

const Header = () => {
  
  
  // const { cartItems } = useSelector((state) => state.cart);
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { user } = useContext(GlobalContext);
  const { removeUser } = useContext(GlobalContext);
  const logoutHandler = async () => {
    try {
      removeUser(user._id);
      localStorage.removeItem('userInfo');
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  
  // const logoutHandler = async () => {
  //   try {
  //     await logoutApiCall().unwrap();
  //     dispatch(logout());
  //     navigate("/login");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
 
  return (
    <header>
      <Navbar bg="danger" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="m-2" src={logo} alt="Karaikudi E - Mart" />
              Infowisdom
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <SearchBox /> */}

              { user?.name ? (
                <>
                  <NavDropdown title={user?.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                
                  <LinkContainer exact to='/'>
                  <Nav.Link >
                    <FaUser  /> Sign In
                    
                  </Nav.Link>
                </LinkContainer>
              )}

              {/* Admin Links */}
              {user?.name && user?.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">


                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/resultlist">
                    <NavDropdown.Item>Results</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
