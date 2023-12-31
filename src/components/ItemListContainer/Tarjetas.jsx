import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Tarjetas = ( {item} ) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} style={{height: '30%', width: '20%'}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Link to={`/detalle/${item.id}`}>
          <Button variant="primary">Ver Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Tarjetas
