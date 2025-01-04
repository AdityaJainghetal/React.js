import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from './cartSlice';


const Home = () => {
    const [mydata,setMydata] = useState([]);
    const dispatch= useDispatch()
     const loadData =()=>{
        let api = "http://localhost:3000/products";
        axios.get(api).then((res)=>{
            setMydata(res.data)
        })
    }


    useEffect(()=>{
        loadData()
    },[])
  
  
    const ans= mydata.map((key)=>{
        return(
            <>
            <div id="myCard">
                <img src={key.images} width="200" height="200" />
                <h3>{key.name}</h3>
                <h3>{key.description}</h3>
                <h3>{key.category}</h3>
                <h3>Price: {key.price}</h3>
                <button onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, description:key.description, category:key.category, price:key.price, images:key.images, qnty:1}))}}>Add to cart</button>
            </div>
            
            
            </>


        )
    })


  
    return (
    <>
    <h1>Product</h1>
    <div id='myBox'>
    {ans}
    </div>
    
    
    
    
    
    </>
  )
}

export default Home