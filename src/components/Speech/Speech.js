import React from 'react';
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import MicOffIcon from '@mui/icons-material/MicOff';
import { styled } from '@mui/material';

const MicOn = styled(SettingsVoiceIcon)`
   margin-left: 750px;
   margin-top: 12px;
   color: blue;
   cursor: pointer;
`
const MicOff = styled(MicOffIcon)`
   margin-left: 750px;
   margin-top: 12px;
   color: red;
   cursor: poiunter;
`

const Speech = ({ setValue }) => {
  const { transcript, listening } = useSpeechRecognition();
  
 useEffect(()=>{
   setValue(transcript)
 },[transcript])

 const startRecording = () => {
     SpeechRecognition.startListening();
 }

 const stopRecording = () => {
  SpeechRecognition.stopListening();
}
  return (
    <>
      {listening ? <MicOff onClick={stopRecording}/> : <MicOn onClick={startRecording}/>
      }
    </>
  );
};
export default Speech;
