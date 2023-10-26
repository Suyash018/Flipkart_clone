
import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";

//components

import LoginDialog from "../login/LoginDialog";

const Wrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
& > button, & > p, & > div {

    margin-right:40px;
    font-size:16px;
    align-items:center;

}
`

const Container = styled(Box)`
display: flex;
`

const LoginButton = styled(Button)`

color: #2874f0;
background: #ffffff;
text-transform : none;
padding: 5px 40px;
border-radius:none;
box-shadow:none;
font-weight:500;
height:32px;
`

const CustomButtons = () => {

    const [open,setOpen] =useState(false);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

            <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
            
        </Wrapper>
    )
}

export default CustomButtons;