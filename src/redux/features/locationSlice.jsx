import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locationData : [],
};


export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.locationData = action.payload;
        },
        addLocation: (state, action) => {   
            state.location.push(action.payload);
        },
        updateLocation: (state, action) => {
            const index = state.location.findIndex(
                (location) => location._id === action.payload._id
            );
            if (index !== -1) {
                state.location[index] = action.payload;
            }
        },
        deleteLocation: (state, action) => {
            state.location = state.location.filter(
                (location) => location._id !== action.payload
            );
        },
    }
})


export const {setLocation, addLocation, updateLocation, deleteLocation} = locationSlice.actions;
export default locationSlice.reducer;