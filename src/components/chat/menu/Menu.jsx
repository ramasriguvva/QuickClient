import {Box,styled} from '@mui/material';
import { useState } from 'react';
//Components
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const BoxStyle = styled(Box)`
    overflow: hidden;
`

const Menu = () =>{

    const [ text , setText] = useState('');
    
    return(
        <BoxStyle>
           <Header/>
           <Search setText={ setText } />
           <Conversations text={ text } />
        </BoxStyle>
    )
}

export default Menu;