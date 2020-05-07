// Assigning Action Type strings to  constants to avoid typo
const CREATE_CARD = 'CREATE_CARD'; // Action Type
const REMOVE_CARD = 'REMOVE_CARD'; // Action Type

const CREATE_CARD_IN_PROGRESS = 'CREATE_CARD_IN_PROGRESS';
const CREATE_CARD_SUCCESS = 'CREATE_CARD_SUCCESS';
const CREATE_CARD_FAILURE = 'CREATE_CARD_FAILURE';

const UPDATE_CARD_IN_PROGRESS = 'UPDATE_CARD_IN_PROGRESS';
const UPDATE_CARD_SUCCESS = 'UPDATE_CARD_SUCCESS';
const UPDATE_CARD_FAILURE = 'UPDATE_CARD_FAILURE';

const DELETE_CARD_IN_PROGRESS = 'DELETE_CARD_IN_PROGRESS';
const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
const DELETE_CARD_FAILURE = 'DELETE_CARD_FAILURE';

export const actionTypes = {
    CREATE_CARD,
    REMOVE_CARD,
    CREATE_CARD_IN_PROGRESS,
    CREATE_CARD_SUCCESS,
    CREATE_CARD_FAILURE,
    UPDATE_CARD_IN_PROGRESS,
    UPDATE_CARD_SUCCESS,
    UPDATE_CARD_FAILURE,
    DELETE_CARD_IN_PROGRESS,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_FAILURE,
}; // Export Action Types so that it can be imported in other files

// CREATE_CARD Action Creator
export const createCard = (title, listId) => ({
    type: CREATE_CARD, // Type here can be the string 'CREATE_CARD' but it will increase chances of typo. Thus, we are creating a constant first. So if constant is spelled wrong, our editor will throw warning
    payload: { title, listId }
}); // Action Creator: A fn that returns 2 params: type of action and payload

// REMOVE_CARD Action Creator
export const removeCard = (cardId, listId) => ({
    type: REMOVE_CARD,
    payload: { cardId, listId }
}); // Action Creator: A fn that returns 2 params: type of action and payload

// CREATE_CARD API Action Creators
export const createCardInProgress = () => ({
    type: CREATE_CARD_IN_PROGRESS
});

export const createCardSuccess = (card) => ({
    type: CREATE_CARD_SUCCESS,
    payload: { card }
});

export const createCardFailure = () => ({
    type: CREATE_CARD_FAILURE
});

// UPDATE_CARD API Action Creators
export const updateCardInProgress = () => ({
    type: UPDATE_CARD_IN_PROGRESS
});

export const updateCardSuccess = (card) => ({ // Card payload will come from thunk/API. So check beforehand the payload structure
    type: UPDATE_CARD_SUCCESS,
    payload: { card }
});

export const updateCardFailure = () => ({
    type: UPDATE_CARD_FAILURE
});

// DELETE_CARD API Action Creators
export const deleteCardInProgress = () => ({
    type: DELETE_CARD_IN_PROGRESS
});

export const deleteCardSuccess = (card) => ({
    type: DELETE_CARD_SUCCESS,
    payload: { card }
});

export const deleteCardFailure = () => ({
    type: DELETE_CARD_FAILURE
});
