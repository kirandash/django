import React, {useState} from 'react';

const ScrumCardDetails = (props) => {
    const { card } = props;
    const [editMode, setEditMode] = useState(false);
    return (
        <React.Fragment>
            {!editMode && <div onClick={() => setEditMode(true)}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>}
            {editMode && <div>
                <label>Title:</label>
                <input type="text"></input>
                <textarea placeholder="Enter Description"></textarea>
                <button onClick={() => setEditMode(false)}>Save</button>
            </div>}
        </React.Fragment>
    );
};

export default ScrumCardDetails;