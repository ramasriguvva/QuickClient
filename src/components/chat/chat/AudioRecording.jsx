import React, {useEffect, useState} from 'react'; 
import vmsg from 'vmsg';
import MicOffIcon from '@mui/icons-material/MicOff';
import {Mic} from '@mui/icons-material';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';

const recorder = new vmsg.Recorder({
    wasmURL : 'https://unpkg.com/vmsg@0.3.0/vmsg.wasm'
})

const Stop = styled(MicOffIcon)`
     margin-top : 2px;
     margin-right: 60%;
     color: red;
     font-size: 30px;
`

const Start = styled(Mic)`
     margin-top : 2px;
     margin-right: 60%;
     font-size: 30px;
     
`
const RecordButton = styled(Button)`
    border: none;
     
`

class AudioRecording extends React.Component{

    state = {
        isLoading: false,
        isRecording: false,
        //recordings: []
    }
    

    record = async () => {
        this.setState({isLoading:true})

        let recordings;

        if(this.state.isRecording){
            recordings = await recorder.stopRecording()
            this.setState({
                isLoading: false,
                isRecording: false,
                //recordings: this.state.recordings.concat(URL.createObjectURL(blob))
                
            })
        }else{
            try{
                await recorder.initAudio()
                await recorder.initWorker()
                recorder.startRecording()
                this.setState({isLoading:false,isRecording:true})
                console.log(recordings)
            }catch(error){
                console.log("error",error);
            }
        }
    }

    render()
    {

        const {isLoading,isRecording,recordings} = this.state
        
        return(
            <>
            <RecordButton onClick={this.record} disabled={isLoading} recordings={recordings}>
                {isRecording ? <Stop/> : <Start/>}
            </RecordButton>
            </>
        )
    }
}
export default AudioRecording;
