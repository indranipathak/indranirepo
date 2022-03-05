const mongoose = require('mongoose')
const Schema = mongoose.Schema
var validateEmail=function(email)
{
    var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const todoSchema = new Schema({
    id:{type:Number,required:true}, 
    email: { type: String, required: true,
        validate:[validateEmail,'please fill valid email'],
         match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"please give a valid email address" ]},
    age:{type:Number, min:[21,'Age is less'], max:[60,'age is more']},
    firstname: { type: String, required:true },
    lastname: { type: String, default: "N/A" }
   
})

module.exports = mongoose.model('user', todoSchema)

