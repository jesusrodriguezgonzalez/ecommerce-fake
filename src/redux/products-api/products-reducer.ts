import { createReducer } from '@reduxjs/toolkit';
import { iProduct } from '../interfaces/iProduct';
import { loadProducts } from './actions-creator';

const initialState: iProduct[] = [];

export const productsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(loadProducts, (state, action) => [...action.payload])
    .addDefaultCase((state) => state)
);
