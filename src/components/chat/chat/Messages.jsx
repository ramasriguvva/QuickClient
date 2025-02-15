import { Box, styled } from '@mui/material';
import { useContext, useState, useEffect, useRef } from 'react';


//Components
import Footer from './Footer';
import Message from './Message';
import { AccountContext } from '../../../context//AccountProvider';
import { getMessages, newMessage } from '../../../service/api.js';


const Wrappper =styled(Box)`
    background: linear-gradient(to right, #000046, #1cb5e0);
    opacity: 0.8;
`

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll; 
` 

const Container = styled(Box)`
  padding: 1px 1px;
`
const Messages = ({ person, conversation, stext }) => {


    const [value, setValue ] = useState('');
    const [messages, setMessages] = useState([]);
    const [file, setFile ] = useState();
    const [image , setImage ] = useState('');
    const [incomingMessage, setIncomingMessage ] = useState(null); 
    const [showPicker, setShowPicker] = useState(false);
    const [audio, setAudio] = useState();
    const [link, setLink] = useState('');
    //const [audio, setAudio] = useState();
   
    //const [voiceRecording, setVoiceRecording] = useState();
    //const [audioLink, setAudioLink] = useEffect('');

    const scrollRef = useRef();

  
    const {account, socket, newMessageFlag, setNewMessageFlag, deleteMessageFlag } = useContext(AccountContext);


    useEffect(() => {
        const fetchData = async () => {
            let response = await getMessages(conversation?._id);
            const filteredData = response.filter(message => message.text.toLowerCase().includes(stext.toLowerCase()));
            setMessages(filteredData);
        }
        fetchData();
    },[stext, ]);

    useEffect(() => {
        socket.current.on('getMessage',data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    },[ ]);
   

    useEffect(() => {
        const getMessageDetails = async () => {
            let data  = await getMessages(conversation?._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, messages._id, newMessageFlag, deleteMessageFlag]);


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition : 'smooth' });
    },[messages,newMessageFlag])


    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages((prev) => [...prev, incomingMessage]);
           
    },[incomingMessage, conversation._id ]);


    const onEmojiClick = (emojiObject) => {
        setValue(prevInput => prevInput + emojiObject.emoji);
      };

   
    //const receiverId = conversation?.members?.find(member => member !== account.sub)

    const sendText = async (e) => {
        let message;
        if(audio){
            message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'audio',
                text: link
            };
        }
        else if(file){
            message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'file',
                text: image
            };
        }
        else{
            message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }
        }
        

        socket.current.emit('sendMessage', message);
        await newMessage(message);
        setValue('');
        setFile('');
        setAudio('');
        setLink('');
        setImage('');
        setNewMessageFlag(prev => !prev);
    }

    return(
        <Wrappper>
           <Component>
            {
                messages && messages.map(message => (
                    <Container ref={scrollRef} >
                        <Message message={message} 
                                 person={person}
                        />
                    </Container>
                ))
               
            }
           </Component>
           <Footer 
                sendText={sendText} 
                setValue={setValue} 
                value={value}
                file={file}
                setFile={setFile}
                setAudio={setAudio}
                setLink={setLink}
                setImage={setImage}
                messages={messages}
                setMessages={setMessages}
                onEmojiClick={onEmojiClick}
                showPicker={showPicker}
                setShowPicker={setShowPicker}
            />
        </Wrappper>
    )
}
export default Messages;