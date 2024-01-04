import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import AuthProvider from './autg0Provider';
import Router from './router';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="min-h-screen bg-main flex flex-col overflow-x-hidden">
                    <Header />
                    <Router />
                    <Footer />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
