import React from 'react';
import styled from 'styled-components';

import ScrumCardContainer from '../containers/ScrumCard';
import AddCardFormContainer from '../containers/AddCardForm';

// Styled Components
const Header = styled.h2`
    text-align: center;
    color: white;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const List = styled.div`
    flex: 0 0 20%;
    padding: 1rem;
    margin: 1rem;
    background: #ebecf0;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
`;

const AddCardWrapper = styled.div`
    margin-bottom: auto;
`; // Push following elements to the bottom - In our case the remove button after add card form is pushed all the way down

const Button = styled.button`
    background: red;
    color: white;
    margin-top: 1rem;
`;

const ScrumList = (props) => {
    const { lists } = props;
    return (
        <div>
            {lists.length > 0 && <Header>All Lists</Header>}
            <ListWrapper>
                {lists.map((list, index) => {
                    return (
                        <List key={index}>
                            <h3>{list.name}</h3>
                            <ScrumCardContainer cards={list.cards} listId={list.id} />
                            <AddCardWrapper>
                                <AddCardFormContainer list={list} />
                            </AddCardWrapper>
                            {/* cardTitle */}
                            <Button onClick={() => props.removeList(list.id)}>Remove {list.name}</Button>
                        </List>
                    )
                })}
            </ListWrapper>
        </div>
    );
}

export default ScrumList;