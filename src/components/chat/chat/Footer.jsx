import { Box, InputBase, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { AttachFile } from '@mui/icons-material';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import { useEffect } from 'react';
import { uploadFile } from '../../../service/api.js';
import Picker from 'emoji-picker-react';
import Speech from '../../Speech/Speech.js';
import "./audio.css";
import { useState } from 'react';
import VoiceMessage from './VoiceMessage.js';
//import VoiceMessage from './VoiceMessage.js';

const Container = styled(Box)`
     height: 55px;
     background: #ededed;
     display: flex;
     width: 64.9%;
     position: fixed;
     align-items: center;
     padding: 0 15px;
     & > *{
        margin: 5px;
        margin-top: 5px;
        color: #919191;
        align: center;
     }
`
const Search = styled(Box)`
     background-color: #FFFFFF;
     border-radius: 18px;
     width: 88%;
     display: flex;
`

const InputField = styled(InputBase)`
     width: 600px;
     padding: 20px;
     height: 20px;
     padding-left: 25px;
     font-size: 14px;
     margin-top:5px;
     position: fixed;
`


const ClipIcon = styled(AttachFile)`
     transform: rotate(40deg);
     color: blue;
     font-weight: 600;
     cursor: pointer;
`

const Emoji = styled(SentimentSatisfiedTwoToneIcon)`
    font-size: 30px;
    color: #FFDB58;
    font-weight: 600;
    cursor: pointer;
     
`


const EmojiPicker = styled(Picker)`
     position: absolute; 
     z-index: 999; 
     left: 0;
     top: 400;
     
`


const Footer = ({ sendText, setValue, value, file, setFile, setAudio, setLink, setImage, onEmojiClick, showPicker, setShowPicker}) => {

    

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
        console.log(file);
    }

    /*const onStopRecording = () => {
        setFile(audio);
    }*/



    // enter key send message functionality
    const checkEnterKey = (e) =>{
        let code = e.keyCode || e.which;
        if(code === 13){
            sendText(e);
        }
    }

    return (

        <Container>
            <Emoji onClick={() =>  {setShowPicker(val => !val)} }/>
            <div  style={{position: 'fixed', display: 'inline', right: '30%', top: '37%'}}>
            {
            
                showPicker && <EmojiPicker width={700} height={400} 
                    onEmojiClick={onEmojiClick}
                />
            }
            </div>

            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />

            <Search>
                <InputField 
                    placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => checkEnterKey(e)}
                    value={value}
                    
                />
                <Speech setValue={setValue} />
                <SendIcon id="sendBtn" style={{ margin: "5px 0 2px 10px", fontSize: '30px', padding: '5px', color: 'green', cursor: 'pointer'}}
                    onClick={(e) => sendText(e)}
                />
            </Search>
          
            <VoiceMessage setAudio={setAudio} setLink={setLink} /> 
            
        </Container>
    )
}


export default Footer;