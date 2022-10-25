import { configureStore } from '@reduxjs/toolkit';
import timeReducer from './reducers/timeSlice';

export const store = configureStore({
    reducer: {
        time: timeReducer
    }
});


