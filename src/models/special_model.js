const mongoose = require("mongoose")

const specialSchema = new mongoose.Schema({
    imageURL:{type:String,required:true},
    tag:{type:String,required:true},
    title:{type:String,required:true},
    by:{type:Number,required:true},
    detail:{type:String,required:true},
   
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model("special_smallcase",specialSchema)

