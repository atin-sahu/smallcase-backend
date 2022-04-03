const mongoose = require("mongoose")

const all_collection_Schema = new mongoose.Schema({
    imageURL:{type:String,required:true},
    title:{type:String,required:true},
    detail:{type:String,required:true},
    more:{type:Number,required:true},
   
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model("all_collection",all_collection_Schema)

