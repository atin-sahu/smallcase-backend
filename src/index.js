
const express= require("express")
const app=express()
const cors=require("cors")
app.use(express.json())  //expreress.json convert json body to js object
app.use(cors())
const connect=require("./config/db")
const smallcasecontroller= require("./controller/smallcasecont")
app.use("/smallcase",smallcasecontroller)
app.listen(5000,async()=>{
    await connect()
    console.log("listenning to 5000")
})