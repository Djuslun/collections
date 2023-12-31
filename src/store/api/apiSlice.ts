import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BASE_URL}/`,
        prepareHeaders(headers, { getState }) {
            const { token } = (getState() as RootState).user;

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: ['Collection', 'Item', 'Comment', 'Tag', 'User'],
    endpoints: () => ({}),
});

export default apiSlice;
