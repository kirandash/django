// Action Types
const CREATE_LIST = 'CREATE_LIST';
const REMOVE_LIST = 'REMOVE_LIST';

const LOAD_LISTS_IN_PROGRESS = 'LOAD_LISTS_IN_PROGRESS';
const LOAD_LISTS_SUCCESS = 'LOAD_LISTS_SUCCESS';
const LOAD_LISTS_FAILURE = 'LOAD_LISTS_FAILURE';

// Action Creators
export const createList = name => ({
    type: CREATE_LIST,
    payload: { name }
});

export const removeList = listId => ({
    type: REMOVE_LIST,
    payload: { listId }
});

// Load Lists API: Action Creators
export const loadListsInProgress = () => ({
    type: LOAD_LISTS_IN_PROGRESS,
});

export const loadListsSuccess = lists => ({
    type: LOAD_LISTS_SUCCESS,
    payload: { lists }
});

export const loadListsFailure = () => ({
    type: LOAD_LISTS_FAILURE
});

export const actionTypes = {
    CREATE_LIST,
    REMOVE_LIST,
    LOAD_LISTS_IN_PROGRESS,
    LOAD_LISTS_SUCCESS,
    LOAD_LISTS_FAILURE,
};
