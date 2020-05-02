import React from 'react';
import { connect } from 'react-redux';

import AddListForm from '../ui/AddListForm';
import { createList } from '../../actions/list';

const AddListFormContainer = (props) => {
    return (
        <AddListForm addList={props.onAddList}/>
    );
}

const mapDispatchToProps = dispatch => ({
    onAddList: name => dispatch(createList(name)),
});

export default connect(null, mapDispatchToProps)(AddListFormContainer); // We don't need any data from state here