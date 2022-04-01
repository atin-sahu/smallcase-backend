
const Smallcase=require("../models/smallcasemodel")

const express = require("express")
const router =express.Router()
router.get("",async(req,res)=>{
    try {
        const smallcase= await Smallcase.find().lean().exec()

       return res.status(200).send(smallcase)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})

router.post("",async(req,res)=>{
    try {
        const smallcase= await Smallcase.create(req.body);
      return  res.status(201).send(smallcase)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports=router