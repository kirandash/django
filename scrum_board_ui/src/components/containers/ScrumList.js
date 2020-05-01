import React from 'react';

import ScrumList from '../ui/ScrumList';
import { lists } from '../../assets/data/sample_data';

const ScrumListContainer = () => {
    return (
        <ScrumList lists={lists} />
    )
}

export default ScrumListContainer;
