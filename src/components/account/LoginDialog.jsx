import {Dialog,Box,Typography,styled,Button} from '@mui/material';
import  QuickChatPic from '../../constants/QuickAllLogo.jpg';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';
import './login.css';


const Component = styled(Box)`
  align-items:center;
`
const Container = styled(Box)`
   padding : 50px 0 50px 50px;
   align-items: center;
`

const Title = styled(Typography)`
    font-size : 20px;
    font-size : 80px; 
    font-weight : 600;
    font-family : inherits;
    margin-bottom : 20px;
    align-items: center;
    color: #191970;
`

const dialogStyle = {
    height: '90%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog =()=>{

    const {setAccount}=useContext(AccountContext);

    const onLoginSuccess= async (res)=>{
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }


    const onLoginError = (res) =>{
         console.log("login failed "+res);
    }


    
    return(

        <Dialog id="dialog-back" open = {true} PaperProps={{sx: dialogStyle,style:{background: ' linear-gradient(to bottom, #dd3e54, #6be585)', justifyContent: "center", alignItems: "center"}}} hideBackdrop={true} >
           <Component>
              <Container>
                 <Title>Welcome to QuickAll</Title>
                  
             
                    <div className='StyleComponent'>
                      <img src={QuickChatPic} alt="logo" style={{width: "40%", height: "40%"}}/>
                     
                      <div className='centerContent'>
                         <Button color="primary"> 
                         <Box style={{border: '8px solid #039BE5'}}>
                               <GoogleLogin
                                 onSuccess={onLoginSuccess}
                                 onError={onLoginError}
                                 style={{alignContent:"center"}}
                                />
                                </Box>
                         </Button>
                        </div>
                        
                      
                    </div>
              </Container>
           </Component>
        </Dialog>
    )
}

export default LoginDialog;