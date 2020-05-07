import React, {useState} from 'react';
import styled from 'styled-components';

// Styled Components
const CardForm = styled.div`
    display: flex;
    flex-direction: column;
    & > input, button {
        margin: 0 0 0.5rem;
    }
`; // Be careful while adding styles to elements in styled components. It will be applied to all the child components as well. Better to add direct descendant using >

const Button = styled.button`
    background: green;
    color: white;
`;

const AddCardForm = (props) => {
    const [cardTitle, setCardTitle] = useState('');
    const { list } = props;
    return (
        <CardForm>
            <input value={cardTitle} type="text" placeholder="Enter Card Title" onChange={e => setCardTitle(e.target.value)} />
            <Button onClick={() => {
                const isDuplicateCard = list.cards.some(card => card.title === cardTitle);
                if(cardTitle && !isDuplicateCard) { // If there is a title and it's not duplicate
                    props.addCard(cardTitle, list.id);
                    setCardTitle(''); // Clearing the card title from input for next addition
                }
            }}>Add Card to: {list.name}</Button>
        </CardForm>
    );
};

export default AddCardForm;