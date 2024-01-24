import { useAppSelector } from 'store/useRedux';
import ErrorSnackBar from 'components/errorSnackBar/errorSnackBar';
import Container from 'ui/container';
import GreetingSection from './greetingSection';
import './mainPage.css';
import TopCollectionList from './topCollectionList/topCollectionList';

function MainPage() {
    const { message } = useAppSelector((store) => store.error);

    return (
        <Container>
            <GreetingSection />
            <TopCollectionList />
            <ErrorSnackBar isOpen={!!message} message={message} />
        </Container>
    );
}

export default MainPage;
