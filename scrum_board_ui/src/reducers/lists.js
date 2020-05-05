import { actionTypes } from '../actions/card';
import { actionTypes as listActionTypes } from '../actions/list';

const {
    CREATE_CARD,
    REMOVE_CARD,
} = actionTypes; // Destructuring actionTypes to get our imported action types

const {
    CREATE_LIST,
    REMOVE_LIST,
    LOAD_LISTS_IN_PROGRESS,
    LOAD_LISTS_SUCCESS,
    LOAD_LISTS_FAILURE,
} = listActionTypes; 

// Creating a reducer lists for the global state/store
export const lists = (initialListsState = { isLoading: false, data: [] }, action) => { // Initial state is mentioned as an empty array to avoid any error in case, the state passed is not having any data
    const { type, payload } = action; // Get Action Type and payload from the action (By destructuring)
    switch(type) {
        case CREATE_LIST: {
            const { name } = payload;
            const newList = {
                name: name,
                cards: []
            };
            return {
                ...initialListsState, // rest of the state untouched
                data: initialListsState.data.concat(newList)
            };
        }
        case REMOVE_LIST: {
            const { listId } = payload;
            // return initialListsState.filter(list => list.name !== name); // Filtering based on name - not recommended since we might have duplicate names
            return {
                ...initialListsState, // rest of the state untouched
                data: initialListsState.data.filter((list,index) => index !== listId)
            }; // Filtering based on ID
        }
        case CREATE_CARD: {
            const { title, listId } = payload;
            const newCard = {
                title: title
            };
            return {
                ...initialListsState, // rest of the state untouched
                data: [
                    ...initialListsState.data.slice(0, listId), // all objects before target object
                    {
                        name: initialListsState.data[listId].name,
                        cards: initialListsState.data[listId].cards.concat(newCard)
                    }, // target object in lists array to update
                    ...initialListsState.data.slice(listId + 1) // all objects after target object
                ]
            }; // lists array
        }
        case REMOVE_CARD: {
            const { cardId, listId } = payload;
            return {
                ...initialListsState, // rest of the state untouched
                data: [
                    ...initialListsState.data.slice(0, listId), // all objects before target object
                    {
                        name: initialListsState.data[listId].name,
                        cards: initialListsState.data[listId].cards.filter((card,index) => index !== cardId)
                    },
                    ...initialListsState.data.slice(listId + 1) // all objects after target object
                ]
            }
            // initialListsState[listId].cards.filter((card,index) => index !== cardId); // Remove card with card title - temporary implementation. Better to remove card using card id instead. As: we might have duplicate card titles.
        }
        case LOAD_LISTS_SUCCESS: {
            return {
                ...initialListsState, // rest of the state untouched
                isLoading: false, // API finished loading
                data: payload.lists // API data assigned to state.lists.data
            }
        }
        case LOAD_LISTS_IN_PROGRESS: {
            return {
                ...initialListsState, // rest of the state untouched
                isLoading: true, // API still loading
            }
        }
        case LOAD_LISTS_FAILURE: {
            return {
                ...initialListsState, // rest of the state untouched
                isLoading: false, // API Finished loading
            }
        }
        default: {
            return initialListsState; // For any action other than the actions mentioned above, we will return the state as is without any modification
        }
    }
} // This will create lists property in global store/state Ex: store { lists: {.....} }