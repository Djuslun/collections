import { Endpoints, Methods } from 'ts/enums';
import { CommentRequestBody, IComment } from 'ts/interfaces';
import api from './apiSlice';

export const collectionApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCommentsByItemId: builder.query<IComment[], string>({
            query: (itemId: string) => ({
                url: `${Endpoints.comments}${itemId}`,
                method: Methods.get,
            }),
            providesTags: ['Comment'],
        }),
        createComment: builder.mutation<IComment, CommentRequestBody>({
            query: (comment: CommentRequestBody) => ({
                url: `${Endpoints.comments}`,
                method: Methods.post,
                body: comment,
            }),
            invalidatesTags: ['Comment'],
        }),
        deleteComment: builder.mutation<IComment, string>({
            query: (commentId: string) => ({
                url: `${Endpoints.comments}${commentId}`,
                method: Methods.delete,
            }),
            invalidatesTags: ['Comment'],
        }),
    }),
});

export const {
    useCreateCommentMutation,
    useGetAllCommentsByItemIdQuery,
    useDeleteCommentMutation,
} = collectionApiSlice;
