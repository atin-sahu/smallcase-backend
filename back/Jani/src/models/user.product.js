const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const productSchema = new mongoose.Schema(
  {
   
    Image: { type: String, required: true },
    title: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    percent:{type:String,required:true},
    description:{type:String,required:true},

  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("product",productSchema)