/* eslint-disable react/jsx-no-useless-fragment */
import AddAdminRoleButton from './addAdminRoleButton';
import DeleteAdminRoleButton from './deleteAdminRoleButton';

function AdminRoleButton({ userId, isAdmin }: { userId: string; isAdmin: boolean }) {
    return (
        <>
            {isAdmin ? (
                <DeleteAdminRoleButton userId={userId} />
            ) : (
                <AddAdminRoleButton userId={userId} />
            )}
        </>
    );
}

export default AdminRoleButton;
