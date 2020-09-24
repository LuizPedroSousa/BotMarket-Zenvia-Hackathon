import { createContext } from 'react';

const Context = createContext({
    viewCard: false,
    setViewCard: () => { },
});

export default Context;