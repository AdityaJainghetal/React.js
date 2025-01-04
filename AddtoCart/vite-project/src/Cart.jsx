import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import {qntyInc, qntyDec,dataDelete} from "./cartSlice";

const Cart = () => {
  const CartData = useSelector((state)=>state.mycart.cart)
  const dispacth = useDispatch()

  let netAmount=0;

  const ans= CartData.map((key)=>{
    netAmount+=key.price * key.qnty
    return(
      <>
      <tr>
     <td> <img src={key.images} width="200" height="200" /></td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.category}</td>
        <td>{key.price}</td>
        <td>
          <button onClick={()=>{dispacth(qntyDec({id:key.id}))}}>
          <FaMinus />
          </button>

          {key.qnty}

          <button onClick={()=>{dispacth(qntyInc({id:key.id}))}}>
        
          <IoMdAdd />
          </button>
        </td>
        <td></td>
        <td>{key.price * key.qnty}</td>
        <td>
          <button onClick={()=>{dispacth(dataDelete({id:key.id}))}}>Delete</button>
        </td>
      </tr>
      </>
    )
  })
  return (
    <>
    <h1>Cart</h1>
    <table>
      <tr>
        <th></th>
        <th>Production</th>
        <th>category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Remove</th>

      </tr>
      {ans}
      <tr>
        <td colSpan="8" align="right">Total amount</td>
        <th>{netAmount}</th>
      </tr>
     
    </table>
    
    
    </>
  )
}

export default Cart