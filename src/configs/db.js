const mongoose = require("mongoose");

module.exports = ()=>{
    // return mongoose.connect("mongodb+srv://smallcase:small@cluster0.tw22m.mongodb.net/smallcase?retryWrites=true&w=majority");
    return mongoose.connect("mongodb+srv://ayushi:ayushi123@cluster0.wzplxy8.mongodb.net/smallcase");
}
