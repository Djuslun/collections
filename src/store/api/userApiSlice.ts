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
        addUserAdminRole: builder.mutation<void, string[]>({
            query: (userIds) => ({
                url: `${Endpoints.users}roles/assignAdmin`,
                method: Methods.post,
                body: userIds,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUserAdminRole: builder.mutation<void, string[]>({
            query: (userIds) => ({
                url: `${Endpoints.users}roles/deleteAdmin`,
                method: Methods.post,
                body: userIds,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUsers: builder.mutation<void, string[]>({
            query: (userIds) => ({
                url: `${Endpoints.users}/delete`,
                method: Methods.delete,
                body: userIds,
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
    useDeleteUsersMutation,
} = userApiSlice;
