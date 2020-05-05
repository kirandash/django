import React from 'react';
import { connect } from 'react-redux';

import ScrumCard from '../ui/ScrumCard';
import { removeCard } from '../../actions/card';

const ScrumCardContainer = (props) => {
    const {cards, listId} = props;
    return (
        <ScrumCard cards={cards} listId={listId} removeCard={props.onRemoveCard} />
    );
}

const mapDispatchToProps = dispatch => ({
    onRemoveCard: (cardId, listId) => dispatch(removeCard(cardId, listId)),
});

export default connect(null, mapDispatchToProps)(ScrumCardContainer);
// export default ScrumCardContainer;