const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menuItem')
router.post('/',async(req,res)=>{
  try{
const data=req.body;
const NEW_MENU=new menuItem(data);
const response=await NEW_MENU.save();
console.log('data saved');
res.status(200).json(response);
  }
  catch(err){
console.log(err);
res.status(500).json({error:'internal server error'});
  }
})
router.get('/',async(req,res)=>{
  try{
const data=await menuItem.find();
console.log('data fetched');
res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      error:'Internal server error'
    });
  }
  }
)
router.get('/:tasteType',async(req,res)=>{
  try{
  const tasteType=req.params.tasteType;
  if (tasteType=='spicy'|| tasteType=='sweet'||tasteType=='sour'){
const response= await menuItem.find({test:tasteType});
console.log('response fetched')
res.status(200).json(response)
  }
  else{
    res.status(500).json({
      error:'internal server error'
    });
  }
}
catch(err){
  console.log(err);
  res.status(500).json({
    error:'Internal server error'
  });
}
})
// comment added for testing purpose
module.exports=router;