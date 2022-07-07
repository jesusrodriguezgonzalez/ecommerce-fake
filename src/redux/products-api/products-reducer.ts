import { createReducer } from '@reduxjs/toolkit';
import { iProduct } from '../../interfaces/iProduct';
import { loadProducts, loadCategoeries } from './actions-creator';

const initialState: any = {
  products: [],
  categories: [],
};

export const productsReducer = createReducer(initialState, (builder) =>
  builder
    // .addCase(loadProducts, (state, action) => [...action.payload])
    .addCase(loadProducts, (state, action) => {
      return {
        products: action.payload,
        categories: [...state.categories],
      };
    })
    .addCase(loadCategoeries, (state, action) => {
      return {
        products: [...state.products],
        categories: action.payload,
      };
    })
    .addDefaultCase((state) => state)
);
