import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import React from 'react';
import { composeWithDevTools } from "redux-devtools-extension";
import './App.css';
import Stats from './components/stats';
import AddPlayerForm from './components/AddPlayerForm';
import AddTeamForm from './components/AddTeamForm';
import AddMatchForm from './components/AddMatchForm';

function App() {
  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(ReduxThunk)
  ));
  return (
    <Provider store={store}>
      <AddTeamForm />
      <AddMatchForm />
      <AddPlayerForm />
      <Stats />
    </Provider>
  );
}

export default App;
