import React from 'react';
import ScrumCardDetailsContainer from '../containers/ScrumCardDetails';

const ScrumCard = (props) => {
    const { cards } = props;
    return (
        <div>
            {cards.length > 0 && <h2>All Cards</h2>}
            {cards.map((card, index) => {
                return (
                    <React.Fragment key={index}>
                        <ScrumCardDetailsContainer card={card} />
                        <button onClick={() => props.removeCard(card)}>Remove Card</button>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default ScrumCard;