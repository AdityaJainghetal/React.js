import { Link, Outlet } from "react-router-dom";
import Home from "./Home";
import Cart from './Cart';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Layout=()=>{

    const CartData = useSelector((state)=>state.mycart.cart)
    const cartLength= CartData.length
    return(
            <>
            <Link to="home" element={<Home/>}>Home</Link>|
            <Link to="cart" element={<Cart/>}>Cart</Link>||
            <Link to="cart" element={<Cart/>} style={{marginLeft:"1300px"}}>{cartLength}
            <FaShoppingCart />
            </Link>


            <hr />


            <Outlet/>
            </>

    )
}

export default Layout;