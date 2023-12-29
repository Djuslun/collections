import Header from 'components/header/header';
import Router from './router';

function App() {
    return (
        <div className="min-h-screen bg-slate-200 dark:bg-gray-800 flex flex-col dark:text-white">
            <Header />
            <Router />
        </div>
    );
}

export default App;
