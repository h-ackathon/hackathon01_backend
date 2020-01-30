import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import React from 'react';
import { composeWithDevTools } from "redux-devtools-extension";
import './App.css';
import Router from './components/Router';

function App() {
  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(ReduxThunk)
  ));
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
