import { Link, Outlet} from "react-router-dom";

const Layout=()=>{
// import Layout from './Layout';

    return(

        <>
        <div style={{backgroundColor:"blue" ,color:"White"}} >
       
        <Link to="Home">Home</Link> |
        <Link to="about">About</Link> |
        <Link to="contact">Contact</Link>|
        <Link to="Faculty">Faculty</Link>|
        <Link to="Course">Course</Link>|
                <Outlet/>
        <hr size="4" color="red"/>
        
 
        </div>
        </>
        
    )
}

export default Layout;