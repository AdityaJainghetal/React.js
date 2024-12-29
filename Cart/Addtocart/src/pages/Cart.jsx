// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Card } from 'react-bootstrap'

// const Cart = () => {
//     const Cart=useSelector((state)=>state)

//     const ans= Cart.map((key)=>(
//         <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={key.image} />
//         <Card.Body>
//           <Card.Title>{key.name}</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     ))
//   return (
//     <div>
//         <h1>Cart</h1>
//          {ans}
      
//     </div>
//   )
// }

// export default Cart





import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import {qntyIncrement, qntyDecrement, itemRemove} from "../cartSlice";
import { useNavigate } from "react-router-dom";

const MyCart=()=>{
    const cartData= useSelector((state)=>state.cart);
    const dispatch= useDispatch();
    const navigate=useNavigate();

    let totAmount=0;

    const MyData=cartData.map((key)=>{

      totAmount+=key.price*key.qnty;
        return(
            <>
              <tr>
                <td> <img src={key.image} width="100" height="100" /></td>
                <td>{key.name}</td>
                <td>{key.desc}</td>
                <td>{key.cate}</td>
                <td>{key.price}</td>
                <td> 
                  
                <FaMinusCircle onClick={()=>{dispatch(qntyDecrement({id:key.id}))}} />



                  {key.qnty} 
                  <FaPlusCircle onClick={()=>{dispatch(qntyIncrement({id:key.id}))}} />
                  
                  
                  </td>
                <td> {key.price * key.qnty} </td>
                <td> 

                  <button onClick={()=>{dispatch(itemRemove({id:key.id}))}}> Remove</button>
                </td>
              </tr>
            </>
        )
    })
    return(
        <>
          <h1> Our Products </h1>   

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Decription</th>
          <th>Category</th>
          <th> Price </th>
          <th> QTY </th>
          <th> Total </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
          {MyData}
        </tbody>
        <tr>
          <th>#</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th> Net Amount :  </th>
          <th> { totAmount} </th>
          <th></th>
        </tr>


       
        </Table>     


     <center>

     <button onClick={()=>{navigate("/checkout")}}>CheckOut</button>
     </center>
        
        </>
    )
}
export default MyCart;