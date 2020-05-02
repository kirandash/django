import { actionTypes } from '../actions/card';
import { actionTypes as listActionTypes } from '../actions/list';

const {
    CREATE_CARD,
    REMOVE_CARD,
} = actionTypes; // Destructuring actionTypes to get our imported action types

const {
    CREATE_LIST,
    REMOVE_LIST,
} = listActionTypes; 

// Creating a reducer lists for the global state/store
export const lists = (state = [], action) => { // Initial state is mentioned as an empty array to avoid any error in case, the state passed is not having any data
    const { type, payload } = action; // Get Action Type and payload from the action (By destructuring)
    switch(type) {
        case CREATE_LIST: {
            const { name } = payload;
            const newList = {
                name: name,
                cards: []
            };
            return state.concat(newList);
        }
        case REMOVE_LIST: {
            const { name } = payload;
            return state.filter(list => list.name !== name);
        }
        case CREATE_CARD: {
            const { title, listId } = payload;
            const newCard = {
                title: title
            };
            return state.lists[listId].cards.push(newCard);
        }
        case REMOVE_CARD: {
            const { title, listId } = payload;
            return state.lists[listId].cards.filter(card => card.title !== title); // Remove card with card title - temporary implementation. Better to remove card using card id instead. As: we might have duplicate card titles.
        }
        default: {
            return state; // For any action other than the actions mentioned above, we will return the state as is without any modification
        }
    }
} // This will create lists property in global store/state Ex: store { lists: {.....} }