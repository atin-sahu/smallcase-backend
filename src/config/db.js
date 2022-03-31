const mongoose = require("mongoose")
// module.exports=()=>{
//     return mongoose.connect("mongodb+srv://ayushi8855:Ayujaman675@cluster0.lff3t.mongodb.net/smallcase")
// }

module.exports=()=>{
    return mongoose.connect("mongodb+srv://smallcase:small@cluster0.tw22m.mongodb.net/smallcase?retryWrites=true&w=majority")
}

// mongodb+srv://smallcase:small@cluster0.tw22m.mongodb.net/smallcase?retryWrites=true&w=majority