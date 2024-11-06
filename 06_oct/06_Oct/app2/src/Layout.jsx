import { Link, Outlet} from "react-router-dom";

const Layout=()=>{
// import Layout from './Layout';

    return(

        <>
        <Link to="Home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        
        <Outlet/>
        <hr size="4" color="red"/>
        
        www.mycompany.com
        
        </>
        
    )
}

export default Layout;