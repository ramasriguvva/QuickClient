import { Box } from '@mui/material';
import { useContext, useState } from 'react';
import { getConversation } from '../../../service/api.js'
//Componets
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { AccountContext } from '../../../context/AccountProvider';
import { useEffect } from 'react';

  

const ChatBox = () => {

   const { person , account } = useContext(AccountContext);

   const [conversation, setConversation] = useState({})

   const [ stext , setText] = useState('');

   useEffect(() => {
      const getConversationDetails = async () => {
         let data = await getConversation({senderId : account.sub, receiverId : person.sub});
         setConversation(data);
      }
      getConversationDetails();
   }, [person.sub]);

   return(
       <Box style={{positio: 'fixed'}}>
          <ChatHeader person={person} setText={setText} />
          <Messages person={person} conversation={conversation} stext={stext}/>
       </Box>
   )
}

export default ChatBox;