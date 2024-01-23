import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
    message: string;
}

const initialState: ErrorState = {
    message: '',
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrorMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addDefaultCase(() => {});
    },
});

const { actions, reducer: errorReducer } = errorSlice;

export default errorReducer;

export const { setErrorMessage } = actions;
