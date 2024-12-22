import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from '../productSlice';
import { useNavigate } from 'react-router-dom';

const Home=()=>{
const [mydata, setMydata]= useState([]);
const dispatch= useDispatch();
const navigate=useNavigate();

const loadData=()=>{
  let api="http://localhost:3000/products";
  axios.get(api).then((res)=>{
    setMydata(res.data);
  })
}
useEffect(()=>{
  loadData();
}, []);

const ans= mydata.map((key)=>{
  return(
    <>
    
    <Card style={{ width: '18rem', marginTop:"20px" }}>

      
      <Card.Img variant="top" style={{cursor:'pointer'}}
       src={key.images} height="250" onClick={()=>{navigate(`/showproduct/${key.id}`)}} />
      
      
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <Card.Text>
          {key.description}
          <h5> Product for : {key.category}</h5>
          <h4 style={{color:'red'}}> Price :  {key.price} </h4>
         
        </Card.Text>

        <Button variant="primary"
         onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, desc:key.description, cate:key.category, price:key.price, images:key.images, qnty:1 }))}}>
          Add To Cart</Button>
      </Card.Body>
    </Card>
    
    </>
  )
})


  return(
        <>
        <Carousel>
      <Carousel.Item>
        <img src={b1} width="100%" height="200" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} width="100%" height="200" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3} width="100%" height="200" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     <h1 style={{color:'rgb(53, 149, 245)'}}> Our Premium Products</h1>
       <div id="productData">
       {ans}
       </div>
        </>
    )
}

export default Home;