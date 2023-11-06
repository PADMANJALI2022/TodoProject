const mongoose=require("mongoose")
const TaskSchema=new mongoose.Schema({
    todo:{
       type:String,
       required:true
    },
    date:{
        type:Date,
        defualt:Date.now
    }
})
module.exports=mongoose.model('TaskSchema',TaskSchema)