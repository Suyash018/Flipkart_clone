

import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearachContainer = styled(Box)`
background: #fff;
width :38%;
border-radius :2px;
margin-left:10px;
`;

const InputSearchBase = styled(InputBase)`
width:100%;
padding-left:20px;

font-size:unset;
`;

const SearchIconwrapper = styled(Box)`
    color : blue;
    padding:5px;
    display :flex;

`


const Search = () => {
    return (
        <SearachContainer style={{display:"flex"}}>
            <InputSearchBase placeholder="Search for products,brands and more" />
        <SearchIconwrapper>
            <SearchIcon></SearchIcon>
        </SearchIconwrapper>
        
        </SearachContainer>

    )

};

export default Search;