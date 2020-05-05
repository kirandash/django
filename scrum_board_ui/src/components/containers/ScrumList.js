import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ScrumList from '../ui/ScrumList';
// import { lists } from '../../assets/data/sample_data';
import { removeList } from '../../actions/list';
import { loadLists } from '../../thunks/list';
import { getLists } from '../../selectors/lists';

const ScrumListContainer = (props) => {
    const { getLists } = props;
    useEffect(() => {
        getLists();
    }, []); // The empty array is to prevent reloading the app constantly
    return (
        <ScrumList lists={props.lists} addCard={props.onAddCard} removeList={props.onRemoveList} />
    )
}

const mapStateToProps = state => ({
    // lists: state.lists.data,
    lists: getLists(state),
}); // mapStateToProps is a Fn which takes the entire state of our app as input and return specific props from the state which the specific component requires. And all props defined inside mapStateToProps is automatically made available by connect as prop for the component to use.

const mapDispatchToProps = dispatch => ({
    onRemoveList: listId => dispatch(removeList(listId)),
    getLists: () => dispatch(loadLists()),
}); // mapDispatchToProps is a Fn which takes dispatch as input. A dispatch is a fn used to call an action creator.

export default connect(mapStateToProps, mapDispatchToProps)(ScrumListContainer); // connect is a higher order fn with 2 sets of args: `connect()()`. The first set of args are: mapStateToProps, mapDispatchToProps. The 2nd argument is the name of the component. Ex: `conneect(mapStateToProps, mapDispatchToProps)(componentName)`
