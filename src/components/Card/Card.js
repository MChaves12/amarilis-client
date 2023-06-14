import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({productName, productPrice}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          {productPrice}
        </Card.Text>
        <Button variant="light" border='dark'>Ver Produto</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;