// Action Types
const CREATE_LIST = 'CREATE_LIST';
const REMOVE_LIST = 'REMOVE_LIST';

const LOAD_LISTS_IN_PROGRESS = 'LOAD_LISTS_IN_PROGRESS';
const LOAD_LISTS_SUCCESS = 'LOAD_LISTS_SUCCESS';
const LOAD_LISTS_FAILURE = 'LOAD_LISTS_FAILURE';

const CREATE_LIST_IN_PROGRESS = 'CREATE_LIST_IN_PROGRESS';
const CREATE_LIST_SUCCESS = 'CREATE_LIST_SUCCESS';
const CREATE_LIST_FAILURE = 'CREATE_LIST_FAILURE';

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
    payload: { lists } // Reducer will receive lists in payload.lists
});

export const loadListsFailure = () => ({
    type: LOAD_LISTS_FAILURE
});

// Create List API: Action Creators
export const createListInProgress = () => ({
    type: CREATE_LIST_IN_PROGRESS,
});

export const createListSuccess = lists => ({
    type: CREATE_LIST_SUCCESS,
    payload: { lists } // Reducer will receive lists in payload.lists
});

export const createListFailure = () => ({
    type: CREATE_LIST_FAILURE
});

export const actionTypes = {
    CREATE_LIST,
    REMOVE_LIST,
    LOAD_LISTS_IN_PROGRESS,
    LOAD_LISTS_SUCCESS,
    LOAD_LISTS_FAILURE,
    CREATE_LIST_IN_PROGRESS,
    CREATE_LIST_SUCCESS,
    CREATE_LIST_FAILURE,
};
