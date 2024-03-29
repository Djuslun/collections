import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'ts/interfaces';

interface UserState {
    token: string;
    isAdmin: boolean;
    user: IUser;
}

const initialState: UserState = {
    token: '',
    isAdmin: false,
    user: {
        role: [],
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccsesToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAdmin = action.payload.role.includes('Admin');
        },
        clearUser: (state) => {
            state.user = initialState.user;
            state.isAdmin = false;
            state.token = '';
        },
        setIsAdminToFalse: (state) => {
            state.isAdmin = false;
            state.user.role = state.user.role.filter((role) => role !== 'Admin');
        },
    },
    extraReducers: (builder) => {
        builder.addDefaultCase(() => {});
    },
});

const { actions, reducer: userReducer } = userSlice;

export default userReducer;

export const { setAccsesToken, setUser, setIsAdminToFalse, clearUser } = actions;
