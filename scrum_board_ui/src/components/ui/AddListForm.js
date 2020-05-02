import React, {useState} from 'react';

const AddListForm = (props) => {
    const [listName, setListName] = useState('');
    return (
        <div>
            <input type="text" value={listName} placeholder="Enter List name" onChange={e => setListName(e.target.value)} />
            <button onClick={() => {
                props.addList(listName)}
            }>Add List</button>
            {/*listName*/}
        </div>
    );
}

export default AddListForm;