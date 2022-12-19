
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

const ResNavbar = () => {
  return (
    <div className='res-nav'>
  <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><NavLink className='navbarItems' activeClassName="active"  to='/'> Home </NavLink></Nav.Link>
            <Nav.Link href="#link"><NavLink className='navbarItems' activeClassName="active"  to='/create'> Create </NavLink></Nav.Link>
            <Nav.Link href="#link"><NavLink className='navbarItems' activeClassName="active"  to='/list'> List </NavLink></Nav.Link>
            <Nav.Link href="#link"><NavLink className='navbarItems' activeClassName="active"  to='/search'> Search </NavLink></Nav.Link>
            <Nav.Link href="#link"><NavLink className='navbarItems' activeClassName="active"  to='/update'> Update </NavLink></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default ResNavbar

