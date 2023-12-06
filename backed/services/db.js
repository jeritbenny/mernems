const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Ems')
const Ems = mongoose.model('Ems',{
    id:String,
    name:String,
    age:String,
    desg:String,
    salary:Number
})

module.exports={
    Ems
}