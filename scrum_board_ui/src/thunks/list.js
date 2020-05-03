import { loadListsInProgress, loadListsSuccess, loadListsFailure } from '../actions/list';

export const loadLists = () => async(dispatch, getState) => { // loadLists is a thunk: A fn which calls another fn which performs a particular task. The 2nd fn is an async fn which takes 2 args: dispatch, to dispatch actions and getState to get current state of app
    try {
        dispatch(loadListsInProgress()); // Dispatch In Progress action
        const response = await fetch('http://127.0.0.1:8000/mainboard/lists'); // Calling lists API from Django server
        const lists = response.json(); // Get the response in JSON format (Mandatory with fetch calls. Not required when we use addons like Axios to do API calls)
        dispatch(loadListsSuccess(lists)); // dispatch success action
    } catch(e) {
        dispatch(loadListsFailure);
        alert(e);
    }
}