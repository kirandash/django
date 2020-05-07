import React from 'react';
import { connect } from 'react-redux';

import ScrumCard from '../ui/ScrumCard';
// import { removeCard } from '../../actions/card';
import { deleteCard } from '../../thunks/card';

const ScrumCardContainer = (props) => {
    const {cards} = props;
    return (
        <ScrumCard cards={cards} removeCard={props.onRemoveCard} />
    );
}

const mapDispatchToProps = dispatch => ({
    onRemoveCard: (card) => dispatch(deleteCard(card)),
});

export default connect(null, mapDispatchToProps)(ScrumCardContainer);
// export default ScrumCardContainer;