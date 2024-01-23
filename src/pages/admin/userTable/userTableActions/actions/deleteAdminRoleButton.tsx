import { useDeleteUserAdminRoleMutation } from 'store/api/userApiSlice';
import Loader from 'ui/loader/loader';

function DeleteAdminRoleButton({ userIds }: { userIds: string[] }) {
    const [deleteAdminRole, { isLoading }] = useDeleteUserAdminRoleMutation();
    return (
        <>
            <button
                type="button"
                className="button border-with-shadow"
                onClick={() => deleteAdminRole(userIds)}
            >
                Delete admin role
            </button>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default DeleteAdminRoleButton;
