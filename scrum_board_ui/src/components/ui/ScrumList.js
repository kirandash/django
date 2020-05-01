import React from 'react';

const ScrumList = (props) => {
    const { lists } = props;
    return (
        <div>
            <h3>Lists</h3>
            {lists.map((list, index) => {
                return (
                    <div key={index}>
                        <h3>{list.name}</h3>
                        <p>Scrum Card Component Here</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ScrumList;