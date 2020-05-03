import React, { useState } from 'react';

const AddListForm = (props) => {
    const [listName, setListName] = useState('');
    return (
        <div>
            <input type="text" value={listName} placeholder="Enter List name" onChange={e => setListName(e.target.value)} />
            <button onClick={() => {
                const isDuplicateList = props.lists.some(list => list.name === listName);
                if(listName && !isDuplicateList) { // If there is a title and it's not duplicate
                    props.addList(listName);
                    setListName(''); // Clearing the card title from input for next addition
                }
            }}
            >Add List</button>
            {/*listName*/}
        </div>
    );
}

export default AddListForm;