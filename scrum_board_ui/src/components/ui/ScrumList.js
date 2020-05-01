import React from 'react';

import ScrumCardContainer from '../containers/ScrumCard';

const ScrumList = (props) => {
    const { lists } = props;
    return (
        <div>
            <h3>Lists</h3>
            {lists.map((list, index) => {
                return (
                    <div key={index}>
                        <h3>{list.name}</h3>
                        <ScrumCardContainer cards={list.cards}/>
                    </div>
                )
            })}
        </div>
    );
}

export default ScrumList;