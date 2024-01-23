import { GridRowSelectionModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { useGetAllUsersQuery } from 'store/api/userApiSlice';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import UseGetAllUsers from './useGetAllUsers';
import UserTableActions from './userTable/userTableActions/userTableActions';
import Table from './userTable/usersTable';

function AdminPage() {
    const { users, isLoading } = UseGetAllUsers();
    const [userIds, setUserIds] = useState<GridRowSelectionModel | string[]>([]);

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>
                {users && (
                    <>
                        <UserTableActions userIds={userIds as string[]} />
                        <Table
                            userData={users}
                            userIds={userIds}
                            setUserIds={setUserIds}
                        />
                    </>
                )}
            </Container>
        </LoaderWrapper>
    );
}

export default AdminPage;
