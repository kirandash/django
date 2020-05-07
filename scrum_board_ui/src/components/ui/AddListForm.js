import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const AddForm = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    margin: 0 1rem 0 0;
    flex 0 0 400px;
`;

const Button = styled.button`
    background: green;
    color: white;
`;

const AddListForm = (props) => {
    const [listName, setListName] = useState('');
    return (
        <AddForm>
            <Input type="text" value={listName} placeholder="Enter List name" onChange={e => setListName(e.target.value)} />
            <Button onClick={() => {
                const isDuplicateList = props.lists.some(list => list.name === listName);
                if(listName && !isDuplicateList) { // If there is a title and it's not duplicate
                    props.addList(listName);
                    setListName(''); // Clearing the card title from input for next addition
                }
            }}
            >Add List</Button>
            {/*listName*/}
        </AddForm>
    );
}

export default AddListForm;