import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iProduct } from '../interfaces/iProduct';
import { Istate } from '../interfaces/state';
import { loadProducts } from '../redux/products-api/actions-creator';
import { getAllProducts } from '../services/api';
import { CarrouselProducts } from './carrousel/CarrouselProducts';
import { Categories } from './categories/Categories';
import { PaginationComponent } from './pagination/Pagination';
import { Product } from './products/Product';

export function ContainerHome() {
  const dispatch = useDispatch();
  const products: iProduct[] = useSelector(
    (state) => (state as Istate).products
  );

  useEffect(() => {
    getAllProducts().then((data) => dispatch(loadProducts(data.data)));
  }, []);

  return (
    <>
      <CarrouselProducts />
      <div className="categories-container">
        <Categories />
      </div>

      <div className="container-home">
        {products.length ? (
          products.map((product: iProduct) => (
            <Product product={product}></Product>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
      <PaginationComponent></PaginationComponent>
    </>
  );
}
