// import jwt from 'jsonwebtoken';
const express  = require('express')
const { body,validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "vitqualityneverendingpolicy"
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",[
body('email','Invalid MailId').isEmail(),
body('password','Incorrect Password').isLength({ min: 5 })]
,async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try{
        await User.create({
            name: req.body.name,
            password :secPassword,
            email :req.body.email,
            location : req.body.location
        })
    res.json({success:true});
    }
    catch{
        console.log("error")
        res.json({success:false});
    }
});

router.post("/loginuser",[
    body('email','Invalid MailId').isEmail(),
    body('password','Incorrect Password').isLength({ min: 5 })]
    ,async(req,res)=>{
    let email = req.body.email;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    try{
       let userData= await User.findOne({email});
       if(!userData){
            return res.status(400).json({errors:"Try logging with correct credentials"})
       }
       const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
       if(!pwdCompare){
            return res.status(400).json({errors:"Try logging with correct credentials"})
       }
       const data = {
            user:{
                id:userData.id
            }
       }
       const authToken = jwt.sign(data,jwtSecret)

       return res.json({success:true,authToken:authToken})
    }
    catch(error){
        console.log(error)
        res.json({success:false});
    }
});

module.exports = router;