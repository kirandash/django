import React from 'react';

const ScrumCard = (props) => {
    const { cards } = props;
    return (
        <div>
            {cards.length > 0 && <h2>All Cards</h2>}
            {cards.map((card, index) => {
                return (<div key={index}>
                    <h3>{card.title}</h3>
                    <p>More Card details here</p>
                    <button>Remove Card</button>
                </div>);
            })}
        </div>
    );
}

export default ScrumCard;