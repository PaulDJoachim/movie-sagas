import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';






// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('GET_MOVIES', getMovies);
  yield takeEvery('EDIT_MOVIE', editMovie);
  // yield takeEvery('GET_GENRES', getGenres);
}

function* getMovies(){
  //us try/catch for errors - replaces promise .then & .catch
  try {
    const response = yield axios.get('/movies');
    // in Sagas, replace `dispatch` with `put`
    yield put({ type: 'SET_MOVIES', payload: response });
    console.log('response from getMovies saga', response)
  } catch (error) {
      console.log('error with movie get request', error);
  }
}


// sends edit info to database
function* editMovie(action){
  //us try/catch for errors - replaces promise .then & .catch
  try {
    const response = yield axios.put('/movies', action.payload);
    // yield put({ type: 'SET_MOVIES', payload: response });
  } catch (error) {
      console.log('error with movie edit request', error);
  }
}


// function* getGenres(action){
//   try {
//     const response = yield axios.put('/movies/genre', action);
//     // in Sagas, replace `dispatch` with `put`
//     yield put({ type: 'SET_GENRES', payload: response });
//     console.log('response from getMovies saga', response)
//   } catch (error) {
//       console.log('error with movie get request', error);
//   }
// }



/// REDUCERS ///

// Used to store all movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload.data;
        default:
            return state;
    }
}

// Used to store details about a single movie selected by the user
const details = (state = {array_agg: []}, action) => {
  switch (action.type) {
      case 'SET_DETAIL':
          return action.payload;
      default:
          return state;
  }
}

// Used to store the movie genres
// const genres = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_GENRES':
//             return action.payload;
//         default:
//             return state;
//     }
// }



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
