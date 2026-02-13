import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {                                      
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location:{
      type:String,
      default:null
    },
    service: {
      type: String,
      default:null
    },
    projectType: {
      type: String,
      default:null
    },
    plotSize: {
      type: String,
      default:null
    },
    budget: {
      type: String,
      default:null
    },
     message: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
