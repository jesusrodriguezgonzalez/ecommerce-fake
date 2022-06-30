import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products-api/products-reducer';

export const store = configureStore({
  reducer: productsReducer,
});
