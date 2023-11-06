const express=require("express");
const mongoose=require('mongoose');
const cors=require('cors')
const TaskSchema=require('./model')
const app=express();
mongoose.connect('mongodb+srv://Padmanjali:Padmanjali@todocluster.xoz6shl.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("Database connected"))

app.use(express.json())
app.use(cors({
    origin:'*'
}))



/**********posting data in backend */


app.post('/addtask',async(req,res)=>{
const{todo}=req.body;
try{
const newData=new TaskSchema({
    todo:todo
})
await newData.save();
return res.json(await TaskSchema.find())  
}
catch(err){
console.log(err)
}
})
/**********getttin data in backend */
app.get('/gettask',async(req,res)=>{
    try{
        return res.json(await TaskSchema.find())  
    }
   
    catch(err){
    console.log(err)
    }
    })

    /**********deleteing  data in backend */
app.delete('/delete/:id', async(req,res)=>{
try{
    await TaskSchema.findByIdAndDelete(req.params.id)
    return res.json(await TaskSchema.find())
}

catch(err){
    console.log(err)
}

})

app.listen(5000,()=>console.log("server running in 5000..."))