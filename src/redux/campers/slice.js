import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchCamper } from './operations';

const initialState = {
  campers: {
    items: [],
    total: null,
    page: 1,
    pages: 1,
    loadingCampers: false,
    errorCampers: null,
  },
  camper: {
    camper: null,
    loadingCamper: false,
    errorCamper: null,
  },
};

const campersSlice = createSlice({
  name: 'campersList',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.campers.page = action.payload;
    },
    resetPage: (state) => {
      state.campers.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        const { items, total, page, pages } = action.payload;
        if (page === 1) {
          state.campers.items = items;
        } else {
          state.campers.items = [...state.campers.items, ...items];
        }
        state.campers.total = total;
        state.campers.page = page;
        state.campers.pages = pages;
        state.campers.loadingCampers = false;
      })
      .addCase(fetchAllCampers.pending, (state) => {
        state.campers.errorCampers = null;
        state.campers.loadingCampers = true;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.campers.errorCampers = action.payload;
        state.campers.loadingCampers = false;
        if (state.campers.page === 1) {
          state.campers.items = [];
          state.campers.total = 0;
          state.campers.pages = 1;
        }
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        const camper = action.payload;
        state.camper.camper = camper;
        state.camper.loadingCamper = false;
      })
      .addCase(fetchCamper.pending, (state) => {
        state.camper.errorCamper = null;
        state.camper.loadingCamper = true;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.camper.errorCamper = action.payload;
        state.camper.loadingCamper = false;
      });
  },
});

export const { setPage, resetPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
