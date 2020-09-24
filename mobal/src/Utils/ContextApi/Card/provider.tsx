import React, { useState } from 'react';
import Context from './context';

const CardProvider: React.FC = ({ children }) => {
    const [viewCard, setViewCard] = useState(false);
    const toggleViewCard = () => {
        setViewCard(!viewCard ? true : false);
    }
    return (
        <Context.Provider
            value={{
                viewCard,
                setViewCard: toggleViewCard,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default CardProvider;