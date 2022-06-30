import { Button, Card } from 'react-bootstrap';
import { iProduct } from '../../interfaces/iProduct';
export function Product({ product }: { product: iProduct }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.images[0] as string} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  );
}
