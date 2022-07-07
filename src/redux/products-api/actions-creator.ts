import { createAction } from '@reduxjs/toolkit';
import { iCategoria } from '../../interfaces/iCategories';
import { iProduct } from '../../interfaces/iProduct';
import actionTypes from './action-types';

export const loadProducts = createAction<iProduct[]>(actionTypes.loadProducts);
export const loadCategoeries = createAction<iCategoria[]>(
  actionTypes.loadCategories
);
