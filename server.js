const express=require('express');
const app=express();
const db=require('./db');
const Person=require('./Person');
const Menu=require('./Menu');
require('dotenv').config();

const bodyparser=require('body-parser');
app.use(bodyparser.json());
const PORT=process.env.PORT ||4000;



app.get('/',(req,res)=>{
  res.send('welcome to our hotels.we have list of menus ');
});
app.get('/about',(req,res)=>{
  var info={
    name:"mahima",
    age:20,
    post:'CEO of the Hotel'
  }
  res.send(info);
})
app.get('/maggie',(req,res)=>{
var maggielist={
  price:40,
  taste:'Spicy',
  waiting_time:'20 minutes'
}
res.send(maggielist);
})

//Get method to get a person 



// parametrized call in person end point














const PERSONROUTES=require('./personRoutes');
app.use('/person',PERSONROUTES);
const MENUITEMS=require('./menuRoutes');
app.use('/menu',MENUITEMS);


app.listen(PORT,()=>{
  console.log('listening on port 4000');
}) 