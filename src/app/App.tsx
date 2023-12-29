import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header/header';
import Router from './router';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-200 dark:bg-gray-800 flex flex-col dark:text-white">
                <Header />
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
