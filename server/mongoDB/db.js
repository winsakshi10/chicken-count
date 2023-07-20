import mongoose from 'mongoose';


const connectDB = (url) =>{
    mongoose.set('strictQuery',true);
    mongoose.connect('mongodb+srv://winsakshi10:rODeTaEuqvX1Zaut@chicken-count.bgpbpgr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }).then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err))
}

export default connectDB;