import React, {useState} from 'react';

import styled from 'styled-components';

// Styled Components
const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin: 0 0 1rem;
    }
    & > textarea {
        padding: 0.5rem 1rem;
    }
    & > button {
        background: green;
        color: white;
    }
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    & > label {
        flex: 0 0 40px;
    }
    & > input {
        flex: 1 0 auto;
    }
`;

const ScrumCardDetails = (props) => {
    const { card } = props;
    const [editMode, setEditMode] = useState(false);
    const [cardDetails, setCardDetails] = useState({
        id: card.id,
        title: card.title,
        description: card.description,
        list: card.list
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setCardDetails( prevState => ({
           ...prevState,
           [name]: value 
        }))
    }

    return (
        <React.Fragment>
            {!editMode && <CardDetails onClick={() => setEditMode(true)}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </CardDetails>}
            {editMode && <CardDetails>
                <TitleWrap>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={cardDetails.title} />
                </TitleWrap>
                <textarea name="description" placeholder="Enter Description" onChange={handleChange} value={cardDetails.description}></textarea>
                <button onClick={() => {
                    props.saveCard(cardDetails);
                    setEditMode(false);
                }}>Save</button>
            </CardDetails>}
        </React.Fragment>
    );
};

export default ScrumCardDetails;