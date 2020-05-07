import React from 'react';
import { connect } from 'react-redux';

import ScrumCardDetails from '../ui/ScrumCardDetails';
import { updateCard } from '../../thunks/card';

const ScrumCardDetailsContainer = ({ card, onSaveCard }) => (
    <ScrumCardDetails card={card} saveCard={onSaveCard} />
);

const mapDispatchToProps = dispatch => ({
    onSaveCard: cardDetails => dispatch(updateCard(cardDetails))
})

export default connect(null, mapDispatchToProps)(ScrumCardDetailsContainer);
// export default ScrumCardDetailsContainer;
