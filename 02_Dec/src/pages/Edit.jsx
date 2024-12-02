import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { useParams } from "react-router-dom";

const Edit=()=>{
    const [mydata, setMydata] =useState({});
    const {id} = useParams();
    const loadData=()=>{
        let api = `http://localhost:3000/books/${id}`
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        loadData()
    },[]);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value =e.target.value;
        setMydata(values=>({...values,[name]:value}));
        console.log(mydata);
    }

    const handleSubmit=()=>{
        let api = `http://localhost:3000/books/${id}`;
        axios.put(api,mydata).then((res)=>{
            message.success("Data successfully updated")
        })
    }
   


    return(
        <>
        <h1>Update your Record</h1>

        Edit name: <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
        <br />
        Edit Price: <input type="text" name="price" value={mydata.price} onChange={handleInput}/>
        <br />
        Edit Author_name: <input type="text" name="author_name" value={mydata.author_name} onChange={handleInput} />
        <br />
        Edit Publish Year : <input type="text" name="publish_year" value={mydata.publish_year} onChange={handleInput}/>
       <br />

       <button onClick={handleSubmit}>Update save </button>
       
        </>
    )
}


export default Edit;