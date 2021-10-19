import { store } from './redux/store';
import App from './App';
import { Provider } from 'react-redux';

export const AppWrapper = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}