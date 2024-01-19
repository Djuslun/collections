import { useAddUserAdminRoleMutation } from 'store/api/userApiSlice';
import Loader from 'ui/loader/loader';

function AddAdminRoleButton({ userId }: { userId: string }) {
    const [addAdminRole, { isLoading }] = useAddUserAdminRoleMutation();
    return (
        <>
            <button
                type="button"
                className="button border-with-shadow"
                onClick={() => addAdminRole(userId)}
            >
                Add admin role
            </button>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default AddAdminRoleButton;
