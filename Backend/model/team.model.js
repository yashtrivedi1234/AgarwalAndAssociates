import mongoose from "mongoose";

const teamSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
})

const  teamModel = new mongoose.model('team',teamSchema);

export default teamModel