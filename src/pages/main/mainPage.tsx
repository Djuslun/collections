import { useAppSelector } from 'store/useRedux';
import ErrorSnackBar from 'components/errorSnackBar/errorSnackBar';
import Container from 'ui/container';
import GreetingSection from './greetingSection';
import './mainPage.css';
import RecentItemTable from './recentItemTable/recentItemTable';
import TopCollectionList from './topCollectionList/topCollectionList';

function MainPage() {
    const { message } = useAppSelector((store) => store.error);

    return (
        <Container>
            <div className="flex flex-col gap-4 ">
                <GreetingSection />
                <TopCollectionList />
                <div className="w-full">
                    <RecentItemTable />
                </div>
            </div>
            <ErrorSnackBar isOpen={!!message} message={message} />
        </Container>
    );
}

export default MainPage;
