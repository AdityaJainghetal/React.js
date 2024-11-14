import Carousel from 'react-bootstrap/Carousel';



const Banner=()=>{
    return(
        <>

        
<Carousel>
<Carousel.Item>
 <img src="public/image/image_1.jpeg" width="100%" height="500px"/>
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src="public/image/image_2.jpeg" width="100%" height="500px" />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src="public/image/image_3.jpeg" width="100%" height="600px"  />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
        
        </>
    )
}
export default Banner;
