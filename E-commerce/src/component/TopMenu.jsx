import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const TopMenu=()=>{
    return(
        <>
         
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoPee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="men">Men Collections</Nav.Link>
            <Nav.Link as={Link} to="women">WoMen Collections</Nav.Link>
            <Nav.Link as={Link} to="kids">Kids Collections</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TopMenu;