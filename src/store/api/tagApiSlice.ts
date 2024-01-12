import { Endpoints, Methods } from 'ts/enums';
import { Option, Tag } from 'ts/interfaces';
import api from './apiSlice';

export const itemApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllTags: builder.query<Tag[], void>({
            query: () => ({
                url: `${Endpoints.tags}`,
                method: Methods.get,
            }),
            providesTags: ['Tag'],
        }),
        getTagsByIdsArray: builder.query<Tag[], string[]>({
            query: (ids: string[]) => ({
                url: `${Endpoints.tags}item`,
                method: Methods.get,
                body: ids,
            }),
            providesTags: ['Tag'],
        }),
        getTagById: builder.query<Tag, string>({
            query: (tagId: string) => ({
                url: `${Endpoints.tags}${tagId}`,
                method: Methods.get,
            }),
            providesTags: ['Tag'],
        }),
        createTag: builder.mutation<Tag[], string[]>({
            query: (tags: string[]) => ({
                url: `${Endpoints.tags}new`,
                method: Methods.post,
                body: tags,
            }),
            invalidatesTags: ['Tag', 'Item'],
        }),
        deleteTag: builder.mutation<Tag, string>({
            query: (tagId: string) => ({
                url: `${Endpoints.tags}${tagId}`,
                method: Methods.delete,
            }),
            invalidatesTags: ['Tag'],
        }),
    }),
});

export const {
    useGetAllTagsQuery,
    useCreateTagMutation,
    useDeleteTagMutation,
    useGetTagByIdQuery,
    useGetTagsByIdsArrayQuery,
} = itemApiSlice;
