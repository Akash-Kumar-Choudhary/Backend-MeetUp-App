import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("meet", userSchema);

// import mongoose from 'mongoose'
// export const Meetup=mongoose.model('meetup',{
//     title:{
//         type:String,
//         required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     address:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true,
//     }
// })
