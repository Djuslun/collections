import { useAuth0 } from '@auth0/auth0-react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import { IComment } from 'ts/interfaces';

function Comment({
    comment,
    deleteComment,
}: {
    comment: IComment;
    deleteComment: (id: string) => void;
}) {
    const { user } = useAuth0();
    const { t } = useTranslation('translation', { keyPrefix: 'comment' });
    const date = new Date(comment.createdAt).toLocaleString().split(',');

    return (
        <div className="flex items-center border-with-shadow  p-2 my-2">
            <div className="w-full flex gap-2 items-center" key={comment._id}>
                <img
                    src={comment.userAvatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="object-contain w-12 h-12 rounded-sm"
                />
                <div className="w-full">
                    <div className="border-b border-gray-400">
                        {`${comment.userName} ${t('commented')} `}
                        {`${date[0]} ${t('commentedAt')} ${date[1]}`}
                    </div>
                    <pre className="font-sans text-wrap">{comment.comment}</pre>
                </div>
            </div>
            {user?.sub === comment.userId && (
                <button
                    aria-label="delete comment"
                    type="button"
                    className="hover:scale-125 transition-all text-3xl leading-none"
                >
                    <DeleteIcon
                        fontSize="inherit"
                        onClick={() => deleteComment(comment._id)}
                        className="cursor-pointer text-blue-600 dark:hover:fill-blue-400 hover:fill-blue-800 "
                    />
                </button>
            )}
        </div>
    );
}

export default Comment;
