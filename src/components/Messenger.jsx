import {AppBar,Toolbar,styled,Box} from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';


const Component = styled(Box)`
     height : 100vh;
     background: linear-gradient(to bottom, #12c2e9, #c471ed, #f64f59);
     position: relative;
`

const LoginHeader = styled(AppBar)`
     height : 220px;
     background : linear-gradient(to left, #0f0c29, #302b63, #24243e); 
     Box-shadow : none;   
`

const Header = styled(AppBar)`
     height : 125px;
     background-color : black; 
     Box-shadow : none; 
`

const Messenger =()=>{

    const {account }=useContext(AccountContext);

    return (
        <Component>
        {
                account? 
                <>
                   <Header>
                    <Toolbar>

                    </Toolbar>
                   </Header>
                   <ChatDialog/>
                </>
                :
                <>
                  <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                  </LoginHeader>
                  <LoginDialog/>
                </>
        }
        </Component>
    );
}

export default Messenger;