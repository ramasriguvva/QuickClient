import { MoreVert } from "@mui/icons-material";
import {Menu, MenuItem,styled} from "@mui/material";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
      font-size: 16px;
      padding: 15px 60px 5px 24px;
      font-weight: 600;
      color:#461B7E;
`



const HeaderMenu =({setOpenDrawer, setOpenAboutDrawer}) => {

    

    const [open,setOpen]=useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    }


    function Logout() {
        window.location.reload(false);
    }

    function openProfile(){
        setOpenDrawer(true);
        handleClose();
    }

    function openAbout(){
        setOpenAboutDrawer(true);
        handleClose();
    }



    return(
        <>
             <MoreVert onClick={handleClick} style={{cursor: 'pointer'}}/>
             <Menu
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                style: {
                    background: "linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%),linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%)",
                      border: 'solid black 2px'                 
                   }
                 }}
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
            <MenuOption onClick={openProfile}>Profile</MenuOption>
            <MenuOption onClick={openAbout}>About QuickChat</MenuOption>
            <MenuOption onClick={Logout}>Logout</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu;