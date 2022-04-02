const express = require("express")
const Special=require("../models/special_model")
const router =express.Router()

router.get("",async(req,res)=>{
    try {
        const specials= await Special.find({}).lean().exec()

       return res.status(200).send(specials)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})

module.exports=router