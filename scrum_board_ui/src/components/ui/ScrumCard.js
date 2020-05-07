import React from 'react';
import styled from 'styled-components';

import ScrumCardDetailsContainer from '../containers/ScrumCardDetails';

// Styled Components
const Header = styled.h2`
    margin: 0 0 1rem;
    font-size: 12px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Card = styled.div`
    background: #fff;
    padding: 1rem;
    margin: 0 0 1rem;
    border-radius: 3px;
`;

const Button = styled.button`
    background: red;
    color: white;
    max-width: 200px;
`;

const ScrumCard = (props) => {
    const { cards } = props;
    return (
        <div>
            {cards.length > 0 && <Header>All Cards:</Header>}
            <CardWrapper>
                {cards.map((card, index) => {
                    return (
                        <Card key={index}>
                            <ScrumCardDetailsContainer card={card} />
                            <Button onClick={() => props.removeCard(card)}>Remove Card</Button>
                        </Card>
                    );
                })}
            </CardWrapper>
        </div>
    );
}

export default ScrumCard;