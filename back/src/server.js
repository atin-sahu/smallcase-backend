const port = process.env.PORT || 5000;
const app = require("./index");
const connect = require("./configs/db");

app.listen(port, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});