import rootReducer from './reducers';//Import the combined Reducers
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

//Save the state to local storage on the browser
const saveState = (DefaultState) => {
    try {
        const serializedState = JSON.stringify(DefaultState);
        localStorage.setItem('MyLocalState', serializedState);
    } catch (error) {

    }
}

//Load the state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('MyLocalState');
        if (serializedState == null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}


const savedLocalState = loadState();//Gets the locally saved state

//If the state is not saved locally initialize it else load state from local storage
const store = createStore(rootReducer, savedLocalState, applyMiddleware(thunkMiddleware));
export { store };

store.subscribe(() => {
    /*
    Subscribe to Store changes
    This function saves the state to the local storage as changes occur
    */
    saveState(store.getState());//Saves the current state
});