const express=require('express');
const router=express.Router();
const person=require('./../models/person')
router.post('/person',async(req,res)=>{
  try{
const data=req.body;
const newPerson=new person(data)
const  response=await newPerson.save();
console.log('data saved');
res.status(200).json(response);
}
  catch(err){
    console.log(err);
    res.status(500).json({
      error:'Internal server error'
    });
  }
 
})
router.get('/',async(req,res)=>{
  try{
const data= await person.find();
console.log("data saved");
res.status(200).json(data);

  }
  catch(err){
    console.log(err);
    res.status(500).json({
      error:'Internal server error'
    });
  }
})
router.get('/:workType',async(req,res)=>{
  try{
  const workType=req.params.workType;
  if (workType=='chef'|| workType=='manager'||workType=='waiter'){
const response= await person.find({work:workType});
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
router.put('/:id',async(req,res)=>{
  try{
const personId=req.params.id;
const updatedPersonData=req.body;
const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
  new:true,
  runValidators:true,
})
if(!response){
  return res.status(404).json({
    error:'person not found'
  });
}
console.log('data updated');
res.status(200).json(response);

  }
  catch(err){
console.log(err);
res.status(500).json({error:'internal server error'});
  }
})
router.delete('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const response=person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error:'person not found'});
    }
    console.log("data deleted ");
    res.status(200).json({message:"person deleted successfully"});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
      }
})
module.exports=router;