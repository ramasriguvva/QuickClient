import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';

//COmponents
import Profile from "./Profile";

const Header = styled(Box)`
        background: linear-gradient(to right, #009fff, #ec2f4b);
        height : 107px;
        color: #FFFF;
        display: flex;
        & > svg, & > p{
            margin-top: auto;
            padding: 15px;
            font-weight: 500;
            font-size: 25px;
        }
`

const Component = styled(Box)`
background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
    height: 85%;
`
const DrawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "30%",
    boxShadow: 'none'
}

const InfoDrawer = ({open, setOpen}) =>{

    const handleClose = () =>{
        setOpen(false);
    }
    
    return(
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx: DrawerStyle}}
            style={{zIndex: 1500}}
        >
            <Header>
                <ArrowBack style={{marginBottom:'8px'}} onClick={() => setOpen(false)}/>
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer;