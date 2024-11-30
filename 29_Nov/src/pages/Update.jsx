import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from 'antd';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Update=()=>{
    const [mydata, setMydata] = useState([]);


    const loadData=()=>{
        let api="http://localhost:3000/books";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    }, [])


    const myDel =(id)=>{
        let api= `http://localhost:3000/books/${id}`;
        axios.delete(api).then((res)=>{
            message.error("Record successfully deleted");
            loadData()
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.name} </td>
                <td> {key.price} </td>
                <td> {key.author_name} </td>
                <td> {key.publish_year} </td>
                <td>

                    <a href="#" onClick={()=>{myDel(key.id)}} >
                <MdDelete />
                </a>

                </td>

                <td>
                    <a href="#">
                    <FaEdit />
                    </a>
                </td>
              </tr>
            
            </>
        )
    })

    return(
        <>
         <h1> Deleted Books</h1>


         <Table striped bordered hover>
      <thead>
        <tr>
          <th> Book name</th>
          <th>Price</th>
          <th>Author Name</th>
          <th>Publish Year</th>
          <th>Deleted</th>
          <th>Edit</th>

        </tr>
      </thead>
      <tbody>
    
      {ans}
    </tbody>
    </Table>

        
        </>
    )
}

export default Update;