import { useAddUserAdminRoleMutation } from 'store/api/userApiSlice';
import Loader from 'ui/loader/loader';

function AddAdminRoleButton({ userIds }: { userIds: string[] }) {
    const [addAdminRole, { isLoading }] = useAddUserAdminRoleMutation();
    return (
        <>
            <button
                type="button"
                className="button border-with-shadow"
                onClick={() => addAdminRole(userIds)}
            >
                Add admin role
            </button>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default AddAdminRoleButton;
