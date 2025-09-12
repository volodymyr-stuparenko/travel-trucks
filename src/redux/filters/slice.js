import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filtres',
  initialState: {
    location: '',
    equipment: [],
    vechileType: '',
  },
  reducers: {
    changeFilters: (state, action) => {
      state.location = action.payload.location;
      state.equipment = action.payload.equipment;
      state.vechileType = action.payload.vechileType;
    },
  },
});

export const { changeFilters } = slice.actions;

export default slice.reducer;
