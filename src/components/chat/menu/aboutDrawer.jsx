import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';

const Header = styled(Box)`
   display: flex;
   background: linear-gradient(to right, #009fff, #ec2f4b);
   height: 70px;
   & > svg, & > p{
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
    font-size: 30px;
}
`
const DrawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "28%",
    boxShadow: 'none',
    border: 'solid #36013F 7px',
    background:  'linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%), linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%)'
}

const Info = styled(Typography)`
    margin: 20px;
    color: black;
    font-size: 20px;
    font-family: times new roman;
`
const Contact = styled(Box)`
   margin-top: 20px;
   color: #00FF00;
   font-size: 20px;
   font-family: times new roman;
`
const AboutDrawer = ({open, setOpen}) =>{

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
                     <ArrowBack style={{margin:'10px 10px 10px 10px', fontSize: 30}} onClick={() => setOpen(false)}/>
                     <Typography>About QuickChat</Typography>
                </Header>
                <Info>
                <span style={{color: '#4B0082', fontSize: 23}}>QuickALl</span> is developed by <span style={{color: '#DC143C', fontSize: 23}}>Vivek kumar kashyap </span> and  
                <span style={{color: '#DC143C', fontSize: 23}}> Guvva Ramasri , S. Maanas kumar and A jyothi</span>. For developing this app we have used react js, node js, socket.io,
                socket.io-client, axios, express , mongodb,multer,………etc.
                We developed this app in one month.
                If you face any probem while using this app you can contact to us<br/>
                <span style={{color: '#FF4500', fontSize: 25}}><u>Features of QuickChat</u></span> <br/>
                → you can send text message <br/>
                → you can send voice message <br/>
                → you can send videos <br/>
                → you can send songs<br/>
                → you can send images<br/>
                → you can send any files<br/>
                → you can read daily news <br/>
                <Contact>
                <span style={{color: '#033E3E', fontWeight: 500, fontSize: 23}}><u>Our contact details</u></span><br/>
                vivekkashyap043@gmail.com<br/>
                vikkyvivek043@gmail.com<br/>
                guvvaramasri123@gmail.com
                </Contact>
                </Info>
        </Drawer>
    )
}

export default AboutDrawer;