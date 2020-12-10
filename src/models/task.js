const mongoose = require('mongoose')
const Schema = mongoose.Schema


//modelo de datos para la base de datos
//tipo de datos que almacena la base de datos
const TaskSchema = new Schema({
    title: String,
    description: String,
    status:{
        type:Boolean,
        default:false   
    }
})

model.exports = mongoose.model('tasks', TaskSchema) //nmbre collecion para escribir sobre la BD y  esquema con el modelo de datos

