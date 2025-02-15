  import React, { Component } from 'react';
  import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
  import MicOffIcon from '@mui/icons-material/MicOff';
  import {Mic} from '@mui/icons-material';
  import './audio.css';

  class Audio extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      recordState: null,
      isRecording: false
    }
  }
 
  start = () => {
    this.setState({
      recordState: RecordState.START,
      isRecording: true
    })
  }
 
  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
      isRecording: false
    })
  }
 
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    var d = new Date();
    this.props.setAudio(new File([audioData],d.valueOf(),{ type:"audio/wav" }));
    console.log(this.props.audio);
    //console.log('audioData', audioData);
    //this.props.setAudio(audioData.url);
    this.props.setValue(this.props.audio.name);
    //this.props.onStopRecording();
    //this.props.setAudio(audioData.url);
   // this.props.setName(audioData.url);
  }

 
  render() {
    const { recordState , isRecording} = this.state
 
    return (
      <div>
        <AudioReactRecorder canvasWidth={0} canvasHeight={0} style={{display: 'flex'}} state={recordState} onStop={(e)=>this.onStop(e)} />
        <div>
            {
              isRecording? <MicOffIcon className='stop' onClick={this.stop}/>:
              <Mic className='start'  onClick={this.start}/>
            }
        </div>
      </div>
    )
  }
}
export default Audio;