import React, {useState} from 'react';

import ScrumCardContainer from '../containers/ScrumCard';

const ScrumList = (props) => {
    const { lists } = props;
    const [cardTitle, setCardTitle] = useState('');
    return (
        <div>
            <h3>Lists</h3>
            {lists.map((list, index) => {
                return (
                    <div key={index}>
                        <h3>{list.name}</h3>
                        <ScrumCardContainer cards={list.cards}/>
                        <div>
                            <input value={cardTitle} type="text" placeholder="Enter Card Title" onChange={e => setCardTitle(e.target.value)} />
                            <button onClick={() => {
                                props.addCard(list.title, index)
                            }}>Add Card to: {list.name}</button>
                        </div>
                        {/* cardTitle */}
                    </div>
                )
            })}
        </div>
    );
}

export default ScrumList;