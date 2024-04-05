const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels';
mongoose.connect(mongoURL, {
//   useNewUrlParser:true,
// useUnifiedTopology:true
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