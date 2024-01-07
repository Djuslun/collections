import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    token: string;
}

const initialState: UserState = {
    token: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccsesToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addDefaultCase(() => {});
    },
});

const { actions, reducer: userReducer } = userSlice;

export default userReducer;

export const { setAccsesToken } = actions;
