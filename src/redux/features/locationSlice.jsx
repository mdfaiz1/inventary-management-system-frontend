import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import locationModel from "../../models/location.model";

// ==============================
// Async Thunks
// ==============================

export const fetchLocations = createAsyncThunk(
  "location/fetchLocations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await locationModel.getAllLocations();
      // console.log("Fetched locations:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createLocation = createAsyncThunk(
  "location/createLocation",
  async (locationName, { rejectWithValue }) => {
    try {
      const response = await locationModel.createLocation({
        locationName: locationName,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteLocation = createAsyncThunk(
  "location/deleteLocation",
  async (id, { rejectWithValue }) => {
    try {
      const response = await locationModel.deleteLocation(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const deleteLocation = createAsyncThunk("location/deleteLocation", async (id, { rejectWithValue }) => {
//   try {}catch (error) {
//     return rejectWithValue(error.response?.data || error.message);
//   }
// }

// ==============================
// Initial State
// ==============================

const initialState = {
  locationData: [],
  loading: false,
  error: null,
};

// ==============================
// Slice
// ==============================

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // You can add manual actions here if needed
  },
  extraReducers: (builder) => {
    builder
      // ===== Fetch Locations =====
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.locationData = action.payload;
        state.loading = false;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error fetching locations";
        console.error("Error fetching locations:", action.payload);
      })

      // ===== Create Location =====
      .addCase(createLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createLocation.fulfilled, (state, action) => {
        state.locationData.push(action.payload);
        state.loading = false;
      })
      .addCase(createLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error creating location";
        console.error("Error creating location:", action.payload);
      })

      // ===== Delete Location =====
      .addCase(deleteLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteLocation.fulfilled, (state, action) => {
        state.loading = false;
        const { _id } = action.payload;

        if (_id) {
          state.locationData = state.locationData.filter(
            (location) => location._id !== _id
          );
        }
      })
      .addCase(deleteLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error Deleting location";
        console.error("Error Deleting location:", action.payload);
      });
  },
});

// ==============================
// Export Reducer
// ==============================

export default locationSlice.reducer;
