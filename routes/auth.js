const router=require("express").Router();
const User=require('../model/User');
const {registerValidation,loginValidation,semValidation,detailValidation}=require('../validation');
const jwt=require('jsonwebtoken');


router.post('/register',async (req,res)=>{

    const {error}=registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

const emailExists=await User.findOne({email:req.body.email});
if(emailExists) return res.status(400).send('Email Exists');

    const user=new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roll: req.body.roll
    });
    try{
        const savedUser=await user.save();
        res.send({user:user.name});
    }catch(err){
        res.status(400).send(err);
    }
});



router.post('/update',async (req,res)=>{
const token=req.header("auth-token");
console.log(token);
console.log(req.body);
    const {error}=semValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decrypt);
    var user = {
      id: decrypt._id
    };
    console.log(user.id);

    try{
await User.updateOne({ _id: user.id },{ $set: {sem1: req.body.sem1, sem2: req.body.sem2,sem3:req.body.sem3,sem4:req.body.sem4,sem5:req.body.sem5,sem6:req.body.sem6,sem7:req.body.sem7,sem8:req.body.sem8 } });
    res.header('auth-token',token).send(token);
    }catch(err){
        res.status(400).send(err);
    }

});



router.post('/login',async (req,res)=>{
    const {error}=loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user=await User.findOne({email:req.body.email});
if(!user) return res.status(400).send('Email Doesn\'t Exist');

const validPass=await req.body.password==user.password;
if(!validPass) return res.status(400).send('Invalid Password');

const token=jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
res.cookie('token',token,{
    secure: false, // set to true if you are using https
    httpOnly: false
});

res.header('auth-token',token).send(token);



});



router.post('/updateUser',async (req,res)=>{
    const token=req.header("auth-token");
    const email=req.header("email");
    console.log(token);
    console.log(email);
    console.log(req.body);
        const {error}=detailValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);


        const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decrypt);
        var user = {
          id: decrypt._id
        };
         console.log(user.id);
    
        try{
    const update=await User.updateOne({ _id: user.id },{ $set: {name: req.body.name, email: req.body.email,roll:req.body.roll}},function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });
    //res.header('auth-token',token).send(token);
    res.header('auth-token',token).send(token);
        }catch(err){
            res.status(400).send(err);
        }
    
    });



module.exports=router;