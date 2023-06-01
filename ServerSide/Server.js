const express = require("express");
const mongoose = require("mongoose");
const { MongooseError } = require("mongoose");

const cors = require("cors");
const { type } = require("os");

require("dotenv").config();

const form = require("./Moduls/FormModul");
const { MongoClient } = require("mongodb");

const FormDB = express();



FormDB.use(cors())
FormDB.use(express.json())

const url = process.env.ATLAS_URL;
// {
//   Another Step =>

//   MongoClient.connect("Yours Mongo Db Url",{userNewURLparser:true})
// }

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("Database connection successful");
  
})
.catch((error) => {
  console.error("Database connection error:", error);
});
const circularProperty = form.circularProperty;
delete form.circularProperty;
const jsonString = JSON.stringify(form);
form.circularProperty = circularProperty;



const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongoose database Coneected Successfuly");
});

FormDB.post('./form',(req,res)=>{

  const {Name,email,phone} = req.body 

  console.log(Name+""+email);
})


// FormDB.get("/", (req, res) => {
//   res.json({ msg: "welcome to Database" });
// });

// FormDB.get("/get-data", (req, res) => {
//   res.json({ msg: "Get Method" });
// });

FormDB.post('/form',(req,res)=>{
  const {Name,email,phone,website,contactName}=req.body;
  const FormData= new form ({Name,email,phone,website,contactName})

  FormData.save();

})


FormDB.listen("8000", () => {
  console.log("DataBS running SUccesfuly");
});
