const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        min: 6
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    roll:{
        type: String,
        required: true
    },
    sem1:{
        type: Number,
        default: null
    },
    sem2:{
        type: Number,
        default: null
    },
    sem3:{
        type: Number,
        default: null
    },
    sem4:{
        type: Number,
        default: null
    },
    sem5:{
        type: Number,
        default: null
    },
    sem6:{
        type: Number,
        default: null
    },
    sem7:{
        type: Number,
        default: null
    },
    sem8:{
        type: Number,
        default: null
    },
});


module.exports=mongoose.model('User',userSchema);