import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const product= useSelector((state)=>state.myproduct.cart);
    const proLength= product.length;
    const navigate= useNavigate();
   console.log(product);

   const gotoCartPage=()=>{
    navigate("/mycart");
   }


    return(
        <>
         <div id="header">
  
         <span id="procounter"> {proLength} </span>

       <a href="#" onClick={gotoCartPage}>
         <FaShoppingCart style={{marginRight:"20px"}} />
         </a>  

         <FaSearch />

         </div>
        </>
    )
}

export default Header;