// Assigning Action Type strings to  constants to avoid typo
const CREATE_CARD = 'CREATE_CARD'; // Action Type
const REMOVE_CARD = 'REMOVE_CARD'; // Action Type

export const actionTypes = {
    CREATE_CARD,
    REMOVE_CARD
}; // Export Action Types so that it can be imported in other files

// CREATE_CARD Action Creator
export const createCard = (title, listId) => ({
    type: CREATE_CARD, // Type here can be the string 'CREATE_CARD' but it will increase chances of typo. Thus, we are creating a constant first. So if constant is spelled wrong, our editor will throw warning
    payload: { title, listId }
}); // Action Creator: A fn that returns 2 params: type of action and payload

// REMOVE_CARD Action Creator
export const removeCard = (title, listId) => ({
    type: REMOVE_CARD,
    payload: { title, listId }
}); // Action Creator: A fn that returns 2 params: type of action and payload