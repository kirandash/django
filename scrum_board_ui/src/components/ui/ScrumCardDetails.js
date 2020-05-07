import React, {useState} from 'react';

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
            {!editMode && <div onClick={() => setEditMode(true)}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>}
            {editMode && <div>
                <label>Title:</label>
                <input type="text" name="title" onChange={handleChange} value={cardDetails.title} />
                <textarea name="description" placeholder="Enter Description" onChange={handleChange} value={cardDetails.description}></textarea>
                <button onClick={() => {
                    props.saveCard(cardDetails);
                    setEditMode(false);
                }}>Save</button>
            </div>}
        </React.Fragment>
    );
};

export default ScrumCardDetails;