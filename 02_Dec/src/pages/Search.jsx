import { Table } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Search=()=>{
    const [year, setYear]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleSubmit=()=>{
        let api=`http://localhost:3000/books/?publish_year=${year}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);

            if(res.data.length<=0){
                errMsg= message.error("No book for this year")
            }
            else{
                errMsg="";
            }
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.price}</td>
                <td>{key.author_name}</td>
                <td>{key.publish_year}</td>
            </tr>
            </>
        )
    });
    return(
        <>
        <h1>Search Books</h1>
        Enter Publish Year : <input type="text" value={year} onChange={(e)=>{setYear(e.target.value)}} />
        <button onClick={handleSubmit}>Search</button>

        <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th> Book name</th>
          <th>Price</th>
          <th>Author Name</th>
          <th>Publish Year</th>
        </tr>
      </thead>
      <tbody>
       
      {ans}
    </tbody>
    </Table>
        </>
    )
}
export default Search;