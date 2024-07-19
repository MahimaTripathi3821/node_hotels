const express=require('express');
const router=express.Router();
const Menu=require('./Menu');
router.post('/',async(req,res)=>{
  try{
const data=req.body;
const newMenu=new Menu(data);
const result=await newMenu.save();
    console.log('data saved');
    res.status(200).json(result);
  }
  catch(err){
    console.log('error occurs in menu item');
    res.status(500).json('Internal server error');
  }
})

router.get('/',async(req,res)=>{
  try{
const data=await Menu.find();
console.log('data fetched sucessfuly');
  res.status(200).json(data);
  }
  catch(err){
    console.log('error occurs in menu item');
    res.status(500).json('Internal server error');
  }
})

router.get('/:tastetype',async(req,res)=>{
  try{

    const tastetype=req.params.tastetype;
    if(tastetype=='spicy'||tastetype=='sweet'||tastetype=='sour'){
    const result=await Menu.find({taste:tastetype})
    res.status(200).json(result);
    }
    else{
    res.status(404).json({error:'invalid tastetype'});
    }

  }
  catch(err){
console.log('error occurs',err);
res.status(500).json({error:'internal server error'});
  }

})
module.exports=router;