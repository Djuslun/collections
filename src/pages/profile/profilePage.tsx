import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import Container from 'ui/container';
import MyCollectionList from './myCollectionList/myCollectionList';
import NewCollectionButton from './newCollectionButton';
import UserInfo from './userInfo/userInfo';
import UserInfoSkeleton from './userInfo/userInfoSkeleton';

function ProfilePage() {
    const { user, isLoading, isAuthenticated } = useAuth0();

    if ((!user || !isAuthenticated) && !isLoading) {
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <div className="pt-5 mb-4">
                {isLoading && <UserInfoSkeleton />}
                {user && <UserInfo user={user} />}
                <NewCollectionButton />
            </div>
            <MyCollectionList />
        </Container>
    );
}

export default ProfilePage;
