import { createAction } from '@reduxjs/toolkit';
import { iProduct } from '../interfaces/iProduct';
import actionTypes from './action-types';

export const loadProducts = createAction<iProduct[]>(actionTypes.loadProducts);
