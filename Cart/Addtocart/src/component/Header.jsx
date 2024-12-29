import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const product = useSelector((state)=>state)
  const productLength = product.length;
  const navigate = useNavigate();


  const gotoCartPage=()=>{
    navigate("/Cart");
  }

  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

        <Nav>
            <Nav.Link as={Link} to="cart">
                {productLength}
                <FaCartPlus/>
                
            </Nav.Link>
        </Nav>



        </Container>
      </Navbar>

    </>
  )
}

export default Header