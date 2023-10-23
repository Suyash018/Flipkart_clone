import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";


const  DefaultData = async() => {

    try {
        await Product.insertMany(products);

        console.log("products imported sucessfully");

    }
    catch(error)
    {
        console.log("error insert default data ",error.message);
    }

}

export default DefaultData;