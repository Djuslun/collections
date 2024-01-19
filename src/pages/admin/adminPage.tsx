import { useGetAllUsersQuery } from 'store/api/userApiSlice';
import Container from 'ui/container';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import Table from './userTable/usersTable';

function AdminPage() {
    const { data: users, isLoading } = useGetAllUsersQuery();

    return (
        <LoaderWrapper isLoading={isLoading}>
            <Container>{users && <Table userData={users} />}</Container>
        </LoaderWrapper>
    );
}

export default AdminPage;
