import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
