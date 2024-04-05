const mongoose=require('mongoose');
const menuItemSchema= new mongoose.Schema({
name:{
  type:String,
  required:true
},
price:{
  type:Number,
  requiresd:true,
},
test:{
  type:String,
  enum:['sweet','spicy','sour'],
  required:true,
},
is_drink:{
  type:Boolean,
  default:false,
},
ingredients:{
  types:[String],
  default:[],
},
no_sales:{
  type:Number,
  default:0,
}
})
const newItem=mongoose.model('newItem',menuItemSchema);
module.exports=newItem;