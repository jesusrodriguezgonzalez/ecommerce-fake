import { useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../redux/products-api/actions-creator';
import { getAllCategories } from '../../services/api';
export function Categories() {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     getAllCategories().then((data) => dispatch(loadProducts(data.data)));
  //   });
  return (
    <Form className="d-flex">
      <Button variant="outline-success">Categoria 1</Button>
      <Button variant="outline-success">Categoria 2</Button>
      <Button variant="outline-success">Categoria 3</Button>
    </Form>
  );
}
