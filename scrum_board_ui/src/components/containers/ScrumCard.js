import React from 'react';
import ScrumCard from '../ui/ScrumCard';

const ScrumCardContainer = (props) => {
    const {cards} = props;
    return (
        <ScrumCard cards={cards} />
    );
}

export default ScrumCardContainer;