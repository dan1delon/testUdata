import { INITIAL_STATE } from '../constants';
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',

  initialState: INITIAL_STATE.filters,

  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    },

    changeSort(state, action) {
      state.sortBy = action.payload;
    },

    clearFilter(state) {
      state.status = 'all';
      state.sortBy = 'date';
    },
  },
});

export const { changeFilter, changeSort, clearFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
