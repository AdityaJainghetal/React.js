import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home=()=>{
    return(
        <>
        <h1>Welcome to cybrom</h1>
        <div style={{display:'flex' , gridTemplateColumns:'auto auto auto' , gap:'10px', margin:'10px'}}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/image/stundet_1.jpg"   />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card  style={{ width: '18rem' }} >
      <Card.Img variant="top" src="public/image/stundet_2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card  style={{ width: '18rem' }} >
      <Card.Img variant="top" src="public/image/stundet_3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



    
    </div>
        </>
    )
}

export default Home;