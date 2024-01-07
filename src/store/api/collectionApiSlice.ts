import { Endpoints, Methods } from 'ts/enums';
import { Collection, CollectionRequestBody } from 'ts/interfaces';
// eslint-disable-next-line import/no-named-as-default
import apiSlice from './apiSlice';

export const collectionApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCollections: builder.query<Collection[], void>({
            query: () => ({
                url: `${Endpoints.collections}`,
                method: Methods.get,
            }),
            providesTags: ['Collection'],
        }),
        getTopCollections: builder.query<Collection[], void>({
            query: () => ({
                url: `${Endpoints.collections}top`,
                method: Methods.get,
            }),
            providesTags: ['Collection'],
        }),
        getCollections: builder.query<Collection[], void>({
            query: () => ({
                url: `${Endpoints.collections}my`,
                method: Methods.get,
            }),
            providesTags: ['Collection'],
        }),
        getCollectionById: builder.query<Collection, string>({
            query: (id: string) => ({
                url: `${Endpoints.collections}${id}`,
                method: Methods.get,
            }),
            providesTags: ['Collection'],
        }),
        createCollection: builder.mutation<Collection, CollectionRequestBody>({
            query: (collection) => ({
                url: `${Endpoints.collections}my`,
                method: Methods.post,
                body: collection,
            }),
            invalidatesTags: ['Collection'],
        }),
        deleteCollection: builder.mutation<Collection, string>({
            query: (id: string) => ({
                url: `${Endpoints.collections}${id}`,
                method: Methods.delete,
            }),
            invalidatesTags: ['Collection', 'Item'],
        }),
        updateCollection: builder.mutation<Collection, Collection>({
            query: (collection: Collection) => ({
                url: `${Endpoints.collections}${collection._id}`,
                method: Methods.put,
                body: collection,
            }),
            invalidatesTags: ['Collection', 'Item'],
        }),
    }),
});

export const {
    useGetAllCollectionsQuery,
    useGetCollectionsQuery,
    useCreateCollectionMutation,
    useDeleteCollectionMutation,
    useGetCollectionByIdQuery,
    useUpdateCollectionMutation,
    useGetTopCollectionsQuery,
} = collectionApiSlice;
