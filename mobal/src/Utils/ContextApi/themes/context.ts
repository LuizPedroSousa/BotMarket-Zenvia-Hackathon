import {createContext} from 'react';
import light from '../../../Styles/themes/light';

const Context = createContext({
    theme: light,
    setTheme: () => {}
});

export default Context;