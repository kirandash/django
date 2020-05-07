import { 
    createCardInProgress, 
    createCardSuccess,
    createCardFailure,
    updateCardInProgress,
    updateCardSuccess,
    updateCardFailure,
    deleteCardInProgress,
    deleteCardSuccess,
    deleteCardFailure,
 } from '../actions/card';

export const createCard = (title, id) => async(dispatch, getState) => {
    try {
        dispatch(createCardInProgress());
        const response = await fetch('http://127.0.0.1:8000/mainboard/cards/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                list: id
            })
        });
        const card = await response.json();
        dispatch(createCardSuccess(card));
    } catch(e) {
        dispatch(createCardFailure());
    }
};

export const updateCard = (card) => async(dispatch, getState) => {
    const { id } = card;
    try {
        dispatch(updateCardInProgress());
        const response = await fetch(`http://127.0.0.1:8000/mainboard/cards/${id}/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(card)
        });
        const cardDetails = await response.json();
        dispatch(updateCardSuccess(cardDetails));
    } catch(e) {
        dispatch(updateCardFailure());
    }
}

export const deleteCard = (card) => async(dispatch, getState) => {
    const { id: cardId } = card;
    try {
        dispatch(deleteCardInProgress());
        const response = await fetch(`http://127.0.0.1:8000/mainboard/cards/${cardId}/`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: cardId
            })
        }); // Delete Request does not return any payload
        dispatch(deleteCardSuccess(card));
    } catch(e) {
        dispatch(deleteCardFailure())
    }
}
