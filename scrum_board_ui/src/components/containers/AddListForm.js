import React from 'react';
import { connect } from 'react-redux';

import AddListForm from '../ui/AddListForm';
// import { createList } from '../../actions/list';
import { getLists } from '../../selectors/lists';
import { createList } from '../../thunks/list';

const AddListFormContainer = (props) => {
    return (
        <AddListForm addList={props.onAddList} lists={props.lists}/>
    );
}

const mapStateToProps = state => ({
    // lists: state.lists.data,
    lists: getLists(state),
});

const mapDispatchToProps = dispatch => ({
    onAddList: name => dispatch(createList(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddListFormContainer); // We don't need any data from state here