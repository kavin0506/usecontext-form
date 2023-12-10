import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { context } from './Contextpage';

const Homepage=()=>{
    const{name,price,quan,descripition}=useContext(context)
    return(
        <div className='product'>
              <Card style={{ width: '18rem' }}>
              <Card.Title>Product Details</Card.Title>

             <Card.Img variant="bottom" src="./image/image.png" />
                <Card.Body>
                 <Card.Text> <span>ProductName:</span>{name}</Card.Text>
                <Card.Text><span>Price:</span>{price}</Card.Text>
                <Card.Text><span>Quantity:</span>{quan}</Card.Text>
                <Card.Text> <span>Descripition:</span>{descripition} </Card.Text>

      </Card.Body>
    </Card>
        </div>

    )
}

export default Homepage;