import React from 'react'
import { Container,Navbar,Nav,NavDropdown } from 'react-bootstrap'

function NavBar() {
  const signOutHandler = ()=>{
      localStorage.clear() ; 
  }
  return (
    <React.Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={signOutHandler} href="/">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </React.Fragment>
  )
}

export default NavBar