import { useAppSelector } from 'store/useRedux';
import Container from 'ui/container';
import MyCollectionList from './myCollectionList/myCollectionList';
import NewCollectionButton from './newCollectionButton';
import UserInfo from './userInfo/userInfo';

function ProfilePage() {
    const { user } = useAppSelector((store) => store.user);

    return (
        <Container>
            <div className="pt-5 mb-4">
                {user && <UserInfo user={user} />}
                <NewCollectionButton />
            </div>
            <MyCollectionList />
        </Container>
    );
}

export default ProfilePage;
