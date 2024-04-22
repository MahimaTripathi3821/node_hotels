const mongoose=require('mongoose');
require('dotenv').config();
const mongoURL=process.env.mongo_URL_LOCAL;
// const mongoURL=process.env.mongo_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser:true,
useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',() =>{
  console.log("hello");
})
db.on('error',() =>{
  console.log("error occurs");
})
db.on('disconnected',() =>{
  console.log("connection is disconnected");
})
module.exports=db;