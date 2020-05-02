// Action Types
const CREATE_LIST = 'CREATE_LIST';
const REMOVE_LIST = 'REMOVE_LIST';

// Action Creators
export const createList = name => ({
    type: CREATE_LIST,
    payload: { name }
});

export const removeList = listId => ({
    type: REMOVE_LIST,
    payload: { listId }
});

export const actionTypes = {
    CREATE_LIST,
    REMOVE_LIST,
};
