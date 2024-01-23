import { useDeleteUsersMutation } from 'store/api/userApiSlice';
import Loader from 'ui/loader/loader';

function DeleteUsersButton({ userIds }: { userIds: string[] }) {
    const [deleteUsers, { isLoading }] = useDeleteUsersMutation();
    return (
        <>
            <button
                type="button"
                className="button border-with-shadow"
                onClick={() => deleteUsers(userIds)}
            >
                Delete users
            </button>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default DeleteUsersButton;
