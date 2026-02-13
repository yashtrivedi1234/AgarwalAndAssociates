import mongoose from "mongoose";

const visiterSchema = new mongoose.Schema({

    visitorId:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    ip:{
        type:String,
        required:true, 
    },
    region:{
        type:String,
        required:true, 
    },
    country:{
        type:String,
        required:true, 
    },
    postal:{
        type:String,
        required:true, 
    },
    utmSource:{
        type:String,
        required:true, 
    },
   location: {
  lat: { type: String, required: true },
  long: { type: String, required: true },
}

},{timestamps:true})

const VisiterModel = mongoose.model('visiter', visiterSchema);
export default VisiterModel;
