import {configureStore} from '@reduxjs/toolkit';
import locationReducer from '../features/locationSlice';
import subLocationReducer from '../features/subLocationSlice';


export const store = configureStore({
    reducer: {
        location: locationReducer,
        subLocation: subLocationReducer,
    },
})