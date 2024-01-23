import AddAdminRoleButton from './actions/addAdminRoleButton';
import DeleteAdminRoleButton from './actions/deleteAdminRoleButton';
import DeleteUsersButton from './actions/deleteUsersButton';

function UserTableActions({ userIds }: { userIds: string[] }) {
    return (
        <div className="flex gap-2 mb-4">
            <AddAdminRoleButton userIds={userIds} />
            <DeleteAdminRoleButton userIds={userIds} />
            <DeleteUsersButton userIds={userIds} />
        </div>
    );
}

export default UserTableActions;
