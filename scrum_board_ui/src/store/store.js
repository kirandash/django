import {
    createStore, // Fn that Helps creating a Store using reducer
    combineReducers // Fn that Helps combining multiple reducers in a form that the result can be passed to createStore fn
} from 'redux';

const reducers = {}; // Will contain list of all reducers in our app

const rootReducer = combineReducers(reducers); // Combines all our reducers in a form that can be passed to createStore fn

export const configureStore = () => createStore(rootReducer); // Create configureStore: The root centralized store of our App
