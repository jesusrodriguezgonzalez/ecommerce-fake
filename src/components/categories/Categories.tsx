import { Button, Form } from 'react-bootstrap';
import { iCategoria } from '../../interfaces/iCategories';

export function Categories({ categories }: { categories: iCategoria[] }) {
  return (
    <Form className="d-flex">
      {categories.map((item) => (
        <Button className="margin" variant="outline-success">
          {item.name}
        </Button>
      ))}
    </Form>
  );
}
