const express=require('express');
const router=express.Router();
const Person=require('./Person');
router.post('/',async(req,res)=>{
  try{
    const data=req.body;
    const newperson=new Person(data);
    const response=await newperson.save();
    console.log('data saved');
    res.status(200).json(response);

  }
  catch(err){
console.log(err);
res.status(500).json({error:'Internal Server Error'});
  }

})


router.get('/',async(req,res)=>{
  try{const data= await Person.find();
    console.log('data fetched sucessfuly');
    res.status(200).json(data);
    
  
  }
  catch(err){
  console.log('error occurs',err);
  res.status(500).json({error:'Internal Server Error'});
  }
  });

  router.get('/:worktype',async(req,res)=>{
    try{
  
      const works=req.params.worktype;
      if(works=='chef'||works=='manager'||works=='waiter'){
      const result=await Person.find({work:works})
      res.status(200).json(result);
      }
      else{
      res.status(404).json({error:'invalid work type'});
      }
  
  
  
    }
    catch(err){
  console.log('error occurs',err);
  res.status(500).json({error:'internal server error'});
    }
  
  })

  router.put('/:id',async(req,res)=>{
    try{
          const personId=req.params.id;
          const updatedPerson=req.body;
          const response=await Person.findByIdAndUpdate(personId,updatedPerson,{
            new: true,
            runValidators:true
    })
    
if(!response){
return res.status(404).json({error:'person not found'});
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
const id=req.params.id;
const response=await Person.findByIdAndDelete(id);
res.status(200).json('data deleted successfuly');
}
catch(err){
console.log(err);
res.status(500).json('internal server error');
}
  })
  module.exports=router;