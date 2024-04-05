const express = require('express')
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

// const person=require('./models/person');
// const menuItem=require('./models/menuItem');

app.get('/',(req,res)=>{
  res.send("welcome to my hotel ,How can I help you?");
})
// post method to add a menu
// app.post('/menu',async(req,res)=>{
//   try{
// const data=req.body;
// const NEW_MENU=new menuItem(data);
// const response=await NEW_MENU.save();
// console.log('data saved');
// res.status(200).json(response);
//   }
//   catch(err){
// console.log(err);
// res.status(500).json({error:'internal server error'});
//   }
// })
// get method to get the menu items
// app.get('/menu',async(req,res)=>{
//   try{
// const data=await menuItem.find();
// console.log('data fetched');
// res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({
//       error:'Internal server error'
//     });
//   }
//   }
// )
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(3000,()=>{
  console.log("listening on port 3000");
})
