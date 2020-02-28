const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ticketSchema=new Schema({

code:{
    type:String,
    required:true
},
priority:{
    type:String,
    enum:["high","medium","low"],
    required:true
},
customer:{
    type:Schema.Types.ObjectId,
    ref:"Customer",
    required:true
},
department:{
    type:Schema.Types.ObjectId,
    ref:"Department",
    required:true
},
employee:{
  //  type:Schema.Types.ObjectId
    type:[{'_id':Schema.Types.ObjectId}],
    ref:"Employee",
    required:true
},
message:{
    type:String,
    minlength:5,
    isResolve:false
},
isResolve:{
    type:Boolean,
    default:false
},
createdAt:{
    type:Date,
    default:Date.now()
}
}) 

const Ticket=mongoose.model('Ticket',ticketSchema)

module.exports=Ticket