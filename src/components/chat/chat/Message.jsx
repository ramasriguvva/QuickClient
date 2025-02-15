import React, { useContext,useState,useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { formatDate, downloadMedia, MsgDate } from '../../../utils/common-utils';
import { AccountContext } from '../../../context/AccountProvider';
import { iconPDF} from '../../../constants/data.js';
import  docxImage  from "../../../constants/docxImage.png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ContentCopy, Delete,Share,Reply,Info,Star,Redo } from  '@mui/icons-material';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { deleteMessage, getMessages } from '../../../service/api'; 
import {Dialog} from '@mui/material';
import closeIcon from '@mui/icons-material/HighlightOff';
import excel from '../../../constants/excelSheet.png';
import './audio.css';

const Sent = styled(Box)`
    background: linear-gradient(to right,#00f260, #0575e6);
    max-width: 60%;
    margin-left: auto; 
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    border: solid black 1px;
`

const Wrapper = styled(Box)`
    background: linear-gradient(to right, #b2fefa, #0ed2f7);
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    border: solid black 1px;
`
const Text = styled(Typography)`
     font-size: 14px;
     padding: 0 25px 0 5px;
     
`


const Time = styled(Typography)`
    font-size: 10px;
    color: #00000;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`
const MenuOption = styled(MenuItem)`
      font-size: 16px;
      padding: 15px 60px 5px 24px;
      font-weight: 600;
      color:#461B7E;
`

const dialogStyle = {
    height: '30%',
    overflow: 'auto',
    width: '30%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    border: 'solid black 5px',
    background: "linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%),linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%)",
}
const Close = styled(closeIcon)`
  position: absolute;
  right: 25px;
  top: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: red;
`
const Container = styled(Box)`
margin-top: 50px;
margin-left: 20px;
`

const MsgInfoStyle = styled(Box)`
    display: flex;
`

const Title = styled(Typography)`
    font-size: 20px;
    font-weight: 510;
    color: #00008B;
`
const SubTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 510;
  color: #800080;
  margin-left: 10px;
`

export const Message =  ({ message, person }) => {

    const [contextMenu1, setContextMenu1] = React.useState(null);

    const [contextMenu2, setContextMenu2] = React.useState(null);

    const handleContextMenu1 = (event) => {
        event.preventDefault();
        setContextMenu1(
            contextMenu1 === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : 
                null,
        );
    };

    const handleContextMenu2 = (event) => {
        event.preventDefault();
        setContextMenu2(
            contextMenu2 === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : 
                null,
        );
    };

    const handleClose1 = () => {
        setContextMenu1(null);
    };

    const handleClose2 = () => {
        setContextMenu2(null);
    };

    const { account , setDeleteMessageFlag } = useContext(AccountContext);

    //Copy Text to clipboard..............................................................

    const [copied, setCopied] = useState(false);

    //delete message..............................................................


    const DeleteMsg = async () => {
       handleClose1();
       await deleteMessage(message._id);
       setDeleteMessageFlag(pre => !pre);
    }
    
    //message information........................

    const [open1, setOpen1] = React.useState(false);

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleCloseInfo1 = () => {
        setOpen1(false);
    };

    const handleCloseInfo2 = () => {
        setOpen2(false);
    };

    const handleInfo1 =()=>{
        handleClickOpen1();
        handleClose1();
    }
    const handleInfo2 =()=>{
        handleClickOpen2();
        handleClose2();
    }

    return (
        <>
            {
                account.sub === message.senderId ?

                    <Sent onContextMenu={handleContextMenu1} style={{ cursor: 'context-menu' }} >
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }

                    </Sent>

                    :
                    <Wrapper onContextMenu={handleContextMenu2} style={{ cursor: 'context-menu' }}>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Wrapper>
            }
            <Menu
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    style: {
                          background: "linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%),linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%)",
                          border: 'solid black 2px',    
                          width: '150px',      
                                    
                       }
                     }}
                open={contextMenu1 !== null}
                onClose={handleClose1}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu1 !== null
                        ? { top: contextMenu1.mouseY, left: contextMenu1.mouseX }
                        : undefined
                }
            >
                <CopyToClipboard text={message.text} onCopy={()=>setCopied(true)}>
                       <MenuOption onClick={handleClose1}><ContentCopy/><span> Copy</span></MenuOption>
                </CopyToClipboard>
                <MenuOption onClick={handleClose1}><Reply/><span> Reply</span></MenuOption>
                <MenuOption onClick={DeleteMsg}><Delete/><span> Delete</span></MenuOption>
                <MenuOption onClick={handleClose1}><Redo/><span> Forward</span></MenuOption>
                <MenuOption onClick={handleClose1}><Share/><span> Share</span></MenuOption>
                <MenuOption onClick={handleClose1}><Star/><span> Star</span></MenuOption>
                <MenuOption onClick={handleInfo1}><Info/><span> Info</span></MenuOption>
            </Menu>
            <Dialog open={open1} onClose={handleCloseInfo1} id="sender-msg-info"  
              PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
                
                    <Close onClick={handleCloseInfo1} color="primary"/>
                    <Container>
                       <MsgInfoStyle><Title>Sender Name : </Title> <SubTitle> {account.name}</SubTitle></MsgInfoStyle>
                       <MsgInfoStyle><Title>Message  </Title> <span style={{ fontSize: 20, fontWeight: 510,color: '#00008B', marginLeft: 5}}> :</span> 
                       <SubTitle> {message.text}</SubTitle> </MsgInfoStyle>
                       <MsgInfoStyle><Title>Send At : </Title> <SubTitle> {MsgDate(message.createdAt)}  {formatDate(message.createdAt)}</SubTitle> </MsgInfoStyle>
                       <MsgInfoStyle><Title>Received At : </Title> <SubTitle>{MsgDate(message.createdAt)}  {formatDate(message.createdAt)}</SubTitle> </MsgInfoStyle>
                    </Container>
            </Dialog>


            <Menu
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    style: {
                          background: "linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%),linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%)",
                          border: 'solid black 2px',    
                          width: '150px',      
                                    
                       }
                     }}
                open={contextMenu2 !== null}
                onClose={handleClose2}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu2 !== null
                        ? { top: contextMenu2.mouseY, left: contextMenu2.mouseX }
                        : undefined
                }
            >
                <CopyToClipboard text={message.text} onCopy={()=>setCopied(true)}>
                       <MenuOption onClick={handleClose2}><ContentCopy/><span> Copy</span></MenuOption>
                </CopyToClipboard>
                <MenuOption onClick={handleClose2}><Reply/><span> Reply</span></MenuOption>
                <MenuOption onClick={handleClose2}><Redo/><span> Forward</span></MenuOption>
                <MenuOption onClick={handleClose2}><Share/><span> Share</span></MenuOption>
                <MenuOption onClick={handleClose2}><Star/><span> Star</span></MenuOption>
                <MenuOption onClick={handleInfo2}><Info/><span> Info</span></MenuOption>
            </Menu>
            <Dialog open={open2} onClose={handleCloseInfo2} id="receiver-msg-info"  
              PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
                
                    <Close onClick={handleCloseInfo2} color="primary"/>
                 
                    <Container>
                       <MsgInfoStyle><Title>Sender Name : </Title> <SubTitle> {person.name}</SubTitle></MsgInfoStyle>
                       <MsgInfoStyle><Title>Message </Title> <span style={{ fontSize: 20, fontWeight: 510,color: '#00008B', marginLeft: 5}}> :</span><SubTitle> {message.text}</SubTitle> </MsgInfoStyle>
                       <MsgInfoStyle><Title>Send At : </Title> <SubTitle> {MsgDate(message.createdAt)}  {formatDate(message.createdAt)} </SubTitle> </MsgInfoStyle>
                       <MsgInfoStyle><Title>Received At : </Title> <SubTitle>{MsgDate(message.createdAt)}  {formatDate(message.createdAt)}</SubTitle> </MsgInfoStyle>
                    </Container>
                
            </Dialog>
        </>

    )
}

const ImageMessage = ({ message }) => {
    return (
        <box style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ||  message?.text?.includes('.docx') || message?.text?.includes('.xlsx') ||  message?.text?.includes('.csv') ?
                
                    message?.text?.includes('.pdf') ?
                        <Box style={{ display: 'flex' }}>
                            <img src={iconPDF} alt="pdf" style={{ width: 70, height: 60 }} />
                            <Typography style={{ fontSize: 18, marginRight: 10 }}>{message.text.split('file-').pop()}</Typography>
                        </Box>
                    :  
                         message?.text?.includes('.docx')?
                             <Box style={{ display: 'flex' }}>
                                <img src={ docxImage } alt="word file" style={{ width: 70, height: 60 }} />
                                <Typography style={{ fontSize: 18, marginRight: 10 }}>{message.text.split('file-').pop()}</Typography>
                             </Box>
                        :
                            <Box style={{ display: 'flex' }}>
                               <img src={ excel } alt="excel file" style={{ width: 70, height: 60 }} />
                               <Typography style={{ fontSize: 18, marginRight: 10 }}>{message.text.split('file-').pop()}</Typography>
                            </Box>
                
                :
                    message?.text?.includes('.mp3') ?
                        <audio src={message.text} width="100%" height="200px" type="audio/ogg" controls />
                    :
                        message?.text?.includes('.mp4') ||  message?.text?.includes('webm') || message?.text?.includes('ogg') ?
                        <video controls width="350px" height="200px">
                                <source src={message.text} type="video/mp4" />
                         </video>
                        :
                           <img style={{ width: 300, height: '100%', objectFit: 'cober' }} src={message.text} alt={message.text} />
            }
            {
                 message?.text?.includes('.mp3') ||  message?.text?.includes('data:audio/webm;') ||  message?.text?.includes('.mp4') ||  message?.text?.includes('webm') || message?.text?.includes('ogg') ?
                    <Time style={{ position: 'absolute', bottom: -6, right: 0 }} />

                 :   
                    <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
                       <DownloadIcon
                           onClick={(e) => downloadMedia(e, message.text)}
                           style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }}
                           fontSize="small"
                        />
                        {formatDate(message.createdAt)}
                    </Time>
            }
        </box>
    )
}

const TextMessage = ({ message }) => {
    return (
        <>{
            message?.text?.includes('data:audio/webm;')?
            <audio src={message.text} width="100%" height="200px" type="audio/ogg" controls /> :
            <Text>{message.text}</Text>
        }
        {
             message?.text?.includes('data:audio/webm;')?
                <Time style={{ position: 'absolute', bottom: -6, right: 0 }}>
                        {formatDate(message.createdAt)}
                </Time>
            :
                <Time>{formatDate(message.createdAt)}</Time>
        }
            
            
        </>
    )
}

export default Message;