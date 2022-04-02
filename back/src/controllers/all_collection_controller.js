const express = require("express")
const Collection=require("../models/all_collection_model")
const router =express.Router()

router.get("",async(req,res)=>{
    try {
        const collections = await Collection.find({}).lean().exec()

       return res.status(200).send(collections)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})

module.exports=router