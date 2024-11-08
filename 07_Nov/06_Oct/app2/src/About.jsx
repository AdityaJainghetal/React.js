import { Link, Outlet } from "react-router-dom";
// import AboutCompany from './AboutCompany';


const About=()=>{
    return(

        <>
        <h1>welcome to About</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, maiores?
        <br /> <br />
        <table width="100%" border="2">
            <tr>
                <td>
                    <Link to="aboutcompany"> About Company</Link>
                    <br /> <br />
                    <Link to="aboutproduct"> About Product</Link>
                    <br /> <br />
                    <Link to="aboutservice"> About Service</Link>
                </td>
                <td>
                    <Outlet/>
                </td>
            </tr>
        </table>
        </>
    )
}

export default About;