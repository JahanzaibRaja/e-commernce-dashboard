import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
  const navigate=useNavigate();
  function logout() {
    localStorage.clear();
navigate('/home');
  }
 const auth = localStorage.getItem('user');
  return (
   <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/addproduct'>Add Product</Nav.Link>
          {auth?<Nav.Link as={Link} onClick={logout} to='/register'>Logout</Nav.Link>:
          <Nav.Link as={Link} to='/register'>Register</Nav.Link>
          }
          <Nav.Link as={Link} to='/Profile'>Profile</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
      <br />
     
      <br />
    
{/* <NavLink to='/' className='nav'>Products</NavLink>
   <NavLink to='/addproduct'>Add Products</NavLink>
   <NavLink to='/updateproduct'>Add Products</NavLink>
   <NavLink to='/logout'>Add Products</NavLink>
   <NavLink to='/profile'>Add Products</NavLink> */}
   
   </>
  )
}

export default Header