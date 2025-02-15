import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
     display: flex;
     justify-content: center;
`

const Image = styled('img')({
     width: 200,
     height: 200,
     borderRadius: '50%',
     padding: '25px 0'
    })

const BoxWrapper = styled(Box)`
    background: linear-gradient(to right,  #005aa7, #fffde4);
    padding: 12px 30px 2px;
    & :first-child{
        font-size: 16px;
        color: navy;
        font-weight: 600;
        
    }
    & :last-child{
        margin: 14px 0;
        color: black;
        font-weight: 600;
    }
`

const DiscriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p{
        font-size: 13px;
        color: #8696A0;
    }
`
const Profile = () =>{

   const {account} = useContext(AccountContext);

    return(
        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp"/>
            </ImageContainer>

            <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>

            <DiscriptionContainer>
                <Typography style={{fontWeight: 600, color:"black"}}>This name is your user name brought from your 
                    google account <span style={{color:'red'}}>{account.email}</span> and this name 
                    will be visible to your QuickAll contacts
                </Typography>
            </DiscriptionContainer>

            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Success😊is not final, failure is not fatal, 
                    it is the courage to continue that counts.</Typography>
            </BoxWrapper>
        </>
    )
}

export default Profile;