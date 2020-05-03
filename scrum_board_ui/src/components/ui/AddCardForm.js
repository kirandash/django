import React, {useState} from 'react';

const AddCardForm = (props) => {
    const [cardTitle, setCardTitle] = useState('');
    const { list, listId } = props;
    return (
        <div>
            <input value={cardTitle} type="text" placeholder="Enter Card Title" onChange={e => setCardTitle(e.target.value)} />
            <button onClick={() => {
                const isDuplicateCard = list.cards.some(card => card.title === cardTitle);
                if(cardTitle && !isDuplicateCard) { // If there is a title and it's not duplicate
                    props.addCard(cardTitle, listId);
                    setCardTitle(''); // Clearing the card title from input for next addition
                }
            }}>Add Card to: {list.name}</button>
        </div>
    );
};

export default AddCardForm;