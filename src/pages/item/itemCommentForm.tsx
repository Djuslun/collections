import { User } from '@auth0/auth0-react';
import { useCreateCommentMutation } from 'store/api/commentApiSlice';
import CommentEditForm from 'components/comment/commentEditForm';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function ItemCommentForm({
    isAuthenticated,
    itemId,
    user,
}: {
    isAuthenticated: boolean;
    itemId: string;
    user: User | undefined;
}) {
    const [createComment, { isLoading: isCommentCreating }] = useCreateCommentMutation();
    // TODO вынести в кастомный хук

    const handleSubmitComment = async (values: string) => {
        const comment = {
            itemId,
            userId: user?.sub,
            userName: user?.nickname,
            userAvatar: user?.picture,
            comment: values,
        };

        createComment(comment).unwrap();
    };

    return (
        <LoaderWrapper isLoading={isCommentCreating}>
            {isAuthenticated && <CommentEditForm handleSubmit={handleSubmitComment} />}
        </LoaderWrapper>
    );
}

export default ItemCommentForm;
