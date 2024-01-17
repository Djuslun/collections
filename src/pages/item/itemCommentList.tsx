import {
    useDeleteCommentMutation,
    useGetAllCommentsByItemIdQuery,
} from 'store/api/commentApiSlice';
import CommentList from 'components/comment/commentList';
import Loader from 'ui/loader/loader';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function ItemCommentList({ itemId }: { itemId: string }) {
    const { isLoading: isCommentsLoading, data: comments } =
        useGetAllCommentsByItemIdQuery(itemId, { pollingInterval: 8000 });

    const [deleteComment, { isLoading: isCommentDeleting }] = useDeleteCommentMutation();

    return (
        <LoaderWrapper isLoading={isCommentsLoading}>
            {comments && (
                <CommentList comments={comments} deleteComment={deleteComment} />
            )}
            <Loader isLoading={isCommentDeleting} />
        </LoaderWrapper>
    );
}

export default ItemCommentList;
