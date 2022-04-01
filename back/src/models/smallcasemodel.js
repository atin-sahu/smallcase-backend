const mongoose = require("mongoose")

const smallcaseSchema = new mongoose.Schema({
  Image:{type:String,required:true},
  title:{type:String,required:true},
 name:{type:String,required:true},
  amount:{type:Number,required:true},
  percent:{type:String,required:true},
  description:{type:String,required:true},
   
},{
    timestamps:true,
    versionKey:false
})

const Smallcase = mongoose.model("smallcase",smallcaseSchema)

module.exports = Smallcase