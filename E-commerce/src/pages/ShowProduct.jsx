import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from "axios";

import { useDispatch } from 'react-redux';
import { addToCart } from '../productSlice';


const ShowProduct=()=>{
const [mydata, setMydata]= useState([]);
const dispatch= useDispatch();
const {myid} = useParams();

const loadData=()=>{
  let api=`//localhost:3000/products/?id=${myid}`;
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


      <table align="center">
         <tr>
            <td> 

                  <img src={key.images} width="500" height="400" />
            </td>
            <td>
            <h1> {key.name}</h1>
            {key.description}
          <h5> Product for : {key.category}</h5>
          <h4 style={{color:'red'}}> Price :  {key.price} </h4>
                
          <Button variant="primary"
         onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, desc:key.description, cate:key.category, price:key.price, images:key.images, qnty:1 }))}}>
          Add To Cart</Button>
         </td>
         </tr>
      </table>
    </>
  )
})


  return(
        <>
       
     <h1 style={{color:'rgb(53, 149, 245)'}}> Product Details </h1>
       <div id="productData">
       {ans}
       </div>
        </>
    )
}

export default ShowProduct;