import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header/header';
import Router from './router';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-main flex flex-col">
                <Header />
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
