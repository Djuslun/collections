import { Endpoints, Methods } from 'ts/enums';
import { ISearch, Item } from 'ts/interfaces';
import api from './apiSlice';

export const itemApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getItemsBySearchQuery: builder.query<ISearch, string>({
            query: (searchQuery: string) => ({
                url: `${Endpoints.search}${searchQuery}`,
                method: Methods.get,
            }),
            providesTags: ['Item', 'Collection', 'Tag'],
        }),
    }),
});

export const { useGetItemsBySearchQueryQuery } = itemApiSlice;
