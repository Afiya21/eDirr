const mongoose=require('mongoose')
const{ObjectId}=mongoose.Schema.Types

const educationSchema= new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    user:{
        type:ObjectId,
        ref:"user"
    }
    
});


mongoose.model("EducationInsurance",educationSchema)