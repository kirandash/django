import React from 'react';
import { connect } from 'react-redux';

import AddCardForm from '../ui/AddCardForm';
// import { createCard } from '../../actions/card';
import { createCard } from '../../thunks/card';

const AddCardFormContainer = (props) => {
    const { list, onAddCard } = props;
    return (
        <AddCardForm list={list} addCard={onAddCard} />
    );
}

const mapDispatchToProps = dispatch => ({
    onAddCard: (title, listId) => dispatch(createCard(title, listId)),
});

export default connect(null, mapDispatchToProps)(AddCardFormContainer);