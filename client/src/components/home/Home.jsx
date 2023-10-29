
import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import Navbar from "./Navabar";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";

import {useDispatch, useSelector} from 'react-redux';
import Slide from "./Slide";
import MidSlide from "./Midslide";
import MidSection from "./MidSection";


const Component = styled(Box)`
    padding :10px;
    background: #F2F2F2;
`

const Home = () => {

    const {products } = useSelector(state=> state.getProducts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    return (

        <>
            <Navbar />
            <Component>
                <Banner />
                
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>

        </>
    )


}




export default Home;
