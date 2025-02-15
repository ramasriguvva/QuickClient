import React from "react";
import { AudioRecorder } from 'react-audio-voice-recorder';

const VoiceMessage = ({setAudio, setLink}) => {
  
  const addAudioElement = (blob) => {
    getDataFromBlob(blob);
    setAudio(blob);
  };

  const getDataFromBlob = (myBlob) => {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            setLink(e.target.result);
        };
        reader.readAsDataURL(myBlob);
    })
}

  return(
    <AudioRecorder onRecordingComplete={addAudioElement} />
  )
}

export default VoiceMessage;