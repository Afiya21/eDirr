const express= require('express')
const router=express.Router();
const mongoose=require('mongoose')
const usermodel=mongoose.model("user")
const HelthInsurance=mongoose.model("healthInsurance")
const EducationInsurance=mongoose.model("EducationInsurance")
const EventInsurance=mongoose.model("EventInsurance")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const{JWT_SECRET}=require('../Config')

//const protectedresource=require('../middleware/protectedresource')


router.get('/',(req,res)=>{
    return res.send("welcome afiya router")
})
// router.get('/secure',protectedresource,(req,res)=>{
//    return res.send("welcome afiya router")
// })



router.post('/login',(req,res)=>{
    const{email,password}=req.body
    if(!email||!password){
        return res.status(400).json({error:"please fill all field"})
    }
    usermodel.findOne({email:email})
    .then((dbuser)=>{
        if(!dbuser){
            return res.status(400).json({error:"not found the email"})
        }
        bcrypt.compare(password,dbuser.password)
        .then((passc)=>{
            if(passc){
                //return res.status(201).json({responce:"success"})
               const jwtlogin=jwt.sign({_id:dbuser._id},JWT_SECRET)
               return res.json({token:jwtlogin})




            }
            return res.status(400).json({error:"not the same password"})

        })
        .catch((error)=>{
            console.log(error)
        })

    })
    .catch((error)=>{
        console.log(error)
    })
})


router.post('/re',(req,res)=>{
    console.log(req.body)
    const{fname,lname,email,password}=req.body//object destruturing 
    if(!fname||!lname||!email||!password){
        return res.status(400).json({error:"one or mundatory field is empty"})
    }
    usermodel.findOne({email:email})
    .then((dbuser)=>{
        if(dbuser){
           res.status(400).json({error:"email datory field is empty"})
    
        }

    bcrypt.hash(password,16)
    .then((hasedpassword)=>{
const user= new usermodel({fname,lname,email,password:hasedpassword})
      
    
          user.save()
        .then((user)=>{
            
    res.status(201).json({result:"registor successfully"})
        })
        .catch((error)=>{
            console.log(error)
        })
    })
})
    .catch((error)=>{
        console.log(error)
    })

    
    res.json({result:"registor successfully"})
 });





 router.post('/helthinsurance', function (req, res) {
    HelthInsurance.create(req.body, function (err, HelthInsurance) {

        if (err) {
            res.send('error saving insurance');
        }
        else {
            console.log(HelthInsurance);
            res.send(HelthInsurance);
        }

    })})
     router.post('/Educationinsurance', function (req, res) {
   EducationInsurance.create(req.body, function (err, EducationInsurance) {

        if (err) {
            res.send('error saving insurance');
        }
        else {
            console.log(EducationInsurancee);
            res.send(EducationInsurance);
        }

    })

});
  router.post('/Eventinsurance', function (req, res) {
   EventInsurance.create(req.body, function (err, EventInsurance) {

        if (err) {
            res.send('error saving insurance');
        }
        else {
            console.log(EventInsurancee);
            res.send(EventInsurance);
        }

    })

});

module.exports=router;