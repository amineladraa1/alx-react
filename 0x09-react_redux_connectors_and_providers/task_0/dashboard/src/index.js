import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { uiReducer } from './reducers/uiReducer';

const store = createStore(uiReducer);

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
