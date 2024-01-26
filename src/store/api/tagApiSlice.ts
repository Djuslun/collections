import { Endpoints, Methods } from 'ts/enums';
import { ITag } from 'ts/interfaces';
import api from './apiSlice';

export const itemApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllTags: builder.query<ITag[], void>({
            query: () => ({
                url: `${Endpoints.tags}`,
                method: Methods.get,
            }),
            providesTags: ['Tag'],
        }),
        getTagById: builder.query<ITag, string>({
            query: (tagId: string) => ({
                url: `${Endpoints.tags}${tagId}`,
                method: Methods.get,
            }),
            providesTags: ['Tag'],
        }),
        createTag: builder.mutation<ITag[], string[]>({
            query: (tags: string[]) => ({
                url: `${Endpoints.tags}new`,
                method: Methods.post,
                body: tags,
            }),
            invalidatesTags: ['Tag', 'Item'],
        }),
        deleteTag: builder.mutation<ITag, string>({
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
} = itemApiSlice;
