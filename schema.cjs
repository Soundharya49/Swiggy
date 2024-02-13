const mongoose=require('mongoose')

const restaurantschema = new mongoose.Schema({
    areaName:{
        type:String
    },
    avgRating:{
        type:Number
    },
    costForTwo:{
        type:String 
     },
     cuisines:{
        type:Array
      },
      name:{
        type:String
     }  
})
const Restaurant = mongoose.model('restaurantList',restaurantschema)

const userschema = new mongoose.Schema({
    contact:{
        type:Number
    },
    email:{
         type:String  
    },
    password:{
        type:String 
    },
    username:{
        type:String
    }
},{versionKey:false}
)

const Users = mongoose.model('userDetails',userschema)

module.exports={Restaurant,Users}