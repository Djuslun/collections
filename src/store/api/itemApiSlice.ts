/* eslint-disable import/no-named-as-default */
import { Endpoints, Methods } from 'ts/enums';
import { Item, ItemRequestBody } from 'ts/interfaces';
import apiSlice from './apiSlice';

export const itemApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getItemsByCollectionId: builder.query<Item[], string>({
            query: (collectionId: string) => ({
                url: `${Endpoints.itemsInCollection}${collectionId}`,
                method: Methods.get,
            }),
            providesTags: ['Item'],
        }),
        getItemById: builder.query<Item, string>({
            query: (itemId: string) => ({
                url: `${Endpoints.items}${itemId}`,
                method: Methods.get,
            }),
            providesTags: ['Item'],
        }),
        getRecentItems: builder.query<Item[], void>({
            query: () => ({
                url: `${Endpoints.items}recent`,
                method: Methods.get,
            }),
            providesTags: ['Item'],
        }),
        createItem: builder.mutation<Item, ItemRequestBody>({
            query: (item) => ({
                url: `${Endpoints.items}new`,
                method: Methods.post,
                body: item,
            }),
            invalidatesTags: ['Item', 'Collection'],
        }),
        deleteItem: builder.mutation<Item, string>({
            query: (itemId: string) => ({
                url: `${Endpoints.items}${itemId}`,
                method: Methods.delete,
            }),
            invalidatesTags: ['Item', 'Collection'],
        }),
        updateItem: builder.mutation<Item, Item>({
            query: (item: Item) => ({
                url: `${Endpoints.items}${item._id}`,
                method: Methods.put,
                body: item,
            }),
            invalidatesTags: ['Item'],
        }),
        updateItemLikes: builder.mutation<Item, { id: string; likesArray: string[] }>({
            query: ({ id, likesArray }) => ({
                url: `${Endpoints.items}${id}`,
                method: Methods.patch,
                body: likesArray,
            }),
            invalidatesTags: ['Item'],
        }),
    }),
});

export const {
    useCreateItemMutation,
    useDeleteItemMutation,
    useGetItemByIdQuery,
    useGetItemsByCollectionIdQuery,
    useUpdateItemMutation,
    useUpdateItemLikesMutation,
    useGetRecentItemsQuery,
} = itemApiSlice;
