import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addtocart } from '../cartSlice';




const Home = () => {
  const [data, setData] = useState([]);

  const dispatch =  useDispatch();
  
  const loadData = async () => {
    
      const api = "http://localhost:3000/components";
      const res = await axios.get(api);
      setData(res.data);
   
    
  };

  useEffect(() => {
    loadData();
  }, []);


  const cards = data.map((key) => {
    return (
      <Card  style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={key.image} alt={key.name} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
           {key.category}
          </Card.Text>
          <Card.Text>
           {key.publish_year}
          </Card.Text>
          <Button variant="primary" onClick={()=>{dispatch(addtocart(key))}}>Add to cart</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
      {cards}
    </div>
  );
};

export default Home;
