import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iProduct } from '../interfaces/iProduct';
import { loadProducts } from '../redux/products-api/actions-creator';
import { getAllProducts } from '../services/api';
import { CarrouselProducts } from './carrousel/CarrouselProducts';
import { PaginationComponent } from './pagination/Pagination';
import { Product } from './products/Product';

export function ContainerHome() {
  const dispatch = useDispatch();
  const products: any = useSelector((state) => state);

  useEffect(() => {
    getAllProducts().then((data) => dispatch(loadProducts(data.data)));
  });
  const arr = [0, 1, 2, 3, 4];
  return (
    <>
      <CarrouselProducts />
      <div className="container-home">
        {products.length ? (
          products.map((product: any) => <Product product={product}></Product>)
        ) : (
          <p>Loading</p>
        )}
      </div>
      <PaginationComponent></PaginationComponent>
    </>
  );
}
