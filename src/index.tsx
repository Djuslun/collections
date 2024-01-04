import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './redux/store';
import './styles/drop-zone.scss';
import './styles/index.scss';
import './styles/md-editor.scss';
import './styles/react-select.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
