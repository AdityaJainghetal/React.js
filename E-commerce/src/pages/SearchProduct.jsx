
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from "axios";

import { useDispatch } from 'react-redux';
import { addToCart } from '../productSlice';


const SearchProduct=()=>{
const [mydata, setMydata]= useState([]);
const dispatch= useDispatch();
const [pro, setPro] =useState("");

const loadData=()=>{
  let api="//localhost:3000/products";
  axios.get(api).then((res)=>{
    setMydata(res.data);
  })
}
useEffect(()=>{
  loadData();
}, []);

const ans= mydata.map((key)=>{

    const proStatus=key.name.includes(pro);
  
 if (proStatus==true)
 {
  return(
    <>
    
    <Card style={{ width: '18rem', marginTop:"20px" }}>
      <Card.Img variant="top" src={key.images} height="250" />
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
}
})



  return(
        <>
       
       <center>
     <h1 style={{color:'rgb(53, 149, 245)'}}> Search  Collections</h1>

     Enter Product name : <input type="text" value={pro} onChange={(e)=>{setPro(e.target.value)}} />

     </center>
       <div id="productData">
       {ans}
       </div>
        </>
    )
}

export default SearchProduct;