import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iCategoria } from '../interfaces/iCategories';
import { iProduct } from '../interfaces/iProduct';
import { Istate } from '../interfaces/state';
import {
  loadCategoeries,
  loadProducts,
} from '../redux/products-api/actions-creator';
import * as api from '../services/api';
import { CarrouselProducts } from './carrousel/CarrouselProducts';
import { Categories } from './categories/Categories';
import { PaginationComponent } from './pagination/Pagination';
import { Product } from './products/Product';

export function ContainerHome() {
  const dispatch = useDispatch();
  const products: iProduct[] = useSelector(
    (state) => (state as Istate).products
  );

  const categories: iCategoria[] = useSelector(
    (state) => (state as Istate).categories
  );

  useEffect(() => {
    api
      .getAllProducts()
      .then((products) => dispatch(loadProducts(products.data)));
    api
      .getAllCategories()
      .then((categories) => dispatch(loadCategoeries(categories.data)));
  }, []);

  return (
    <>
      <CarrouselProducts />
      <div className="categories-container">
        {categories.length > 0 && <Categories categories={categories} />}
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
