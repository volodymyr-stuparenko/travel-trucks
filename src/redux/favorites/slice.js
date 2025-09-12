import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesList: [],
  },
  reducers: {
    toogleFavorite: (state, action) => {
      if (!state.favoritesList.includes(action.payload)) {
        state.favoritesList.push(action.payload);
      } else {
        state.favoritesList = state.favoritesList.filter(
          (item) => item !== action.payload
        );
      }
    },
  },
});

export const { toogleFavorite } = slice.actions;

export default slice.reducer;
