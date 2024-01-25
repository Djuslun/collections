/* eslint-disable react/jsx-no-useless-fragment */
import EmptyState from 'components/emptyStates/emptyState';
import { IComment } from 'ts/interfaces';
import Comment from './comment';

function CommentList({
    comments,
    deleteComment,
}: {
    comments: IComment[];
    deleteComment: (id: string) => void;
}) {
    return (
        <>
            {comments.length ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment._id}>
                            <Comment
                                comment={comment}
                                deleteComment={() => deleteComment(comment._id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <EmptyState translationKey="comment" />
            )}
        </>
    );
}

export default CommentList;
