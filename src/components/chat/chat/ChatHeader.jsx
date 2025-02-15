import {Box, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { useState } from 'react';
import SearchMessage from './searchMessage';

const Header = styled(Box)`
     height: 45px;
     background: linear-gradient(45deg, #FC354C, blue);
     padding: 8px 16px;
     display: flex;
     align-items: center;
`

const Image = styled('img')({

     height: 40,
     width: 40,
     objectFit: 'cover',
     borderRadius: '50%'

})

const Name = styled(Typography)`
    margin-left: 12px ;
`

const Status = styled(Typography)`
    margin-left: 12px;
    font-size: 12px;
    color: rgb(0,0,0, 0.6)
`
const RightContainer = styled(Box)`
     margin-left: auto;
     & > svg {
        padding: 8px;
        font-size: 24px;
        color: black;
     }
`

const ChatHeader = ({person, setText}) =>{

    const {activeUsers} = useContext(AccountContext);

    return(
        <Header>
            <Image src={person.picture} alt="dp"/>
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers.find(user => user.sub === person.sub)? 'Online' : 'Offline'}</Status>

            </Box>
            <RightContainer>
                <SearchMessage setText={setText}/> 
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;