import Container from 'ui/container';
import GreetingSection from './greetingSection';
import './mainPage.css';
import TopCollectionList from './topCollectionList/topCollectionList';

function MainPage() {
    return (
        <Container>
            <GreetingSection />
            <TopCollectionList />
        </Container>
    );
}

export default MainPage;
