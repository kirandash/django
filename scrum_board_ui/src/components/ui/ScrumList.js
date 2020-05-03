import React from 'react';

import ScrumCardContainer from '../containers/ScrumCard';
import AddCardFormContainer from '../containers/AddCardForm';

const ScrumList = (props) => {
    const { lists } = props;
    return (
        <div>
            {lists.length > 0 && <h3>All Lists</h3>}
            {lists.map((list, index) => {
                return (
                    <div key={index}>
                        <h3>{list.name}</h3>
                        <ScrumCardContainer cards={list.cards} listId={index} />
                        <AddCardFormContainer list={list} listId={index} />
                        {/* cardTitle */}
                        <button onClick={() => props.removeList(index)}>Remove {list.name}</button>
                    </div>
                )
            })}
        </div>
    );
}

export default ScrumList;