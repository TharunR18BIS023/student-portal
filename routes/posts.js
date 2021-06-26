const router=require("express").Router();
const User=require('../model/User');
const verify =require('./verifyToken')

router.get('/',verify, async (req,res)=>{
    const name= await User.findOne({_id:req.user._id});
if(!name) return res.status(400).send('Email Doesn\'t Exist');
console.log(name);
console.log(req.cookies);
var details={
    name: name.name,
    roll: name.roll,
    email: name.email
}
    res.send(details);
});


router.get('/sem',verify, async (req,res)=>{
    const name= await User.findOne({_id:req.user._id});
if(!name) return res.status(400).send('Email Doesn\'t Exist');
console.log(name.email);
if(name.sem1==null)
    res.send('No sgpa');
else{
    res.send('success');
}
});


router.get('/mark',verify, async (req,res)=>{
    const name= await User.findOne({_id:req.user._id});
console.log(name.email);
var details={
    name: name.name,
    roll: name.roll,
    sem1: name.sem1,
    sem2: name.sem2,
    sem3: name.sem3,
    sem4: name.sem4,
    sem5: name.sem5,
    sem6: name.sem6,
    sem7: name.sem7,
    sem8: name.sem8
}
res.send(details);
});



module.exports=router;