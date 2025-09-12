import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { buildCampersUrl } from '../../services/campersUrl';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async (
    {
      page = 1,
      limit = 5,
      filterEquipment = [],
      filterVehicleType = null,
      location = '',
    },
    thunkAPI
  ) => {
    try {
      const url = buildCampersUrl({
        page,
        limit,
        filterEquipment,
        filterVehicleType,
        location,
      });
      const response = await axios.get(url);
      const pages = Math.ceil(response.data.total / limit);

      const data = {
        items: response.data.items,
        total: response.data.total,
        page: page > pages ? pages : page,
        pages,
      };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  'campers/fetchOne',
  async ({ id }, thunkAPI) => {
    try {
      const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
