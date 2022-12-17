const express= require('express')
const app= express()
const PORT=3000;
const mongoose= require('mongoose')
const {MONGODB_URI}=require('./Config')


mongoose.connect(MONGODB_URI)

mongoose.connection.on('connected',()=>{
    console.log("connected")
})

mongoose.connection.on('error',(error)=>{
    console.log("error",error)
})



require('./Models/Usermodel')
require('./Models/Helathmodel')
require('./Models/Eventmodel')
require('./Models/Educationmodel')





app.use(express.json());
app.use(require('./Routes/Authentication'))

app.listen(PORT,()=>{
    console.log("server started")
})