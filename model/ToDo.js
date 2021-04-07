const {Schema, model } = require('mongoose')

const todoSchema = new Schema({
    id : {type : Number},

    title :{
        type : String,
        required: true
        },

    description : String,

    status :{
        type: String,
        enum : ["active", "inactive"]
    },

    date :{type :  Date , default : Date.now},
    
})

const todo = model('Todo' , todoSchema)

module.exports = todo