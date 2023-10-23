
import mongoose from 'mongoose';

export const Connection = async (username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.mxalycx.mongodb.net/?retryWrites=true&w=majority`;

    try {
       await mongoose.connect(URL,{useUnifiedTopology : true , useNewUrlParser: true});
        console.log("Mongodb connected");
    }
    catch (error) {
        console.log('Error connecting to mongodb= ', error.message);
    }

}

export default Connection;