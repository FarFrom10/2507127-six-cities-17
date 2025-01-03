import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadOffers } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOffers(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
