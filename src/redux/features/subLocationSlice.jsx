import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import subLocationModel from "../../models/subLocation.model";

// ==============================
// Async Thunks
// ==============================

export const fetchSubLocations = createAsyncThunk(
  "sublocation/fetchLocations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await subLocationModel.getAllSubLocations();
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Failed to fetch locations");
    }
  }
);
export const createSubLocation = createAsyncThunk(
  "sublocation/createSubLocation",
  async (subLocationData, { rejectWithValue }) => {
    try {
      const response = await subLocationModel.createSubLocation(
        subLocationData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Failed to create sub-location");
    }
  }
);

// ==============================
// Initial State
// ==============================

const initialState = {
  subLocationData: [],
  loading: false,
  error: null,
};

// ==============================
// Slice
// ==============================

export const subLocationSlice = createSlice({
  name: "subLocation",
  initialState,
  extraReducers: (builder) => {
    builder
      // ===== Fetch Sub-Locations =====
      .addCase(fetchSubLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.subLocationData = action.payload;
      })
      .addCase(fetchSubLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error fetching sub-locations";
      })

      // ===== create Sub-Locations =====
      .addCase(createSubLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.subLocationData.push(action.payload);
      })
      .addCase(createSubLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error creating sub-location";
      });
  },
});

export default subLocationSlice.reducer;
