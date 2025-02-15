import { Typography,Box,styled} from "@mui/material";
import QuickChatLogo from '../../../constants/Logo.png';
import {Lock} from '@mui/icons-material';

const Component = styled(Box)`
      background: linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%),
                  linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),
                  linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%);
      padding: 30px 0;
      text-align: center;
      height: 100vh;
`

const Container = styled(Box)`
     padding: 0 200px;

`
const Title = styled(Typography)`
    font-size: 200%;
    marging: 25px 0 10px 0;
    font-family: inherits;
    font-weight: 600;
    color: #4B0082;
    margin-bottom: 10px;
`

const SubTitle = styled(Box)`
    fomnt-size: 14px;
    font-weight: 400;
    font-family: inherit;
`

const Image = styled('img')({
     width: 500,
     marginTop: 100
})


const EndToEnd = styled(Box)`
     margin-top: 200px;
     display: flex;
`

const LockIcon = styled(Lock)`
    margin-left: 36%;
    margin-right: 5px;
    font-size: 21px;
`

const EmptyChat = () =>{
    return(
           <Component>
            <Container>
                <Image src={QuickChatLogo}></Image>
                <Title>QuickAll</Title>
                <SubTitle>Are you away from your friends and family?</SubTitle>
                <SubTitle>Be in touch with your friends and family with QuickAll </SubTitle>
                <EndToEnd>
                    <LockIcon/>
                    <SubTitle> End-to-end encrypted</SubTitle>
                </EndToEnd>
            </Container>
           </Component>  
    )
}

export default EmptyChat;