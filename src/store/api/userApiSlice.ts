import { Endpoints, Methods } from 'ts/enums';
import { IUser } from 'ts/interfaces';
import { TUserRole } from 'ts/types';
import api from './apiSlice';

export const userApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => ({
                url: `${Endpoints.users}`,
                method: Methods.get,
            }),
            providesTags: ['User'],
        }),
        getUser: builder.query<IUser, string>({
            query: (userId: string) => ({
                url: `${Endpoints.users}${userId}`,
                method: Methods.get,
            }),
            providesTags: ['User'],
        }),
        getUserRole: builder.query<TUserRole[], string>({
            query: (userId) => ({
                url: `${Endpoints.users}roles/${userId}`,
                method: Methods.get,
            }),
            providesTags: ['User'],
        }),
        addUserAdminRole: builder.mutation<void, string>({
            query: (userId) => ({
                url: `${Endpoints.users}roles/${userId}/assignAdmin`,
                method: Methods.get,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUserAdminRole: builder.mutation<void, string>({
            query: (userId) => ({
                url: `${Endpoints.users}roles/${userId}/deleteAdmin`,
                method: Methods.get,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useGetUserRoleQuery,
    useAddUserAdminRoleMutation,
    useDeleteUserAdminRoleMutation,
    useGetUserQuery,
} = userApiSlice;
