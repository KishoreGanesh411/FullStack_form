


const mongoose=require('mongoose');

const schema = mongoose.Schema

const FormSchema = new schema({
      Name:{
        type:String,
         required:true
    }, 
    email:{
        type:String,
        required: true,
        unique:true
    },
    phone:{
        type:String,
        require:true,
    },
    // website:{
    //     type:String,
    //     require:true,
    // },
    // constactname:{
    //     type:String,
    //     require:true,
    // }, 
    
    
    


},{
    timestamps:true
}) 

const form =mongoose.model('FormData',FormSchema)

module.exports = form; 