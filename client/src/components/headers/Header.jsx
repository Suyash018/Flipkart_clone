

import {styled,AppBar, Box , Typography, Toolbar} from '@mui/material';

//components

import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Components = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const Subheading =styled(Typography)`

    font-size :10px;
    font-style : italic;
`;
    

const PlusImg = styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper = styled(Box)`

    margin: 0 5% 0 auto;
`


const Header = () =>{
    
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    
    return (
        

            <StyledHeader>
                <Toolbar style={{minHeight:55}}>
                    <Components>
                        <img src= {logoURL} alt='logo' style={{ width:75 }} />
                        <Box style={{display: 'flex'}}>
                            <Subheading>Explore
                                <Box component="span" style={{color: '#FFE500'}}> Plus</Box>
                            </Subheading>
                            <PlusImg src = {subURL}></PlusImg>
                        </Box>
                    </Components>
                    <Search/>
                    <CustomButtonWrapper>
                        <CustomButtons/>
                    </CustomButtonWrapper>
                    
                </Toolbar>
            </StyledHeader>
    )
}

export default Header;