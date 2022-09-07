import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import UserStatusProvider from './utils/UserStatusProvider';
import { persistor, store } from 'Store/store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.Suspense fallback={<div>MIMITALE</div>}>
    <Provider store={store}>
      <UserStatusProvider>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Router>
            <App />
          </Router>
        {/* </PersistGate> */}
      </UserStatusProvider>
    </Provider>
  </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
